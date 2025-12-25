interface ActionButtonsProps {
  hasFiles: boolean;
  onUpload: () => void;
  hasCompleted: boolean;
  onClearCompleted: () => void;
}

export function ActionButtons({
  hasFiles,
  onUpload,
  hasCompleted,
  onClearCompleted,
}: ActionButtonsProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-4">
      {hasFiles && (
        <button
          onClick={onUpload}
          className="px-4 py-2 cursor-pointer bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Upload All
        </button>
      )}

      {hasCompleted && (
        <button
          onClick={onClearCompleted}
          className="px-4 py-2 cursor-pointer bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
        >
          Clear Completed
        </button>
      )}
    </div>
  );
}
