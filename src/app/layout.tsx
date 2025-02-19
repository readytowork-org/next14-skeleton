import type { Metadata, Viewport } from "next";
import { HIRAGINO_SANS } from "@/src/fonts";
import { NotificationProvider } from "../utils/hook/Notification";
import "./global.css";
import QueryClientProviders from "../components/organisms/QueryClientProviders";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { ThemeProviderWrapper } from "@/src/components";
import { BackToTop, GlobalTagManager } from "../components/atoms";
import { ProgressBarProvider } from "../components/atoms/ProgressBarProvider";
import { LanguageSwitcher } from "../components/atoms/LanguageSwitch";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata.global");
  const imageUrl = process.env.NEXT_PUBLIC_BASEURL + "/assets/default-og.png";

  const isProduction =
    process.env.NEXT_PUBLIC_ENVIRONMENT === "production" ||
    process.env.NEXT_PUBLIC_ENVIRONMENT === "Production";

  return {
    applicationName: "みんなのドライバ",
    title: t("title"),
    description: t("description"),
    twitter: {
      title: t("title"),
      description: t("description"),
      images: [
        {
          url: imageUrl,
          alt: t("siteName"),
        },
      ],
      card: "summary_large_image",
    },
    openGraph: {
      siteName: t("siteName"),
      title: t("title"),
      description: t("description"),
      images: [
        {
          url: imageUrl,
          alt: t("siteName"),
        },
      ],
    },
    robots: {
      index: isProduction,
      follow: isProduction,
    },
  };
}

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
      <head>
        <link rel={"preload"} href={"/icons/banner.webp"} as={"image"} />
        <GlobalTagManager />
        <link rel={"preload"} as={"image"} href={"/icons/banner.webp"} />
      </head>
      <body className={`${HIRAGINO_SANS.variable}`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ProgressBarProvider>
            <NotificationProvider>
              <ThemeProviderWrapper>
                <BackToTop />
                <QueryClientProviders>
                  <main>{children}</main>
                </QueryClientProviders>
              </ThemeProviderWrapper>
            </NotificationProvider>
            {process.env.NEXT_PUBLIC_ENVIRONMENT == "development" && (
              <LanguageSwitcher />
            )}
          </ProgressBarProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
