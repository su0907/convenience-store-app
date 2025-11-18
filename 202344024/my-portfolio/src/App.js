import React, { useState, useEffect } from "react";
import { useScrollNavigation } from "./hooks/useScrollNavigation";
import { DarkModeToggle } from "./components/DarkModeToggle";
import { PdfDownloadButton } from "./components/PdfDownloadButton";
import { NavigationDots } from "./components/NavigationDots";
import { ScrollHint } from "./components/ScrollHint";
import { HeroSection } from "./components/sections/HeroSection";
import { ProfileSection } from "./components/sections/ProfileSection";
import { IntroductionSection } from "./components/sections/IntroductionSection";
import { ProjectsMenuSection } from "./components/sections/ProjectsMenuSection";
import { ProjectDetailSection } from "./components/sections/ProjectDetailSection";
import { ContactSection } from "./components/sections/ContactSection";
import { getThemeColors } from "./utils/theme";
import { getSectionData } from "./data/sections";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState("main"); // 'main' or 'project'
  const [skipAnimation, setSkipAnimation] = useState(false);
  const [isBackFromProject, setIsBackFromProject] = useState(false);

  const themeColors = getThemeColors(isDarkMode);
  const mainSections = getSectionData(themeColors);

  // 현재 표시할 섹션 결정
  const currentSections =
    viewMode === "main" ? mainSections : selectedProject?.pages || [];

  const { currentSection, goToSection, setCurrentSection } =
    useScrollNavigation(currentSections.length, viewMode === "project");

  // 다크모드 변경 시 body 클래스 추가/제거
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  // 뒤로가기로 돌아온 경우에만 섹션 3(Projects Menu)로 이동
  useEffect(() => {
    if (isBackFromProject && viewMode === "main" && selectedProject === null) {
      setCurrentSection(3); // Introduction이 1번, Profile이 2번, Projects가 3번
      setIsBackFromProject(false);
    }
  }, [isBackFromProject, viewMode, selectedProject, setCurrentSection]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleProjectSelect = (project) => {
    setSkipAnimation(true);
    setSelectedProject(project);
    setViewMode("project");
    setCurrentSection(0);
    // 다음 프레임에서 애니메이션 다시 활성화
    setTimeout(() => setSkipAnimation(false), 100);
  };

  const handleBackToMenu = () => {
    setSkipAnimation(true);
    setIsBackFromProject(true); // 뒤로가기 플래그 설정
    // 모드 변경 (useEffect에서 섹션 2로 설정됨)
    setViewMode("main");
    setSelectedProject(null);
    // 다음 프레임에서 애니메이션 다시 활성화
    setTimeout(() => setSkipAnimation(false), 100);
  };

  const renderSection = (section, index) => {
    // 프로젝트 상세 모드
    if (viewMode === "project") {
      return (
        <ProjectDetailSection
          page={section}
          themeColors={themeColors}
          isDarkMode={isDarkMode}
          isActive={currentSection === index}
          onBack={handleBackToMenu}
        />
      );
    }

    // 메인 모드
    switch (section.id) {
      case "hero":
        return (
          <HeroSection
            section={section}
            themeColors={themeColors}
            isDarkMode={isDarkMode}
            onExploreClick={() => goToSection(1)}
            isActive={currentSection === index}
          />
        );

      case "about":
        return (
          <ProfileSection
            section={section}
            themeColors={themeColors}
            isActive={currentSection === index}
            isDarkMode={isDarkMode}
          />
        );

      case "introduction":
        return (
          <IntroductionSection
            section={section}
            themeColors={themeColors}
            isActive={currentSection === index}
          />
        );

      case "projects-menu":
        return (
          <ProjectsMenuSection
            section={section}
            themeColors={themeColors}
            isDarkMode={isDarkMode}
            isActive={currentSection === index}
            onProjectSelect={handleProjectSelect}
          />
        );

      case "contact":
        return (
          <ContactSection
            section={section}
            themeColors={themeColors}
            isActive={currentSection === index}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div
      className={`relative w-full h-screen overflow-hidden ${
        isDarkMode ? "bg-gray-900" : "bg-slate-50"
      }`}
    >
      <DarkModeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
      <PdfDownloadButton isDarkMode={isDarkMode} />

      <NavigationDots
        sections={currentSections}
        currentSection={currentSection}
        isDarkMode={isDarkMode}
        onNavigate={goToSection}
      />

      <div className="w-full h-full">
        {currentSections.map((section, index) => (
          <div
            key={section.id}
            className={`absolute inset-0 w-full h-full flex items-center justify-center ${
              skipAnimation ? "" : "transition-all duration-1000 ease-in-out"
            } ${section.bgColor} ${
              currentSection === index
                ? "translate-y-0 opacity-100"
                : skipAnimation
                ? "translate-y-0 opacity-0 pointer-events-none"
                : currentSection > index
                ? "-translate-y-full opacity-0"
                : "translate-y-full opacity-0"
            }`}
          >
            {renderSection(section, index)}
          </div>
        ))}
      </div>

      <ScrollHint
        currentSection={currentSection}
        totalSections={currentSections.length}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}

export default App;
