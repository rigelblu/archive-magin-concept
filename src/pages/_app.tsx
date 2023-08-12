// Copyright rigélblu inc. All rights reserved.
import type { AppProps } from 'next/app';
import Script from 'next/script';
import 'primereact/resources/primereact.css';
import { setAppPrefix } from '@/lib/clsx-helpers';
import Head from '@/components/Page/Head';
import * as gtag from '@/lib/googleAnalytics';
import '@/styles/tailwind.css';
import '@/styles/global.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function App({ Component, pageProps }: AppProps) {
  setAppPrefix('mgn');

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${String(gtag.GA_TRACKING_ID)}`}
      />
      <Script id='gtag-init' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${String(gtag.GA_TRACKING_ID)}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      <Head />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  );
}
