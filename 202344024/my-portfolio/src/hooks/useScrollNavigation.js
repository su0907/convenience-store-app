import { useState, useEffect, useRef, useCallback } from "react";

export const useScrollNavigation = (
  totalSections,
  enableFirstSectionScroll = false
) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const lastScrollTime = useRef(0);

  const SCROLL_DELAY = 1500;
  const SCROLL_THRESHOLD = 50;
  const ANIMATION_DURATION = 1000;

  // totalSections 변경 시 자동 리셋 제거 (수동으로 제어)
  // useEffect(() => {
  //   setCurrentSection(0);
  // }, [totalSections]);

  const canScroll = useCallback(() => {
    const now = Date.now();
    return (
      !isScrolling &&
      now - lastScrollTime.current >= SCROLL_DELAY &&
      (enableFirstSectionScroll || currentSection !== 0)
    );
  }, [isScrolling, currentSection, enableFirstSectionScroll]);

  const handleScroll = useCallback(
    (direction) => {
      if (!canScroll()) return;

      const now = Date.now();
      lastScrollTime.current = now;
      setIsScrolling(true);

      if (direction === "down" && currentSection < totalSections - 1) {
        setCurrentSection((prev) => prev + 1);
      } else if (direction === "up" && currentSection > 0) {
        setCurrentSection((prev) => prev - 1);
      } else {
        setIsScrolling(false);
        return;
      }

      setTimeout(() => {
        setIsScrolling(false);
      }, ANIMATION_DURATION);
    },
    [canScroll, currentSection, totalSections]
  );

  const goToSection = useCallback(
    (index) => {
      const now = Date.now();
      if (now - lastScrollTime.current < SCROLL_DELAY || isScrolling) return;

      lastScrollTime.current = now;
      setCurrentSection(index);
    },
    [isScrolling]
  );

  // Wheel 이벤트 처리
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();

      if (!enableFirstSectionScroll && currentSection === 0) return;
      if (Math.abs(e.deltaY) < SCROLL_THRESHOLD) return;

      handleScroll(e.deltaY > 0 ? "down" : "up");
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      document.body.style.overflow = "unset";
    };
  }, [currentSection, handleScroll, enableFirstSectionScroll]);

  // Keyboard 이벤트 처리
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!enableFirstSectionScroll && currentSection === 0) return;

      if (e.key === "ArrowDown") {
        handleScroll("down");
      } else if (e.key === "ArrowUp") {
        handleScroll("up");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSection, handleScroll, enableFirstSectionScroll]);

  return {
    currentSection,
    isScrolling,
    goToSection,
    setCurrentSection,
  };
};
