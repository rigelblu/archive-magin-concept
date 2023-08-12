// Copyright rigélblu inc. All rights reserved.
import { useRouter } from 'next/router';
import clsx, { cmpCls } from '@/lib/clsx-helpers';
import IconGithub from '@/assets/common/icons/github-mark.svg';
import { SiteFullScreenView } from '@/components/Views/SiteView';
import { Button, CTAButton, CTARole } from '@/components/BaseComponents';
import featureFlag from '@/config/featureFlags';
import locale, { LocaleType } from '@/locales/en';

const t: LocaleType = locale;

export default function Home() {
  const router = useRouter();

  return (
    <SiteFullScreenView>
      <div className={clsx(cmpCls(Home.name), 'flex flex-1 flex-col items-center justify-center')}>
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
        <CTAButton
          role={CTARole.Primary}
          onClick={() => {
            console.log('a');
            if (featureFlag.home.enableTryMagin) router.push('/try-magin/1');
          }}
          disabled={!featureFlag.home.enableTryMagin}
          // REFACTOR: disable through eslintrc
          tooltip={!featureFlag.home.enableTryMagin ? t.general.comingSoon : ''}
          tooltipOptions={{ position: 'bottom', showOnDisabled: true }}
        >
          {t.general.tryMagin}
        </CTAButton>

        <h3 className='mt-20 text-center text-base font-normal'>
          Picture stories like a <br className='sm:hidden' />
          director, writer, and illustrator. <br />
          Never forget what you read again with magin.
        </h3>
      </div>

      {/* Github */}
      {/* FIXME: remove extra white space below icon */}
      <Button
        onClick={() => {
          window.location.href = 'https://github.com/rigelblu/magin-concept';
        }}
        icon={
          <span className='p-button-icon-right m-0 ml-2 w-8 bg-[#F5F5F5] p-0.5'>
            <IconGithub />
          </span>
        }
        iconPos='right'
        className='m-0 w-max flex-none border-none !bg-[#161b22] py-[2px] pl-2 pr-0.5 text-xs text-white'
      >
        magin on GitHub
      </Button>
    </SiteFullScreenView>
  );
}
