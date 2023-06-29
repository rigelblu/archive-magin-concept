// Copyright rigélblu inc.
// All rigts reserve
import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';
import Book from '@/components/Book/Book';
import Film from '@/components/Film/Film';
import GuideMessage from '@/components/GuideMessage';
import Navigation from '@/components/Navigation/Navigation';
import MainLayout from '@/layouts/MainLayout';
import IconUpArrow from '@/assets/common/icons/arrow-up.svg';

// OPTIMIZE: read based on language
import locale from '@/locales/en.json';

export default function MarginPreview() {
  const router = useRouter();
  const [isBookDisplayed, setBookDisplayed] = useState(false);
  const [onNextScene, setNextScene] = useState(false);

  return (
    <MainLayout canvasClassName='bg-black' className='mgn-try-magin bg-white' layoutKind='app'>
      {/* REFACTOR: convert into component, accept 4 children elements */}
      <div className='mgn-preview flex h-screen flex-col items-center justify-center bg-neutral-950'>
        {/* HACK: have to use fixed rem for max height and width due to mobile browsers */}
        <div className='mgn-step flex w-full flex-1 flex-col justify-between bg-yellow-rb-200 sm:max-h-[51rem] sm:max-w-[25rem] p-2'>
          {/* HACK: have to use fixed rem for height due to mobile browsers */}
          <div className='mgn-step-top col flex flex-col justify-start h-[30rem]'>
            <Book
              maginPreviewStep={2}
              onTypingComplete={() => setBookDisplayed(true)}
              useTypingAnimation={!isBookDisplayed}
            />
          </div>

          <div className='mgn-step-middle flex flex-col items-center'>
            {/* REFACTOR: make content an optional parameter */}
            {/* REFACTOR: make this cleaner */}
            {!isBookDisplayed && !onNextScene && (
              <>
                <IconUpArrow className='w-16' />
                <GuideMessage className='font-bold'>
                  {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
                  {locale.guide.tryMagin2a_guidedMessage[0]}
                </GuideMessage>
              </>
            )}
            {isBookDisplayed && !onNextScene && (
              <>
                <IconUpArrow className='w-16' />
                <GuideMessage
                  className='font-bold'
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                  messages={locale.guide.tryMagin2a_guidedMessage}
                />
              </>
            )}
            {isBookDisplayed && onNextScene && (
              <GuideMessage
                className='font-bold'
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                messages={locale.guide.tryMagin2b_guidedMessage}
              />
            )}
          </div>

          <div className='mgn-step-bottom flex flex-1 items-center'>
            {/* TODO: show on a 5 second delay */}
            {/* OPTIMIZE: figure out how to allow \n in the string and convert in to <br /> */}
            {isBookDisplayed && !onNextScene && (
              <div className='flex flex-col items-center animate-fadeIn'>
                <Image
                  src='/assets/common/images/movie-screen.webp'
                  alt='people in a theatre watching a movie'
                  className='w-auto h-auto !object-scale-down pb-2'
                  width='640'
                  height='364'
                />
              </div>
            )}
            {isBookDisplayed && onNextScene && (
              <div className='mgn-step-bottom max-h-for-screen flex flex-1 items-center animate-fadeIn'>
                <Film className='flex-1' />
              </div>
            )}
          </div>

          {/* REFACTOR: make this cleaner */}
          {isBookDisplayed && !onNextScene && (
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
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                label: locale.guide.tryMagin2a_showMe,
                onClick: () => {
                  setNextScene(true);
                },
              }}
            />
          )}
          {isBookDisplayed && onNextScene && (
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
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                label: locale.guide.tryMagin2b_nextScene,
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
