// Copyright rigélblu inc. All rights reserved.
import Head from 'next/head';
import Script from 'next/script';
import 'primereact/resources/primereact.css';
import * as gtag from '@/helpers/googleAnalytics';
import locale, { LocaleType } from '@/locales/en';
import '@/styles/tailwind.css';
import '@/styles/global.scss';

const t: LocaleType = locale;

function HTMLHead() {
  return (
    <Head>
      <meta
        httpEquiv='Content-Security-Policy'
        // FIXME: localhost shouldn't be explicitly included, add based on NODE_ENV
        content="
            connect-src 'self' https://www.google-analytics.com https://app.convertkit.com ws://localhost:3000;
            default-src 'self';
            form-action 'self' https://f.convertkit.com;
            img-src 'self' www.googletagmanager.com;
            script-src 'unsafe-inline' 'unsafe-eval' 'self' https://www.googletagmanager.com https://cdn.amplitude.com https://f.convertkit.com;
            style-src 'unsafe-inline' 'self'"
      />
      <meta charSet='UTF-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/assets/favicon/favicon-512.png' />
      <link rel='apple-touch-icon' href='/assets/favicon/apple-touch-icon.png' />
      <link rel='apple-touch-icon' sizes='180x180' href='/assets/favicon/favicon-180.png' />
      <link rel='apple-touch-icon' sizes='167x167' href='/assets/favicon/favicon-167.png' />
      <link rel='apple-touch-icon' sizes='152x152' href='/assets/favicon/favicon-152.png' />
      <link rel='manifest' href='/static/manifest.webmanifest' />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:site' content='@magin' />
      <meta name='twitter:title' content={t.general.magin} />
      <meta name='twitter:description' content={t.general.taglineBrowser} />
      <meta name='twitter:image' content='https://magin.blue/static/preview-twitter.png' />
      <meta property='og:title' content={t.general.magin} />
      <meta property='og:description' content={t.general.taglineBrowser} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://magin.blue' />
      <meta property='og:image' content='https://magin.blue/static/preview-ogp.png' />
      <meta property='og:image:alt' content='// FIXME:' />
      <meta name='description' content={t.general.taglineBrowser} />
      <title>{t.general.taglineBrowser}</title>
    </Head>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function App({ Component, pageProps }: any) {
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

      <HTMLHead />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  );
}
