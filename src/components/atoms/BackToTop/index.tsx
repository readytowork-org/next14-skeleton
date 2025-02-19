"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const BackToTop = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const scrollToTop = () => {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = document.documentElement.scrollTop;

      if (scrolled > 300) {
        setShowScrollToTop(true);
      } else if (scrolled <= 300) {
        setShowScrollToTop(false);
      }
    };
    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    scrollToTop && (
      <button
        className={`fixed right-4 bottom-[5rem] lg:top-2/3 z-50 flex size-11 rounded-full cursor-pointer items-center justify-center bg-[#FF935D] transition-all duration-300 ease-in-out ${showScrollToTop ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}`}
        onClick={scrollToTop}
      >
        <Image
          src={"/icons/back-to-top.svg"}
          alt={"システム開発"}
          width={18}
          height={24}
        />
      </button>
    )
  );
};

export { BackToTop };
