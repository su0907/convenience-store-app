export const getThemeColors = (isDarkMode) => {
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
