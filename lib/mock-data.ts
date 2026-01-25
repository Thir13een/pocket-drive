export const mockFiles = [
  { id: 1, name: "Documents", type: "folder", items: 12, modified: "2 days ago" },
  { id: 2, name: "Photos", type: "folder", items: 48, modified: "1 week ago" },
  { id: 3, name: "Projects", type: "folder", items: 5, modified: "3 days ago" },
  { id: 4, name: "presentation.pptx", type: "file", size: "2.4 MB", modified: "Yesterday" },
  { id: 5, name: "report.pdf", type: "file", size: "1.2 MB", modified: "3 days ago" },
  { id: 6, name: "design-mockup.fig", type: "file", size: "8.7 MB", modified: "1 week ago" },
  { id: 7, name: "notes.txt", type: "file", size: "12 KB", modified: "Today" },
  { id: 8, name: "budget.xlsx", type: "file", size: "524 KB", modified: "5 days ago" },
];

export type FileItem = (typeof mockFiles)[number];
