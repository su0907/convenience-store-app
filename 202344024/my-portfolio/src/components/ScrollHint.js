import React from "react";

export const ScrollHint = ({ currentSection, totalSections, isDarkMode }) => {
  // Hero 섹션(0)이거나 마지막 섹션이면 숨김
  if (currentSection === 0 || currentSection >= totalSections - 1) {
    return null;
  }

  return (
    <div className="fixed bottom-8 left-0 right-0 flex justify-center">
      <div
        className={`animate-bounce ${
          isDarkMode ? "text-gray-400" : "text-gray-600"
        }`}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">스크롤해주세요</span>
          <div
            className={`w-px h-8 ${isDarkMode ? "bg-gray-400" : "bg-gray-600"}`}
          ></div>
          <div
            className={`w-0 h-0 border-l-2 border-r-2 border-t-4 border-l-transparent border-r-transparent mt-1 ${
              isDarkMode ? "border-t-gray-400" : "border-t-gray-600"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};
