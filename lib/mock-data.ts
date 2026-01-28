export interface FileItem {
  id: number;
  name: string;
  type: "folder" | "file";
  items?: number;
  size?: string;
  modified: string;
  parentId?: number | null;
}

// Root level files (My Drive)
export const mockFiles: FileItem[] = [
  { id: 1, name: "Documents", type: "folder", items: 12, modified: "2 days ago", parentId: null },
  { id: 2, name: "Photos", type: "folder", items: 48, modified: "1 week ago", parentId: null },
  { id: 3, name: "Projects", type: "folder", items: 5, modified: "3 days ago", parentId: null },
  { id: 4, name: "presentation.pptx", type: "file", size: "2.4 MB", modified: "Yesterday", parentId: null },
  { id: 5, name: "report.pdf", type: "file", size: "1.2 MB", modified: "3 days ago", parentId: null },
  { id: 6, name: "design-mockup.fig", type: "file", size: "8.7 MB", modified: "1 week ago", parentId: null },
  { id: 7, name: "notes.txt", type: "file", size: "12 KB", modified: "Today", parentId: null },
  { id: 8, name: "budget.xlsx", type: "file", size: "524 KB", modified: "5 days ago", parentId: null },
];

// Folder contents
export const folderContents: Record<number, FileItem[]> = {
  // Documents folder
  1: [
    { id: 101, name: "Work", type: "folder", items: 8, modified: "1 day ago", parentId: 1 },
    { id: 102, name: "Personal", type: "folder", items: 4, modified: "3 days ago", parentId: 1 },
    { id: 103, name: "resume.pdf", type: "file", size: "245 KB", modified: "1 week ago", parentId: 1 },
    { id: 104, name: "cover-letter.docx", type: "file", size: "32 KB", modified: "5 days ago", parentId: 1 },
    { id: 105, name: "contract.pdf", type: "file", size: "1.1 MB", modified: "2 weeks ago", parentId: 1 },
  ],
  // Photos folder
  2: [
    { id: 201, name: "Vacation 2024", type: "folder", items: 24, modified: "2 weeks ago", parentId: 2 },
    { id: 202, name: "Family", type: "folder", items: 15, modified: "1 month ago", parentId: 2 },
    { id: 203, name: "screenshot.png", type: "file", size: "1.2 MB", modified: "Today", parentId: 2 },
    { id: 204, name: "profile-photo.jpg", type: "file", size: "2.8 MB", modified: "3 days ago", parentId: 2 },
    { id: 205, name: "wallpaper.png", type: "file", size: "4.5 MB", modified: "1 week ago", parentId: 2 },
  ],
  // Projects folder
  3: [
    { id: 301, name: "Website Redesign", type: "folder", items: 12, modified: "Yesterday", parentId: 3 },
    { id: 302, name: "Mobile App", type: "folder", items: 8, modified: "4 days ago", parentId: 3 },
    { id: 303, name: "requirements.md", type: "file", size: "15 KB", modified: "2 days ago", parentId: 3 },
    { id: 304, name: "wireframes.fig", type: "file", size: "12.4 MB", modified: "1 day ago", parentId: 3 },
  ],
  // Documents > Work folder
  101: [
    { id: 1011, name: "meeting-notes.txt", type: "file", size: "8 KB", modified: "Today", parentId: 101 },
    { id: 1012, name: "quarterly-report.xlsx", type: "file", size: "890 KB", modified: "Yesterday", parentId: 101 },
    { id: 1013, name: "presentation-draft.pptx", type: "file", size: "5.2 MB", modified: "2 days ago", parentId: 101 },
  ],
  // Documents > Personal folder
  102: [
    { id: 1021, name: "recipes.txt", type: "file", size: "12 KB", modified: "1 week ago", parentId: 102 },
    { id: 1022, name: "travel-plans.pdf", type: "file", size: "340 KB", modified: "3 days ago", parentId: 102 },
  ],
};

// All files combined for lookup
const allFiles: FileItem[] = [
  ...mockFiles,
  ...Object.values(folderContents).flat(),
];

// Helper functions
export function getFileById(id: number): FileItem | undefined {
  return allFiles.find((file) => file.id === id);
}

export function getFolderContents(folderId: number): FileItem[] {
  return folderContents[folderId] || [];
}

export function getFolderPath(folderId: number): FileItem[] {
  const path: FileItem[] = [];
  let currentId: number | null | undefined = folderId;

  while (currentId) {
    const folder = getFileById(currentId);
    if (folder) {
      path.unshift(folder);
      currentId = folder.parentId;
    } else {
      break;
    }
  }

  return path;
}
