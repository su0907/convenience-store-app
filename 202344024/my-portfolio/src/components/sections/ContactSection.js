import React from "react";

export const ContactSection = ({ section, themeColors, isActive }) => {
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
          className={`text-2xl md:text-3xl mb-8 opacity-90 ${themeColors.accent}`}
        >
          {section.subtitle}
        </h2>
        <div
          className={`text-lg md:text-xl leading-relaxed max-w-3xl mx-auto ${themeColors.secondary}`}
        >
          <div className="space-y-4">
            <p className="flex items-center justify-center space-x-3">
              <span className="font-semibold">Email:</span>
              <a
                href="mailto:raanggo@naver.com"
                className={`${themeColors.accent} hover:underline transition-all duration-300 hover:scale-105 inline-block`}
                target="_blank"
                rel="noopener noreferrer"
              >
                raanggo@naver.com
              </a>
            </p>
            <p className="flex items-center justify-center space-x-3">
              <span className="font-semibold">GitHub:</span>
              <a
                href="https://github.com/su0907"
                className={`${themeColors.accent} hover:underline transition-all duration-300 hover:scale-105 inline-block`}
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/su0907
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
