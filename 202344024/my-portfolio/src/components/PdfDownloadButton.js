import React from "react";

export const PdfDownloadButton = ({ isDarkMode }) => {
  const handleDownload = () => {
    // public 폴더의 PDF 파일 다운로드
    const link = document.createElement("a");
    link.href = "/202344024_김민수_포트폴리오.pdf";
    link.download = "202344024_김민수_포트폴리오.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className={`fixed top-6 right-24 z-50 flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
        isDarkMode
          ? "bg-gray-800 text-white hover:bg-gray-700"
          : "bg-white text-gray-700 hover:bg-gray-50 shadow-lg"
      } backdrop-blur-sm border ${
        isDarkMode ? "border-gray-600" : "border-gray-200"
      }`}
      title="포트폴리오 PDF 다운로드"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      <span className="text-sm font-medium">PDF</span>
    </button>
  );
};
