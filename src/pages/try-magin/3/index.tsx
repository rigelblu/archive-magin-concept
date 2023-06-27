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
        <div className='mgn-step flex	w-full flex-1 flex-col justify-between bg-yellow-rb-200 sm:max-h-[51rem] sm:max-w-[25rem]'>
          <div className='mgn-step-top col max-h-for-screen flex flex-1 flex-col justify-start'>
            <Book maginPreviewStep={3} showPageControls className='flex-1 overflow-hidden' />
          </div>

          <div className='mgn-step-middle'>
            <GuideMessage className='font-bold'>
              {/* TODO: show on a 5 second delay */}
              {/* OPTIMIZE: figure out how to allow \n in the string and convert in to <br /> */}
              {/* OPTIMIZE: create a component to cycle through the array with a delay */}
              {locale.guide.step3_1} <br />
              {locale.guide.step3_2} <br />
            </GuideMessage>
          </div>

          <div className='mgn-step-bottom max-h-for-screen flex flex-1 items-center'>
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
              label: locale.guide.step2_showMe,
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
