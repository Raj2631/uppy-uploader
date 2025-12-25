import type { UploadProgress } from "../types";

interface ProgressBarProps {
  progress: UploadProgress;
  isUploading: boolean;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  if (progress.completedFiles === 0) {
    return null;
  }

  const overallProgress =
    progress.totalFiles > 0
      ? (progress.completedFiles / progress.totalFiles) * 100
      : 0;

  const bytesProgress =
    progress.totalBytes > 0
      ? (progress.uploadedBytes / progress.totalBytes) * 100
      : 0;

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold text-gray-100">
          Overall Progress
        </h3>
        <span className="text-sm text-gray-400">
          {progress.completedFiles} / {progress.totalFiles} files
        </span>
      </div>

      <div className="mb-3">
        <div className="w-full bg-gray-700 rounded-full h-2.5 mb-1">
          <div
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${overallProgress}%` }}
          />
        </div>
        <p className="text-xs text-gray-400">
          {Math.round(overallProgress)}% complete
        </p>
      </div>

      <div className="flex items-center justify-between text-xs text-gray-400">
        <span>
          {formatBytes(progress.uploadedBytes)} /{" "}
          {formatBytes(progress.totalBytes)}
        </span>
        <div className="w-32 bg-gray-700 rounded-full h-1.5">
          <div
            className="bg-green-500 h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${bytesProgress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
