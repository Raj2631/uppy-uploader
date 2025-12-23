import "./App.css";
import { DropZone } from "./components/Dropzone";

function App() {
  const handleFilesAdded = (files: File[]) => {
    console.log(files);
  };
  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Image Uploader
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Upload images to Cloudinary with a custom UI
            </p>
          </header>
        </div>
        <DropZone onFilesAdded={handleFilesAdded} />
      </div>
    </>
  );
}

export default App;
