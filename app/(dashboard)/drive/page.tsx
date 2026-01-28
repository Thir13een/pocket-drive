import { FileGrid } from "@/components/drive/FileGrid";
import { mockFiles } from "@/lib/mock-data";
import "./drive.css";

export default function DrivePage() {
  return (
    <div className="drive-container">
      <header className="drive-header">
        <h1>My Drive</h1>
      </header>
      <FileGrid files={mockFiles} />
    </div>
  );
}
