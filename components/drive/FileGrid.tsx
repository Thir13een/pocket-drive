"use client";

import { useState } from "react";
import { FileCard } from "./FileCard";
import type { FileItem } from "@/lib/mock-data";
import { FolderOpen } from "lucide-react";

interface FileGridProps {
  files: FileItem[];
  onSelectionChange?: (ids: number[]) => void;
}

export function FileGrid({ files, onSelectionChange }: FileGridProps) {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const handleSelect = (id: number, selected: boolean) => {
    const newSelection = selected
      ? [...selectedIds, id]
      : selectedIds.filter((sid) => sid !== id);

    setSelectedIds(newSelection);
    onSelectionChange?.(newSelection);
  };

  if (files.length === 0) {
    return (
      <div className="file-grid-empty">
        <FolderOpen className="w-16 h-16 text-slate-500 mb-4" />
        <p className="text-slate-400 text-lg">This folder is empty</p>
        <p className="text-slate-500 text-sm">Drop files here or use the upload button</p>
      </div>
    );
  }

  return (
    <div className="file-grid">
      {files.map((file) => (
        <FileCard
          key={file.id}
          id={file.id}
          name={file.name}
          type={file.type}
          items={file.items}
          size={file.size}
          modified={file.modified}
          selected={selectedIds.includes(file.id)}
          onSelect={handleSelect}
        />
      ))}
    </div>
  );
}
