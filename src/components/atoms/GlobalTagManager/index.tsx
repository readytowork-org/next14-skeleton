import React from "react";
import Script from "next/script";

const GlobalTagManager = ({ trackSuccess }: { trackSuccess?: boolean }) => {
  const isProduction = process.env.NEXT_PUBLIC_ENVIRONMENT === "production";
  return (
    isProduction && (
      <>
        {
          // <!-- Google tag (gtag.js) -->
        }
        <Script
          id={"gtag"}
          async
          strategy={"lazyOnload"}
          src={"https://www.googletagmanager.com/gtag/js?id=G-HVJQR8CHZK"}
        ></Script>
        <Script
          id={"gtag-config"}
          strategy={"afterInteractive"}
          async
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HVJQR8CHZK');
            gtag('config', 'AW-11309592371');
          `,
          }}
        />
        {
          // <!-- Google Ads (gtag.js) -->
        }
        {trackSuccess && (
          <Script
            id={"gtag-conversion"}
            async
            strategy={"afterInteractive"}
            dangerouslySetInnerHTML={{
              __html: `gtag('event', 'conversion', { 'send_to': 'AW-11309592371/xldhCNe04J8aELPe6pAq', 'value': 1.0, 'currency': 'JPY' });`,
            }}
          />
        )}
      </>
    )
  );
};

export { GlobalTagManager };
