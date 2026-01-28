"use client";

import { use } from "react";
import Link from "next/link";
import { FileGrid } from "@/components/drive/FileGrid";
import { getFolderContents, getFolderPath, getFileById } from "@/lib/mock-data";
import { ChevronRight, Home } from "lucide-react";
import "../../drive.css";

interface FolderPageProps {
  params: Promise<{ id: string }>;
}

export default function FolderPage({ params }: FolderPageProps) {
  const { id } = use(params);
  const folderId = parseInt(id, 10);
  const folder = getFileById(folderId);
  const files = getFolderContents(folderId);
  const path = getFolderPath(folderId);

  if (!folder) {
    return (
      <div className="drive-container">
        <p className="text-slate-400">Folder not found</p>
      </div>
    );
  }

  return (
    <div className="drive-container">
      <header className="drive-header">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link href="/drive" className="breadcrumb-item">
            <Home className="w-4 h-4" />
            <span>My Drive</span>
          </Link>
          {path.map((item, index) => (
            <span key={item.id} className="breadcrumb-segment">
              <ChevronRight className="w-4 h-4 text-slate-500" />
              {index === path.length - 1 ? (
                <span className="breadcrumb-current">{item.name}</span>
              ) : (
                <Link href={`/drive/folder/${item.id}`} className="breadcrumb-item">
                  {item.name}
                </Link>
              )}
            </span>
          ))}
        </nav>
        <h1>{folder.name}</h1>
      </header>
      <FileGrid files={files} />
    </div>
  );
}
