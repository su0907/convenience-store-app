export const getSectionData = (themeColors) => [
  {
    id: "hero",
    title: "안녕하세요!",
    subtitle: "성장하는 개발자",
    content: "KIM MINSU 입니다.",
    bgColor: themeColors.bg,
    textColor: themeColors.text,
  },
  {
    id: "introduction",
    title: "자기소개",
    subtitle: "Introduction",
    content:
      "안녕하세요, 풀스택 개발자를 목표로 하는 김민수입니다.\n\n사용자 중심의 서비스를 만들고, 기술적 문제를 해결하는 것에 큰 흥미를 느낍니다.\n새로운 기술을 배우는 것을 즐기며, 팀과의 협업을 통해 더 나은 결과물을 만들어내는 것을 중요하게 생각합니다.\n\n끊임없이 배우고 성장하며, 가치 있는 서비스를 개발하는 개발자가 되겠습니다.",
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
    id: "projects-menu",
    title: "Projects",
    subtitle: "진행한 프로젝트들",
    content: "",
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

export const getProjectsData = (themeColors) => [
  {
    id: "talkdok",
    title: "TalkDok",
    subtitle: "독서 챌린지 앱 프로젝트",
    description: "Flutter + Firebase 기반의 독서 챌린지 애플리케이션",
    icon: "📚",
    color: (isDarkMode) =>
      isDarkMode
        ? "from-purple-900 to-indigo-900"
        : "from-purple-100 to-indigo-100",
    pages: [
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
          "기술 스택\n• Frontend: Flutter (Dart)\n• Backend: Firebase (Firestore, Auth, Storage)\n• 개발 도구: Android Studio, VS Code\n\n주요 개발 기능\n• 개인 서재 관리 (읽은 책/읽는 중/읽고 싶은 책)\n• 독서 진행률 실시간 추적 시스템\n• 장르별 독서 패턴 분석\n• 독서 감상 및 메모 작성 기능",
        bgColor: themeColors.bg,
        textColor: themeColors.text,
      },
      {
        id: "talkdok-result",
        title: "프로젝트 성과",
        subtitle: "배운 점과 기술적 성취",
        content:
          "기술적 성과\n• 실시간 데이터베이스 연동 및 최적화\n• 반응형 Flutter UI/UX 컴포넌트 설계\n• Firebase 보안 규칙 설정 및 사용자 인증 구현\n• 팀 협업을 통한 Git 플로우 경험\n\n개발 역량 향상\n• 풀스택 개발 경험 (프론트엔드 + 백엔드)\n• NoSQL 데이터베이스 설계 및 쿼리 최적화\n• 크로스 플랫폼 모바일 앱 개발 역량",
        bgColor: themeColors.bg,
        textColor: themeColors.text,
      },
    ],
  },
  {
    id: "bplus",
    title: "B+코치",
    subtitle: "AI 대화형 문제풀이 앱",
    description: "Spring Boot + Swift로 개발한 AI 기반 학습 플랫폼",
    icon: "🤖",
    color: (isDarkMode) =>
      isDarkMode ? "from-blue-900 to-cyan-900" : "from-blue-100 to-cyan-100",
    pages: [
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
          "기술 아키텍처\n• Frontend: Swift (iOS 네이티브)\n• Backend: Spring Boot (Java)\n• Database: MySQL\n• AI: 자연어 처리 API 연동\n• 개발 도구: Xcode, IntelliJ IDEA\n\n핵심 기능 구현\n• AI 대화 시스템을 통한 키워드 추출\n• 사용자 학습 수준 자동 분석 알고리즘\n• 추출된 키워드 기반 문제 자동 생성\n• 개인별 맞춤형 난이도 조정 시스템",
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
    ],
  },
  {
    id: "shop",
    title: "남성 의류 쇼핑몰",
    subtitle: "전자상거래 웹사이트",
    description: "React + MySQL 기반 이커머스 플랫폼",
    icon: "🛒",
    color: (isDarkMode) =>
      isDarkMode ? "from-green-900 to-teal-900" : "from-green-100 to-teal-100",
    pages: [
      {
        id: "shop-intro",
        title: "남성 의류 쇼핑몰",
        subtitle: "전자상거래 웹사이트",
        content:
          "React와 MySQL을 활용한 전자상거래 플랫폼\n\n사용자 친화적인 UI/UX를 제공하는 남성 의류 전문\n온라인 쇼핑몰 웹사이트입니다.\n\n실제 쇼핑몰과 유사한 기능들을 구현하여\n실무 개발 경험을 쌓았습니다.",
        bgColor: themeColors.bg,
        textColor: themeColors.text,
      },
      {
        id: "shop-detail",
        title: "주요 기능",
        subtitle: "쇼핑몰 핵심 시스템 구현",
        content:
          "기술 스택\n• Frontend: React, JavaScript, HTML/CSS\n• Backend: Node.js, Express\n• Database: MySQL\n• 개발 도구: VS Code, Git\n\n구현 기능\n• 회원가입/로그인 시스템\n• 상품 목록 및 상세 페이지\n• 장바구니 기능\n• 주문 및 결제 시스템",
        bgColor: themeColors.bg,
        textColor: themeColors.text,
      },
      {
        id: "shop-result",
        title: "개발 성과",
        subtitle: "배운 점과 성장",
        content:
          "기술적 성과\n• React 컴포넌트 기반 아키텍처 설계\n• RESTful API 설계 및 구현\n• MySQL 데이터베이스 스키마 설계\n• JWT 기반 인증 시스템 구축\n\n개발 역량 향상\n• 전체 개발 프로세스 경험 (기획 → 개발 → 배포)\n• 프론트엔드-백엔드 연동 경험\n• 데이터베이스 최적화 및 쿼리 튜닝\n• 사용자 중심의 UI/UX 설계 역량",
        bgColor: themeColors.bg,
        textColor: themeColors.text,
      },
    ],
  },
];
