import React from "react";

export const ProfileSection = ({
  section,
  themeColors,
  isActive,
  isDarkMode,
}) => {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 py-12 overflow-y-auto">
      <div
        className={`transform transition-all duration-1000 ${
          isActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="max-w-6xl mx-auto pb-16">
          <h1
            className={`text-4xl md:text-5xl font-bold mb-3 text-center ${themeColors.text}`}
          >
            {section.title}
          </h1>
          <h2
            className={`text-lg md:text-xl mb-8 text-center ${themeColors.accent}`}
          >
            {section.subtitle}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {/* 좌측 컬럼 - 기본정보, Awards, Experience */}
            <div className="space-y-4">
              <div>
                <h3 className={`text-lg font-bold mb-2 ${themeColors.accent}`}>
                  기본 정보
                </h3>
                <div className={`text-sm space-y-1 ${themeColors.secondary}`}>
                  <p>📍 2002.09.07</p>
                  <p>📧 raanggo@naver.com</p>
                  <p>📱 010-2925-7292</p>
                  <p>🎓 인하공전 컴퓨터정보공학과</p>
                </div>
              </div>

              <div>
                <h3 className={`text-lg font-bold mb-2 ${themeColors.accent}`}>
                  Awards & License
                </h3>
                <div className={`space-y-2 text-sm ${themeColors.secondary}`}>
                  <div>
                    <p className="font-semibold">2025.06</p>
                    <p>정보처리산업기사 취득</p>
                  </div>
                  <div>
                    <p className="font-semibold">2025.09</p>
                    <p>2025 컴퓨터정보공학과 해커톤 대회 우수상 수상</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className={`text-lg font-bold mb-2 ${themeColors.accent}`}>
                  Experience
                </h3>
                <div className="space-y-2.5 text-sm">
                  <div>
                    <p className={`font-bold mb-1 ${themeColors.text}`}>
                      TalkDok - 독서 챌린지 앱
                    </p>
                    <p className={`leading-relaxed ${themeColors.secondary}`}>
                      Flutter + Firebase 기반 독서 챌린지 앱에서 개인 서재 관리
                      시스템을 담당하여 개발했습니다.
                    </p>
                  </div>
                  <div>
                    <p className={`font-bold mb-1 ${themeColors.text}`}>
                      B+코치 - AI 대화형 문제풀이 앱
                    </p>
                    <p className={`leading-relaxed ${themeColors.secondary}`}>
                      Spring Boot + Swift로 개발한 AI 기반 맞춤형 문제 생성 학습
                      플랫폼입니다.
                    </p>
                  </div>
                  <div>
                    <p className={`font-bold mb-1 ${themeColors.text}`}>
                      남성 의류 쇼핑몰 웹사이트
                    </p>
                    <p className={`leading-relaxed ${themeColors.secondary}`}>
                      React와 MySQL을 활용한 전자상거래 플랫폼을 구현했습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 우측 컬럼 - Skills & Tools */}
            <div className="space-y-5">
              <div>
                <h3 className={`text-lg font-bold mb-2 ${themeColors.accent}`}>
                  Skills & Tools
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4
                      className={`font-semibold mb-2 text-sm ${themeColors.text}`}
                    >
                      Frontend
                    </h4>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className={`text-sm ${themeColors.secondary}`}>
                            React
                          </span>
                          <span className={`text-sm ${themeColors.secondary}`}>
                            70%
                          </span>
                        </div>
                        <div
                          className={`w-full h-1.5 rounded-full ${
                            isDarkMode ? "bg-gray-700" : "bg-gray-200"
                          }`}
                        >
                          <div
                            className={`h-1.5 rounded-full ${
                              themeColors.accent
                            } bg-gradient-to-r ${
                              isDarkMode
                                ? "from-cyan-500 to-blue-500"
                                : "from-blue-500 to-cyan-500"
                            }`}
                            style={{ width: "70%" }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className={`text-sm ${themeColors.secondary}`}>
                            JavaScript
                          </span>
                          <span className={`text-sm ${themeColors.secondary}`}>
                            70%
                          </span>
                        </div>
                        <div
                          className={`w-full h-1.5 rounded-full ${
                            isDarkMode ? "bg-gray-700" : "bg-gray-200"
                          }`}
                        >
                          <div
                            className={`h-1.5 rounded-full ${
                              themeColors.accent
                            } bg-gradient-to-r ${
                              isDarkMode
                                ? "from-cyan-500 to-blue-500"
                                : "from-blue-500 to-cyan-500"
                            }`}
                            style={{ width: "70%" }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className={`text-sm ${themeColors.secondary}`}>
                            HTML/CSS
                          </span>
                          <span className={`text-sm ${themeColors.secondary}`}>
                            80%
                          </span>
                        </div>
                        <div
                          className={`w-full h-1.5 rounded-full ${
                            isDarkMode ? "bg-gray-700" : "bg-gray-200"
                          }`}
                        >
                          <div
                            className={`h-1.5 rounded-full ${
                              themeColors.accent
                            } bg-gradient-to-r ${
                              isDarkMode
                                ? "from-cyan-500 to-blue-500"
                                : "from-blue-500 to-cyan-500"
                            }`}
                            style={{ width: "80%" }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className={`text-sm ${themeColors.secondary}`}>
                            Flutter
                          </span>
                          <span className={`text-sm ${themeColors.secondary}`}>
                            60%
                          </span>
                        </div>
                        <div
                          className={`w-full h-1.5 rounded-full ${
                            isDarkMode ? "bg-gray-700" : "bg-gray-200"
                          }`}
                        >
                          <div
                            className={`h-1.5 rounded-full ${
                              themeColors.accent
                            } bg-gradient-to-r ${
                              isDarkMode
                                ? "from-cyan-500 to-blue-500"
                                : "from-blue-500 to-cyan-500"
                            }`}
                            style={{ width: "60%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4
                      className={`font-semibold mb-2 text-sm ${themeColors.text}`}
                    >
                      Backend
                    </h4>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className={`text-sm ${themeColors.secondary}`}>
                            Java
                          </span>
                          <span className={`text-sm ${themeColors.secondary}`}>
                            70%
                          </span>
                        </div>
                        <div
                          className={`w-full h-1.5 rounded-full ${
                            isDarkMode ? "bg-gray-700" : "bg-gray-200"
                          }`}
                        >
                          <div
                            className={`h-1.5 rounded-full ${
                              themeColors.accent
                            } bg-gradient-to-r ${
                              isDarkMode
                                ? "from-cyan-500 to-blue-500"
                                : "from-blue-500 to-cyan-500"
                            }`}
                            style={{ width: "70%" }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className={`text-sm ${themeColors.secondary}`}>
                            MySQL
                          </span>
                          <span className={`text-sm ${themeColors.secondary}`}>
                            80%
                          </span>
                        </div>
                        <div
                          className={`w-full h-1.5 rounded-full ${
                            isDarkMode ? "bg-gray-700" : "bg-gray-200"
                          }`}
                        >
                          <div
                            className={`h-1.5 rounded-full ${
                              themeColors.accent
                            } bg-gradient-to-r ${
                              isDarkMode
                                ? "from-cyan-500 to-blue-500"
                                : "from-blue-500 to-cyan-500"
                            }`}
                            style={{ width: "80%" }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className={`text-sm ${themeColors.secondary}`}>
                            Firebase
                          </span>
                          <span className={`text-sm ${themeColors.secondary}`}>
                            60%
                          </span>
                        </div>
                        <div
                          className={`w-full h-1.5 rounded-full ${
                            isDarkMode ? "bg-gray-700" : "bg-gray-200"
                          }`}
                        >
                          <div
                            className={`h-1.5 rounded-full ${
                              themeColors.accent
                            } bg-gradient-to-r ${
                              isDarkMode
                                ? "from-cyan-500 to-blue-500"
                                : "from-blue-500 to-cyan-500"
                            }`}
                            style={{ width: "60%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4
                      className={`font-semibold mb-2 text-sm ${themeColors.text}`}
                    >
                      Tools
                    </h4>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className={`text-sm ${themeColors.secondary}`}>
                            Git
                          </span>
                          <span className={`text-sm ${themeColors.secondary}`}>
                            70%
                          </span>
                        </div>
                        <div
                          className={`w-full h-1.5 rounded-full ${
                            isDarkMode ? "bg-gray-700" : "bg-gray-200"
                          }`}
                        >
                          <div
                            className={`h-1.5 rounded-full ${
                              themeColors.accent
                            } bg-gradient-to-r ${
                              isDarkMode
                                ? "from-cyan-500 to-blue-500"
                                : "from-blue-500 to-cyan-500"
                            }`}
                            style={{ width: "70%" }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className={`text-sm ${themeColors.secondary}`}>
                            VS Code
                          </span>
                          <span className={`text-sm ${themeColors.secondary}`}>
                            70%
                          </span>
                        </div>
                        <div
                          className={`w-full h-1.5 rounded-full ${
                            isDarkMode ? "bg-gray-700" : "bg-gray-200"
                          }`}
                        >
                          <div
                            className={`h-1.5 rounded-full ${
                              themeColors.accent
                            } bg-gradient-to-r ${
                              isDarkMode
                                ? "from-cyan-500 to-blue-500"
                                : "from-blue-500 to-cyan-500"
                            }`}
                            style={{ width: "70%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
