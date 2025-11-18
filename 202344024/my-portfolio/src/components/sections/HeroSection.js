import React from "react";

export const HeroSection = ({
  section,
  themeColors,
  isDarkMode,
  onExploreClick,
  isActive,
}) => {
  return (
    <div className="text-center max-w-4xl px-8">
      <div
        className={`transform transition-all duration-1000 delay-300 ${
          isActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h1
          className={`text-6xl md:text-7xl font-bold mb-6 leading-tight ${themeColors.text}`}
        >
          {section.title}
        </h1>
        <h2
          className={`text-3xl md:text-4xl mb-4 ${themeColors.accent} font-semibold`}
        >
          {section.subtitle}
        </h2>
        <p
          className={`text-5xl md:text-6xl font-bold mb-8 ${themeColors.text}`}
        >
          {section.content}
        </p>
        <button
          onClick={onExploreClick}
          className={`mt-8 px-8 py-4 backdrop-blur-sm border rounded-full transition-all duration-300 transform hover:scale-105 ${
            isDarkMode
              ? "bg-cyan-400/20 border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/30"
              : "bg-blue-600/20 border-blue-600/30 text-blue-600 hover:bg-blue-600/30"
          }`}
        >
          더 알아보기 →
        </button>
      </div>
    </div>
  );
};
