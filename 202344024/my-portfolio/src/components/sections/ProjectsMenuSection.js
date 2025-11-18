import React from "react";
import { getProjectsData } from "../../data/sections";

export const ProjectsMenuSection = ({
  section,
  themeColors,
  isDarkMode,
  isActive,
  onProjectSelect,
}) => {
  const projects = getProjectsData(themeColors);

  return (
    <div className="w-full h-full flex items-center justify-center px-8">
      <div
        className={`transform transition-all duration-1000 delay-300 ${
          isActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h1
            className={`text-5xl md:text-6xl font-bold mb-4 ${themeColors.text}`}
          >
            {section.title}
          </h1>
          <h2 className={`text-2xl md:text-3xl mb-12 ${themeColors.accent}`}>
            {section.subtitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => onProjectSelect(project)}
                className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                  isDarkMode
                    ? "bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700"
                    : "bg-white/80 hover:bg-white border border-gray-200"
                } backdrop-blur-sm`}
              >
                {/* 배경 그라데이션 효과 */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color(
                    isDarkMode
                  )} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>

                {/* 아이콘 */}
                <div className="relative text-6xl mb-6">{project.icon}</div>

                {/* 제목 */}
                <h3
                  className={`relative text-2xl font-bold mb-3 ${themeColors.text}`}
                >
                  {project.title}
                </h3>

                {/* 부제목 */}
                <p
                  className={`relative text-sm mb-4 ${themeColors.accent} font-semibold`}
                >
                  {project.subtitle}
                </p>

                {/* 설명 */}
                <p
                  className={`relative text-base ${themeColors.secondary} leading-relaxed`}
                >
                  {project.description}
                </p>

                {/* 화살표 아이콘 */}
                <div
                  className={`relative mt-6 flex items-center justify-center ${themeColors.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                >
                  <span className="text-sm font-semibold mr-2">
                    자세히 보기
                  </span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
