"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { getFileById } from "@/lib/mock-data";
import { FileIcon } from "@/components/drive/FileIcon";
import {
  ArrowLeft,
  Download,
  Share2,
  Star,
  FolderInput,
  Pencil,
  Copy,
  Trash2,
  MoreVertical,
  X,
} from "lucide-react";
import "./file-preview.css";

interface FilePreviewPageProps {
  params: Promise<{ id: string }>;
}

export default function FilePreviewPage({ params }: FilePreviewPageProps) {
  const { id } = use(params);
  const router = useRouter();
  const fileId = parseInt(id, 10);
  const file = getFileById(fileId);

  if (!file || file.type === "folder") {
    return (
      <div className="file-preview-container">
        <p className="text-slate-400">File not found</p>
      </div>
    );
  }

  const handleClose = () => {
    window.close();
  };

  const handleBack = () => {
    router.back();
  };

  const actions = [
    { icon: Download, label: "Download", onClick: () => console.log("Download") },
    { icon: Share2, label: "Share", onClick: () => console.log("Share") },
    { icon: Star, label: "Star", onClick: () => console.log("Star") },
    { icon: FolderInput, label: "Move", onClick: () => console.log("Move") },
    { icon: Pencil, label: "Rename", onClick: () => console.log("Rename") },
    { icon: Copy, label: "Copy", onClick: () => console.log("Copy") },
    { icon: Trash2, label: "Trash", onClick: () => console.log("Trash") },
  ];

  return (
    <div className="file-preview-container">
      {/* Header */}
      <header className="file-preview-header">
        <div className="file-preview-header-left">
          <button onClick={handleBack} className="file-preview-back">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="file-preview-filename">{file.name}</span>
        </div>
        <div className="file-preview-header-right">
          <button className="file-preview-more">
            <MoreVertical className="w-5 h-5" />
          </button>
          <button onClick={handleClose} className="file-preview-close">
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Preview Area */}
      <div className="file-preview-content">
        <div className="file-preview-placeholder">
          <FileIcon name={file.name} type={file.type} className="file-preview-icon" />
          <h2 className="file-preview-name">{file.name}</h2>
          <p className="file-preview-meta">
            {file.size} · Modified {file.modified}
          </p>
        </div>
      </div>

      {/* Action Toolbar */}
      <footer className="file-preview-actions">
        {actions.map((action) => (
          <button
            key={action.label}
            onClick={action.onClick}
            className="file-preview-action"
          >
            <action.icon className="w-5 h-5" />
            <span>{action.label}</span>
          </button>
        ))}
      </footer>
    </div>
  );
}
