import React from "react";

export const NavigationDots = ({
  sections,
  currentSection,
  isDarkMode,
  onNavigate,
}) => {
  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 flex flex-col space-y-4">
      {sections.map((section, index) => (
        <button
          key={section.id}
          onClick={() => onNavigate(index)}
          className={`group relative w-3 h-3 rounded-full transition-all duration-300 ${
            currentSection === index
              ? isDarkMode
                ? "bg-cyan-400 scale-150"
                : "bg-blue-600 scale-150"
              : isDarkMode
              ? "bg-gray-600 hover:bg-cyan-400/50"
              : "bg-gray-400 hover:bg-blue-600/50"
          }`}
          aria-label={`Go to ${section.title}`}
        >
          <span
            className={`absolute right-6 top-1/2 -translate-y-1/2 whitespace-nowrap px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              isDarkMode
                ? "bg-gray-800 text-white"
                : "bg-white text-gray-700 shadow-lg"
            }`}
          >
            {section.title}
          </span>
        </button>
      ))}
    </div>
  );
};
