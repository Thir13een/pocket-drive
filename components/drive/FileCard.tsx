"use client";

import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { FileIcon } from "./FileIcon";
import { Checkbox } from "@/components/ui/checkbox";

interface FileCardProps {
  id: number;
  name: string;
  type: "folder" | "file";
  items?: number;
  size?: string;
  modified: string;
  selected?: boolean;
  onSelect?: (id: number, selected: boolean) => void;
}

export function FileCard({
  id,
  name,
  type,
  items,
  size,
  modified,
  selected = false,
  onSelect,
}: FileCardProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest(".file-card-checkbox")) {
      return;
    }

    if (type === "folder") {
      router.push(`/drive/folder/${id}`);
    } else {
      window.open(`/drive/file/${id}`, "_blank");
    }
  };

  const handleSelect = (checked: boolean) => {
    onSelect?.(id, checked);
  };

  return (
    <div
      className={cn("file-card", selected && "file-card-selected")}
      onClick={handleClick}
    >
      <div className="file-card-checkbox">
        <Checkbox
          checked={selected}
          onCheckedChange={handleSelect}
        />
      </div>

      <FileIcon name={name} type={type} />

      <div className="file-card-info">
        <span className="file-card-name" title={name}>
          {name}
        </span>
        <span className="file-card-meta">
          {type === "folder" ? `${items} items` : size} · {modified}
        </span>
      </div>
    </div>
  );
}
