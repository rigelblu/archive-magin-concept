// Copyright rigélblu inc.
// All rigts reserve
import { useRouter } from 'next/router';

import GuideMessage from '@/components/GuideMessage';
import Navigation from '@/components/Navigation/Navigation';
import MainLayout from '@/layouts/MainLayout';

// REFACTOR: read based on language
import locale from '@/locales/en.json';

export default function MarginPreview() {
  const router = useRouter();

  return (
    <MainLayout className='mgn-try-magin' layoutKind='app'>
      {/* REFACTOR: convert into component, accept 4 children elements */}
      <div className='mgn-preview flex h-screen flex-col items-center justify-center'>
        <div className='mgn-step flex w-full flex-1 flex-col justify-between bg-white sm:max-h-[51rem] sm:max-w-[25rem]'>
          <GuideMessage className='flex max-h-[32rem] flex-1 items-end justify-center sm:max-h-[75%]'>
            <h2 className='text-black'>
              {locale.guide.step1_maginPresents}
              <br />
              {locale.book.title}
              <br />
            </h2>
          </GuideMessage>

          {/* REFACTOR: use next layout */}
          <Navigation
            left={{
              className: 'mgn-cta-secondary',
              label: locale.navigation.returnHome,
              onClick: () => {
                router.push('/');
              },
            }}
            right={{
              className: 'mgn-cta-primary',
              label: locale.guide.step1_watchNovel,
              onClick: () => {
                router.push('/try-magin/2');
              },
            }}
          />
        </div>
      </div>
    </MainLayout>
  );
}
