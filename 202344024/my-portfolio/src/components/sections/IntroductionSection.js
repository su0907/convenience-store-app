import React from "react";

export const IntroductionSection = ({ section, themeColors, isActive }) => {
  return (
    <div className="text-center max-w-4xl px-8">
      <div
        className={`transform transition-all duration-1000 delay-300 ${
          isActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h1
          className={`text-5xl md:text-6xl font-bold mb-6 leading-tight ${themeColors.text}`}
        >
          {section.title}
        </h1>
        <h2
          className={`text-2xl md:text-3xl mb-12 opacity-90 ${themeColors.accent}`}
        >
          {section.subtitle}
        </h2>
        <div
          className={`text-lg md:text-xl leading-relaxed max-w-3xl mx-auto ${themeColors.secondary} text-left`}
        >
          {section.content.split("\n\n").map((paragraph, i) => (
            <p key={i} className="mb-6">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
