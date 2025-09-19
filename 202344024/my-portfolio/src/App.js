import React, { useState, useEffect, useRef } from "react";

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const lastScrollTime = useRef(0);

  // 다크모드에 따른 색상 설정
  const getThemeColors = () => {
    if (isDarkMode) {
      return {
        bg: "bg-gradient-to-br from-gray-900 to-slate-800",
        text: "text-white",
        accent: "text-cyan-400",
        secondary: "text-gray-300",
      };
    } else {
      return {
        bg: "bg-gradient-to-br from-slate-50 to-blue-50",
        text: "text-blue-900",
        accent: "text-blue-600",
        secondary: "text-gray-700",
      };
    }
  };

  const themeColors = getThemeColors();

  const sections = [
    {
      id: "hero",
      title: "안녕하세요!",
      subtitle: "인하공전 컴퓨터정보공학과 3학년 김민수입니다.",
      content: "풀스택 개발자를 목표로 개발을 공부하고 있습니다.",
      bgColor: themeColors.bg,
      textColor: themeColors.text,
    },
    {
      id: "about",
      title: "Profile",
      subtitle: "저를 소개합니다",
      content: "",
      bgColor: themeColors.bg,
      textColor: themeColors.text,
    },
    {
      id: "talkdok-intro",
      title: "TalkDok",
      subtitle: "독서 챌린지 앱 프로젝트",
      content:
        "Flutter + Firebase 기반의 독서 챌린지 애플리케이션\n\n팀 프로젝트로 진행된 독서 습관 형성을 위한 SNS형 플랫폼에서\n개인 서재 관리 시스템을 전담하여 개발했습니다.\n\n사용자들이 독서 목표를 설정하고 진행 상황을 체계적으로\n관리할 수 있는 핵심 기능을 구현했습니다.",
      bgColor: themeColors.bg,
      textColor: themeColors.text,
    },
    {
      id: "talkdok-detail",
      title: "개발 과정",
      subtitle: "기술 구현 및 주요 기능",
      content:
        "기술 스택\n• Frontend: Flutter (Dart)\n• Backend: Firebase (Firestore, Auth, Storage)\n• 개발 도구: Android Studio, VS Code\n\n주요 개발 기능\n• 개인 서재 관리 (읽은 책/읽는 중/읽고 싶은 책)\n• 독서 진행률 실시간 추적 시스템\n• 월별/연도별 독서량 시각화 차트\n• 장르별 독서 패턴 분석\n• 독서 감상 및 메모 작성 기능",
      bgColor: themeColors.bg,
      textColor: themeColors.text,
    },
    {
      id: "talkdok-result",
      title: "프로젝트 성과",
      subtitle: "배운 점과 기술적 성취",
      content:
        "GitHub: github.com/su0907/book-challenge\n\n기술적 성과\n• 실시간 데이터베이스 연동 및 최적화\n• 반응형 Flutter UI/UX 컴포넌트 설계\n• Firebase 보안 규칙 설정 및 사용자 인증 구현\n• 팀 협업을 통한 Git 플로우 경험\n\n개발 역량 향상\n• 풀스택 개발 경험 (프론트엔드 + 백엔드)\n• NoSQL 데이터베이스 설계 및 쿼리 최적화\n• 크로스 플랫폼 모바일 앱 개발 역량",
      bgColor: themeColors.bg,
      textColor: themeColors.text,
    },
    {
      id: "bplus-intro",
      title: "B+코치",
      subtitle: "AI 대화형 문제풀이 앱",
      content:
        "Spring Boot + Swift로 개발한 혁신적인 학습 플랫폼\n\nAI와의 자연스러운 대화를 통해 개인 맞춤형 문제를\n자동으로 생성하는 차세대 학습 애플리케이션입니다.\n\n사용자의 학습 패턴과 대화 내용을 분석하여\n최적화된 학습 경험을 제공합니다.",
      bgColor: themeColors.bg,
      textColor: themeColors.text,
    },
    {
      id: "bplus-detail",
      title: "핵심 기술",
      subtitle: "AI 기반 학습 시스템 구현",
      content:
        "기술 아키텍처\n• Frontend: Swift (iOS 네이티브)\n• Backend: Spring Boot (Java)\n• Database: MySQL\n• AI: 자연어 처리 API 연동\n• 개발 도구: Xcode, IntelliJ IDEA\n\n핵심 기능 구현\n• AI 대화 시스템을 통한 키워드 추출\n• 사용자 학습 수준 자동 분석 알고리즘\n• 추출된 키워드 기반 문제 자동 생성\n• 개인별 맞춤형 난이도 조정 시스템\n• 학습 이력 추적 및 진도 관리 대시보드",
      bgColor: themeColors.bg,
      textColor: themeColors.text,
    },
    {
      id: "bplus-result",
      title: "개발 성과",
      subtitle: "기술적 도전과 해결",
      content:
        "주요 개발 성과\n• iOS 앱과 Spring Boot API 간 실시간 통신 구현\n• AI 모델과의 효율적인 데이터 연동 시스템 구축\n• RESTful API 설계 및 최적화된 엔드포인트 개발\n• 개인화 학습 알고리즘 설계 및 구현\n\n기술적 도전과 해결\n• 대용량 학습 데이터 처리 최적화\n• 실시간 AI 응답 속도 개선 (평균 2초 → 0.5초)\n• 사용자별 학습 패턴 분석 정확도 향상\n• 모바일 앱의 메모리 사용량 최적화\n\n배운 핵심 기술\n• 풀스택 개발 (모바일 + 백엔드)\n• AI/ML 서비스와의 통합 개발 경험",
      bgColor: themeColors.bg,
      textColor: themeColors.text,
    },
    {
      id: "contact",
      title: "Contact",
      subtitle: "연락처",
      content: "Email: raanggo@naver.com\nGitHub: github.com/su0907",
      bgColor: themeColors.bg,
      textColor: themeColors.text,
    },
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();

      if (currentSection === 0) {
        return;
      }

      const now = Date.now();
      if (now - lastScrollTime.current < 1500) {
        return;
      }

      if (isScrolling) {
        return;
      }

      const threshold = 50;
      if (Math.abs(e.deltaY) < threshold) {
        return;
      }

      lastScrollTime.current = now;
      setIsScrolling(true);

      if (e.deltaY > 0 && currentSection < sections.length - 1) {
        setCurrentSection((prev) => prev + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        setCurrentSection((prev) => prev - 1);
      } else {
        setIsScrolling(false);
        return;
      }

      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      document.body.style.overflow = "unset";
    };
  }, [currentSection, isScrolling, sections.length]);

  const goToSection = (index) => {
    const now = Date.now();
    if (now - lastScrollTime.current < 1500) return;
    if (isScrolling) return;
    lastScrollTime.current = now;
    setCurrentSection(index);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (currentSection === 0) {
        return;
      }

      const now = Date.now();
      if (now - lastScrollTime.current < 1500) return;
      if (isScrolling) return;

      if (e.key === "ArrowDown" && currentSection < sections.length - 1) {
        lastScrollTime.current = now;
        setIsScrolling(true);
        setCurrentSection((prev) => prev + 1);
        setTimeout(() => setIsScrolling(false), 1000);
      } else if (e.key === "ArrowUp" && currentSection > 0) {
        lastScrollTime.current = now;
        setIsScrolling(true);
        setCurrentSection((prev) => prev - 1);
        setTimeout(() => setIsScrolling(false), 1000);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSection, isScrolling, sections.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 다크모드 토글 버튼 */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={toggleDarkMode}
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
              <span className="text-sm font-medium">Dark</span>
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
              <span className="text-sm font-medium">Light</span>
            </>
          )}
        </button>
      </div>

      {/* 네비게이션 도트 */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSection(index)}
            className={`block w-3 h-3 rounded-full mb-4 transition-all duration-300 ${
              currentSection === index
                ? isDarkMode
                  ? "bg-cyan-400 scale-125"
                  : "bg-blue-600 scale-125"
                : isDarkMode
                ? "bg-cyan-400/50 hover:bg-cyan-400/75"
                : "bg-blue-600/50 hover:bg-blue-600/75"
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>

      {/* 섹션들 */}
      <div
        className="transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateY(-${currentSection * 100}vh)`,
          height: `${sections.length * 100}vh`,
        }}
      >
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`w-full flex items-center justify-center ${section.bgColor} ${section.textColor} transition-all duration-500`}
            style={{ height: "100vh" }}
          >
            {section.id === "about" ? (
              // 프로필 섹션
              <div className="w-full h-full px-8 py-16">
                <div
                  className={`transform transition-all duration-1000 delay-300 h-full ${
                    currentSection === index
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  <h1
                    className={`text-5xl font-bold mb-12 text-left ${themeColors.text}`}
                  >
                    PROFILE
                  </h1>
                  <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 gap-16 h-full">
                      <div className="flex flex-col">
                        <div className="mb-8">
                          <p
                            className={`text-2xl mb-3 ${themeColors.secondary}`}
                          >
                            안녕하세요,{" "}
                            <span
                              className={`font-semibold ${themeColors.accent}`}
                            >
                              성장하는
                            </span>
                          </p>
                          <p
                            className={`text-3xl font-bold mb-6 ${themeColors.text}`}
                          >
                            개발자{" "}
                            <span className={themeColors.accent}>
                              KIM MINSU
                            </span>{" "}
                            입니다.
                          </p>
                          <div
                            className={`text-base space-y-1 ${themeColors.secondary}`}
                          >
                            <p>📍 2002.09.07</p>
                            <p>📧 raanggo@naver.com</p>
                            <p>📱 010-2925-7292</p>
                            <p>🎓 인하공전 컴퓨터정보공학과</p>
                          </div>
                        </div>
                        <div className="mt-[-8px]">
                          <h3
                            className={`text-2xl font-bold mb-6 ${themeColors.accent}`}
                          >
                            Skills & Tools
                          </h3>
                          <div className="space-y-4">
                            <div>
                              <h4
                                className={`font-semibold mb-2 ${themeColors.text}`}
                              >
                                Frontend
                              </h4>
                              <p className={themeColors.secondary}>
                                React, JavaScript, HTML/CSS, Flutter
                              </p>
                            </div>
                            <div>
                              <h4
                                className={`font-semibold mb-2 ${themeColors.text}`}
                              >
                                Backend
                              </h4>
                              <p className={themeColors.secondary}>
                                Java, MySQL, Firebase
                              </p>
                            </div>
                            <div>
                              <h4
                                className={`font-semibold mb-2 ${themeColors.text}`}
                              >
                                Tools
                              </h4>
                              <p className={themeColors.secondary}>
                                Git, VS Code, Android Studio
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col ml-10">
                        <div className="mb-12">
                          <h3
                            className={`text-2xl font-bold mb-6 ${themeColors.accent}`}
                          >
                            Awards & License
                          </h3>
                          <div
                            className={`space-y-4 text-base ${themeColors.secondary}`}
                          >
                            <div>
                              <p className="font-semibold text-lg">2025.06</p>
                              <p>정보처리산업기사 취득</p>
                            </div>
                            <div>
                              <p className="font-semibold text-lg">2025.09</p>
                              <p>
                                2025 컴퓨터정보공학과 해커톤 대회 우수상 수상
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-1">
                          <h3
                            className={`text-2xl font-bold mb-6 ${themeColors.accent}`}
                          >
                            Experience
                          </h3>
                          <div className="space-y-6 text-sm">
                            <div>
                              <p
                                className={`font-bold mb-2 text-base ${themeColors.text}`}
                              >
                                TalkDok - 독서 챌린지 앱
                              </p>
                              <p
                                className={`leading-relaxed ${themeColors.secondary}`}
                              >
                                Flutter + Firebase 기반 독서 챌린지 앱에서 개인
                                서재 관리 시스템을 담당하여 개발했습니다.
                              </p>
                            </div>
                            <div>
                              <p
                                className={`font-bold mb-2 text-base ${themeColors.text}`}
                              >
                                B+코치 - AI 대화형 문제풀이 앱
                              </p>
                              <p
                                className={`leading-relaxed ${themeColors.secondary}`}
                              >
                                Spring Boot + Swift로 개발한 AI 기반 맞춤형 문제
                                생성 학습 플랫폼입니다.
                              </p>
                            </div>
                            <div>
                              <p
                                className={`font-bold mb-2 text-base ${themeColors.text}`}
                              >
                                남성 의류 쇼핑몰 웹사이트
                              </p>
                              <p
                                className={`leading-relaxed ${themeColors.secondary}`}
                              >
                                React와 MySQL을 활용한 전자상거래 플랫폼을
                                구현했습니다.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // 일반 섹션 레이아웃
              <div className="text-center max-w-4xl px-8">
                <div
                  className={`transform transition-all duration-1000 delay-300 ${
                    currentSection === index
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
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
                    {section.content.split("\n").map((line, i) => (
                      <p key={i} className="mb-3">
                        {line}
                      </p>
                    ))}
                  </div>
                  {index === 0 && (
                    <button
                      onClick={() => goToSection(1)}
                      className={`mt-8 px-8 py-4 backdrop-blur-sm border rounded-full transition-all duration-300 transform hover:scale-105 ${
                        isDarkMode
                          ? "bg-cyan-400/20 border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/30"
                          : "bg-blue-600/20 border-blue-600/30 text-blue-600 hover:bg-blue-600/30"
                      }`}
                    >
                      더 알아보기 →
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 스크롤 힌트 */}
      {currentSection >= 1 && currentSection <= 7 && (
        <div className="fixed bottom-8 left-0 right-0 flex justify-center">
          <div
            className={`animate-bounce ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <div className="flex flex-col items-center">
              <span className="text-sm mb-2">스크롤해주세요</span>
              <div
                className={`w-px h-8 ${
                  isDarkMode ? "bg-gray-400" : "bg-gray-600"
                }`}
              ></div>
              <div
                className={`w-0 h-0 border-l-2 border-r-2 border-t-4 border-l-transparent border-r-transparent mt-1 ${
                  isDarkMode ? "border-t-gray-400" : "border-t-gray-600"
                }`}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
