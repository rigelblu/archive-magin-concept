/* eslint-disable @typescript-eslint/restrict-template-expressions */
// Copyright rigélblu inc.
// All rights reserved.
import React from 'react';
import Script from 'next/script';

import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/tailwind-light/theme.css';

import '@/styles/reset.css';
import '@/styles/global.scss';
import 'primeicons/primeicons.css';

import * as gtag from '@/src/helpers/googleAnalytics';
import HTMLHead from '@/src/htmlElements/HTMLHead';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function App({ Component, pageProps }: any) {
  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script id='gtag-init' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtag.GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      <HTMLHead />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  );
}
