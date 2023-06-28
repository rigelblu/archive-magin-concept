// Copyright rigélblu inc.
// All rigts reserve
import { useRouter } from 'next/router';

import Book from '@/components/Book/Book';
import Film from '@/components/Film/Film';
import GuideMessage from '@/components/GuideMessage';
import Navigation from '@/components/Navigation/Navigation';
import MainLayout from '@/layouts/MainLayout';

// OPTIMIZE: read based on language
import locale from '@/locales/en.json';

import styles from '../try-magin.module.scss';

export default function MarginPreview() {
  const router = useRouter();

  return (
    <MainLayout canvasClassName='bg-black' className='mgn-try-magin bg-white' layoutKind='app'>
      {/* REFACTOR: convert into component, accept 4 children elements */}
      <div
        className={`${styles['mgn-preview']} flex h-screen flex-col items-center justify-center bg-neutral-950`}
      >
        {/* HACK: have to use fixed rem for max height and width due to mobile browsers */}
        <div className='mgn-step flex	w-full flex-1 flex-col justify-between bg-yellow-rb-200 sm:max-h-[51rem] sm:max-w-[25rem] p-2'>
          {/* HACK: have to use fixed rem for height due to mobile browsers */}
          <div className='mgn-step-top col max-h-for-screen flex flex-col justify-start h-[30rem]'>
            <Book maginPreviewStep={3} className='flex-1 overflow-hidden' />
          </div>

          <div className='mgn-step-middle'>
            <GuideMessage className='font-bold'>
              {/* TODO: show on a 5 second delay */}
              {/* OPTIMIZE: figure out how to allow \n in the string and convert in to <br /> */}
              {/* OPTIMIZE: create a component to cycle through the array with a delay */}
              {locale.guide.tryMagin3_guidedMessage} <br />
            </GuideMessage>
          </div>

          <div className='mgn-step-bottom max-h-for-screen flex flex-1 items-center animate-fadeIn'>
            <Film className='flex-1' />
          </div>

          {/* REFACTOR: use next layout */}
          <Navigation
            left={{
              className: 'mgn-cta-secondary',
              label: locale.navigation.back,
              onClick: () => {
                router.push('/try-magin/2');
              },
            }}
            right={{
              className: 'mgn-cta-primary',
              label: locale.guide.tryMagin3_nextScene,
              onClick: () => {
                router.push('/join/1');
              },
            }}
          />
        </div>
      </div>
    </MainLayout>
  );
}
