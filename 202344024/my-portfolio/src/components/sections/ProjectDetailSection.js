import React from "react";

export const ProjectDetailSection = ({
  page,
  themeColors,
  isDarkMode,
  isActive,
  onBack,
}) => {
  // 기술 스택과 주요 기능을 파싱하는 함수
  const parseContent = (content) => {
    const lines = content.split("\n");
    const result = {
      techStack: [],
      features: [],
    };

    let currentSection = "";

    lines.forEach((line) => {
      const trimmedLine = line.trim();

      // 섹션 헤더 감지
      if (
        trimmedLine.includes("기술 스택") ||
        trimmedLine.includes("기술 아키텍처")
      ) {
        currentSection = "tech";
      } else if (
        trimmedLine.includes("주요 개발 기능") ||
        trimmedLine.includes("주요 기능") ||
        trimmedLine.includes("핵심 기능") ||
        trimmedLine.includes("구현 기능")
      ) {
        currentSection = "features";
      } else if (
        trimmedLine.includes("기술적 성과") ||
        trimmedLine.includes("개발 역량") ||
        trimmedLine.includes("주요 개발 성과")
      ) {
        currentSection = "features";
      } else if (trimmedLine.startsWith("•") && currentSection) {
        // 아이템 추가
        const item = trimmedLine.replace("•", "").trim();
        if (currentSection === "tech") {
          result.techStack.push(item);
        } else if (currentSection === "features") {
          result.features.push(item);
        }
      }
    });

    return result;
  };

  // 기술/기능 페이지인지 확인
  const isDetailPage =
    page.title.includes("개발 과정") ||
    page.title.includes("핵심 기술") ||
    page.title.includes("주요 기능");
  const parsedContent = isDetailPage ? parseContent(page.content) : null;

  // 아이콘 매핑
  const getIcon = (text) => {
    if (
      text.includes("Flutter") ||
      text.includes("React") ||
      text.includes("Swift") ||
      text.includes("Frontend")
    )
      return "📱";
    if (
      text.includes("Firebase") ||
      text.includes("Spring") ||
      text.includes("Node") ||
      text.includes("Backend")
    )
      return "⚙️";
    if (text.includes("MySQL") || text.includes("Database")) return "💾";
    if (
      text.includes("Android") ||
      text.includes("Xcode") ||
      text.includes("VS Code") ||
      text.includes("도구")
    )
      return "🛠️";
    if (text.includes("서재") || text.includes("관리")) return "📚";
    if (text.includes("진행") || text.includes("추적")) return "📊";
    if (text.includes("차트") || text.includes("시각화")) return "📈";
    if (text.includes("분석") || text.includes("패턴")) return "🔍";
    if (text.includes("메모") || text.includes("작성")) return "📝";
    if (text.includes("AI") || text.includes("대화")) return "🤖";
    if (text.includes("알고리즘") || text.includes("생성")) return "⚡";
    if (
      text.includes("회원") ||
      text.includes("로그인") ||
      text.includes("인증")
    )
      return "🔐";
    if (text.includes("상품") || text.includes("장바구니")) return "🛒";
    if (text.includes("결제") || text.includes("주문")) return "💳";
    if (text.includes("관리자")) return "👨‍💼";
    if (text.includes("반응형") || text.includes("디자인")) return "📐";
    return "✨";
  };

  return (
    <div className="w-full h-full flex items-center justify-center px-8 relative overflow-y-auto">
      {/* 뒤로가기 버튼 */}
      <button
        onClick={onBack}
        className={`fixed top-6 left-6 z-50 flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
          isDarkMode
            ? "bg-gray-800 text-white hover:bg-gray-700"
            : "bg-white text-gray-700 hover:bg-gray-50 shadow-lg"
        } backdrop-blur-sm border ${
          isDarkMode ? "border-gray-600" : "border-gray-200"
        }`}
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
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <span className="text-sm font-medium">프로젝트 목록</span>
      </button>

      <div
        className={`transform transition-all duration-1000 delay-300 ${
          isActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="text-center max-w-5xl py-20 pb-32">
          <h1
            className={`text-5xl md:text-6xl font-bold mb-4 leading-tight ${themeColors.text}`}
          >
            {page.title}
          </h1>
          <h2
            className={`text-xl md:text-2xl mb-8 opacity-90 ${themeColors.accent}`}
          >
            {page.subtitle}
          </h2>

          {/* 카드형 레이아웃 */}
          {isDetailPage && parsedContent ? (
            <div className="space-y-8">
              {/* 기술 스택 */}
              {parsedContent.techStack.length > 0 && (
                <div>
                  <h3
                    className={`text-xl font-bold mb-4 ${themeColors.accent}`}
                  >
                    기술 스택
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {parsedContent.techStack.map((tech, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg ${
                          isDarkMode ? "bg-gray-800/50" : "bg-white/50"
                        } backdrop-blur-sm border ${
                          isDarkMode ? "border-gray-700" : "border-gray-200"
                        } hover:scale-105 transition-transform duration-200`}
                      >
                        <div className="text-3xl mb-2">{getIcon(tech)}</div>
                        <p className={`text-sm ${themeColors.text}`}>{tech}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 주요 기능 */}
              {parsedContent.features.length > 0 && (
                <div>
                  <h3
                    className={`text-xl font-bold mb-4 ${themeColors.accent}`}
                  >
                    주요 기능
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {parsedContent.features.map((feature, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg ${
                          isDarkMode ? "bg-gray-800/50" : "bg-white/50"
                        } backdrop-blur-sm border ${
                          isDarkMode ? "border-gray-700" : "border-gray-200"
                        } hover:scale-105 transition-transform duration-200 text-left`}
                      >
                        <div className="flex items-start space-x-3">
                          <div className="text-2xl flex-shrink-0">
                            {getIcon(feature)}
                          </div>
                          <p
                            className={`text-sm ${themeColors.secondary} leading-relaxed`}
                          >
                            {feature}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            // 일반 텍스트 페이지
            <div
              className={`text-base md:text-lg leading-relaxed max-w-3xl mx-auto ${themeColors.secondary}`}
            >
              {page.content.split("\n\n").map((paragraph, i) => (
                <p key={i} className="mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
