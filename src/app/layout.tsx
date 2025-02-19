import React from "react";
import type { Viewport } from "next";
import "./global.css";
import QueryClientProviders from "../components/organisms/QueryClientProviders";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { BackToTop } from "../components/atoms";
import { ProgressBarProvider } from "../components/atoms/ProgressBarProvider";
import { LanguageSwitcher } from "../components/atoms/LanguageSwitch";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={"en"}>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ProgressBarProvider>
            <BackToTop />
            <QueryClientProviders>
              <main>{children}</main>
            </QueryClientProviders>
            {process.env.NEXT_PUBLIC_ENVIRONMENT == "development" && (
              <LanguageSwitcher />
            )}
          </ProgressBarProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
