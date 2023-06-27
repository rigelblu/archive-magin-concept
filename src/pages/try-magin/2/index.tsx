// Copyright rigélblu inc.
// All rigts reserve
import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';
import Book from '@/components/Book/Book';
import GuideMessage from '@/components/GuideMessage';
import Navigation from '@/components/Navigation/Navigation';
import MainLayout from '@/layouts/MainLayout';
import IconGithub from '@/assets/common/icons/arrow-up.svg';

// OPTIMIZE: read based on language
import locale from '@/locales/en.json';

export default function MarginPreview() {
  const router = useRouter();
  const [isBookDisplayed] = useState(true);

  return (
    <MainLayout canvasClassName='bg-black' className='mgn-try-magin bg-white' layoutKind='app'>
      {/* REFACTOR: convert into component, accept 4 children elements */}
      <div className='mgn-preview flex h-screen flex-col items-center justify-center bg-neutral-950'>
        {/* HACK: have to use fixed rem for max height and width due to mobile browsers */}
        <div className='mgn-step flex w-full flex-1 flex-col justify-between bg-yellow-rb-200 sm:max-h-[51rem] sm:max-w-[25rem]'>
          {/* HACK: have to use fixed rem for height due to mobile browsers */}
          <div className='mgn-step-top col flex flex-col justify-start h-[30rem]'>
            <Book maginPreviewStep={2} showPageControls={false} />
          </div>

          <div className='mgn-step-middle flex flex-col items-center'>
            {/* REFACTOR: make content an optional parameter */}
            <IconGithub className='w-16' />
            <GuideMessage className='font-bold'>{locale.guide.step2_read}</GuideMessage>
          </div>

          <div className='mgn-step-bottom flex flex-1 items-center'>
            {/* TODO: show on a 5 second delay */}
            {/* OPTIMIZE: figure out how to allow \n in the string and convert in to <br /> */}
            {!isBookDisplayed && (
              <div className='flex flex-col items-center'>
                <Image
                  src='/assets/common/images/movie-screen.webp'
                  alt='people in a theatre watching a movie'
                  className='w-20rem h-auto !object-scale-down'
                  width='640'
                  height='364'
                />
              </div>
            )}
            {/* <GuideMessage className='font-bold'>{locale.guide.step2_movieSceen}</GuideMessage> */}
          </div>

          {/* REFACTOR: use next layout */}
          {!isBookDisplayed && (
            <Navigation
              left={{
                className: 'mgn-cta-secondary',
                label: locale.navigation.back,
                onClick: () => {
                  router.push('/try-magin/1');
                },
              }}
              right={{
                className: 'mgn-cta-primary',
                label: locale.guide.step2_showMe,
                onClick: () => {
                  router.push('/try-magin/3');
                },
              }}
            />
          )}
        </div>
      </div>
    </MainLayout>
  );
}
