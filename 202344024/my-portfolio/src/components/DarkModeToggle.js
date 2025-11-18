import React from "react";

export const DarkModeToggle = ({ isDarkMode, onToggle }) => {
  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={onToggle}
        className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
          isDarkMode
            ? "bg-gray-800 text-white hover:bg-gray-700"
            : "bg-white/90 text-gray-700 hover:bg-white shadow-lg"
        } backdrop-blur-sm border ${
          isDarkMode ? "border-gray-600" : "border-gray-200"
        }`}
      >
        {isDarkMode ? (
          <>
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
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <span className="text-sm font-medium">라이트</span>
          </>
        ) : (
          <>
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
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
            <span className="text-sm font-medium">다크</span>
          </>
        )}
      </button>
    </div>
  );
};
