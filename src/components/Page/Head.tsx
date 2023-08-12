// Copyright rigélblu inc. All rights reserved.
import NextHead from 'next/head';
import locale, { LocaleType } from '@/locales/en';

const t: LocaleType = locale;

export default function Head() {
  return (
    <NextHead>
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
    </NextHead>
  );
}
