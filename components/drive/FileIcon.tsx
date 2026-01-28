import {
  Folder,
  FileText,
  Image,
  FileSpreadsheet,
  Presentation,
  File,
  FileCode,
  FileArchive,
  FileAudio,
  FileVideo,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FileIconProps {
  name: string;
  type: "folder" | "file";
  className?: string;
}

const iconColors: Record<string, string> = {
  folder: "bg-indigo-500/20 text-indigo-400",
  pdf: "bg-red-500/20 text-red-400",
  doc: "bg-blue-500/20 text-blue-400",
  docx: "bg-blue-500/20 text-blue-400",
  txt: "bg-slate-500/20 text-slate-400",
  pptx: "bg-orange-500/20 text-orange-400",
  ppt: "bg-orange-500/20 text-orange-400",
  xlsx: "bg-green-500/20 text-green-400",
  xls: "bg-green-500/20 text-green-400",
  csv: "bg-green-500/20 text-green-400",
  fig: "bg-purple-500/20 text-purple-400",
  png: "bg-pink-500/20 text-pink-400",
  jpg: "bg-pink-500/20 text-pink-400",
  jpeg: "bg-pink-500/20 text-pink-400",
  gif: "bg-pink-500/20 text-pink-400",
  svg: "bg-pink-500/20 text-pink-400",
  webp: "bg-pink-500/20 text-pink-400",
  mp3: "bg-amber-500/20 text-amber-400",
  wav: "bg-amber-500/20 text-amber-400",
  mp4: "bg-cyan-500/20 text-cyan-400",
  mov: "bg-cyan-500/20 text-cyan-400",
  avi: "bg-cyan-500/20 text-cyan-400",
  zip: "bg-yellow-500/20 text-yellow-400",
  rar: "bg-yellow-500/20 text-yellow-400",
  "7z": "bg-yellow-500/20 text-yellow-400",
  js: "bg-yellow-500/20 text-yellow-400",
  ts: "bg-blue-500/20 text-blue-400",
  tsx: "bg-blue-500/20 text-blue-400",
  jsx: "bg-yellow-500/20 text-yellow-400",
  json: "bg-slate-500/20 text-slate-400",
  default: "bg-slate-500/20 text-slate-400",
};

function getExtension(filename: string): string {
  const parts = filename.split(".");
  if (parts.length > 1) {
    return parts[parts.length - 1].toLowerCase();
  }
  return "";
}

function getIcon(type: "folder" | "file", extension: string) {
  if (type === "folder") {
    return Folder;
  }

  const imageExts = ["png", "jpg", "jpeg", "gif", "svg", "webp", "bmp"];
  const audioExts = ["mp3", "wav", "ogg", "flac", "aac"];
  const videoExts = ["mp4", "mov", "avi", "mkv", "webm"];
  const archiveExts = ["zip", "rar", "7z", "tar", "gz"];
  const codeExts = ["js", "ts", "tsx", "jsx", "py", "java", "cpp", "c", "go", "rs", "json", "html", "css"];
  const spreadsheetExts = ["xlsx", "xls", "csv"];
  const presentationExts = ["pptx", "ppt"];
  const docExts = ["pdf", "doc", "docx", "txt", "md"];

  if (imageExts.includes(extension)) return Image;
  if (audioExts.includes(extension)) return FileAudio;
  if (videoExts.includes(extension)) return FileVideo;
  if (archiveExts.includes(extension)) return FileArchive;
  if (codeExts.includes(extension)) return FileCode;
  if (spreadsheetExts.includes(extension)) return FileSpreadsheet;
  if (presentationExts.includes(extension)) return Presentation;
  if (docExts.includes(extension)) return FileText;

  return File;
}

export function FileIcon({ name, type, className }: FileIconProps) {
  const extension = getExtension(name);
  const Icon = getIcon(type, extension);
  const colorKey = type === "folder" ? "folder" : (iconColors[extension] ? extension : "default");
  const colorClass = iconColors[colorKey];

  return (
    <div className={cn("file-icon", colorClass, className)}>
      <Icon className="w-6 h-6" />
    </div>
  );
}
