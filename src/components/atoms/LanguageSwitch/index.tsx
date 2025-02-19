"use client";

import { setUserLocale } from "@/src/services/locale";
import { useLocale } from "next-intl";

const LanguageSwitcher = () => {
  const locale = useLocale();

  function switchLanguage() {
    setUserLocale(locale === "en" ? "ja" : "en");
  }

  return (
    <div className={"fixed right-0 top-[50%] z-[1000]"}>
      <button onClick={switchLanguage} className={"px-2 py-1 bg-gray-200"}>
        {locale === "en" ? "Ja" : "En"}
      </button>
    </div>
  );
};

export { LanguageSwitcher };
