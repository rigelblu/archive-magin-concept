// Copyright rigélblu inc. All rights reserved.
import { Button } from 'primereact/button';
import { useRouter } from 'next/router';
import IconGithub from '@/assets/common/icons/github-mark.svg';
import featureFlag from '@/config/featureFlags';
import { SiteLayout } from '@/layouts/Layout';
import locale, { LocaleType } from '@/locales/en';

const t: LocaleType = locale;

export default function Home() {
  const router = useRouter();

  return (
    <SiteLayout
      bodyClassName='h-screen flex flex-col'
      canvasClassName='bg-ivory-100'
      mainClassName='flex flex-1 flex-col items-center justify-center py-1'
    >
      <div className='mgn-home flex flex-1 flex-col items-center justify-center'>
        {/* Tagline */}
        <h1 className='mb-16 text-center'>
          Have you <span className='text-blue-rb-600'>read a novel</span> <br /> and wondered,
          <br /> why can&apos;t I <span className='text-blue-rb-600'>remember</span>{' '}
          <br className='inline sm:hidden' />
          anything?
        </h1>
        <h2 className='text-center'>
          Learn to <span className='text-blue-rb-600'>picture</span> a novel
          <br /> like you're watching a movie
        </h2>

        {/* Try magin */}
        <Button
          className='mgn-cta-primary'
          disabled={!featureFlag.home.enableTryMagin}
          label={t.general.tryMagin}
          // REFACTOR: disable through eslintrc
          onClick={() => {
            if (featureFlag.home.enableTryMagin) router.push('/try-magin/1');
          }}
          tooltip={!featureFlag.home.enableTryMagin ? t.general.comingSoon : ''}
          tooltipOptions={{ position: 'bottom', showOnDisabled: true }}
        />

        <h3 className='mt-20 text-center text-base font-normal'>
          Picture stories like a <br className='sm:hidden' />
          director, writer, and illustrator. <br />
          Never forget what you read again with magin.
        </h3>
      </div>

      {/* Github */}
      {/* FIXME: remove extra white space below icon */}
      <Button
        aria-label='magin on GitHub'
        className='mgn-github m-0 w-max flex-none border-none !bg-[#161b22] p-0.5 pl-2 text-xs text-white'
        icon={
          <span className='p-button-icon-right m-0 ml-2 w-8 bg-[#F5F5F5] p-0.5'>
            <IconGithub />
          </span>
        }
        iconPos='right'
        label='magin on GitHub'
        onClick={() => {
          window.location.href = 'https://github.com/rigelblu/magin-concept';
        }}
      />
    </SiteLayout>
  );
}
