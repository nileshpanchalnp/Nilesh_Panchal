import { useState } from "react";
import { Button } from "react-bootstrap";
import { Download } from "lucide-react";
import CV from "../imgs/CV_IMG.jpg";

export default function Resume() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const pdfUrl = "Nilesh_CV.pdf";
      const response = await fetch(pdfUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Nilesh_resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <>
      <div className="min-h-[30vh] flex flex-col items-center justify-center  p-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Online Resume</h1>
          <Button
            onClick={handleDownload}
            disabled={isDownloading}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 flex items-center"
          >
            <Download className="mr-2 h-5 w-5" />
            {isDownloading ? "Downloading..." : "Download PDF Version"}
          </Button>
        </div>
      </div>
      <div className="relative w-full min-h-screen flex justify-center items-center overflow-hidden">
        <img
          src={CV}
          alt="Chris Evans"
          className="w-full h-auto object-contain"
        />
      </div>
    </>
  );
}
