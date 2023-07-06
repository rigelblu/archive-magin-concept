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
import styles from '../try-magin.module.scss';

export default function MarginPreview() {
  const router = useRouter();
  const [isBookDisplayed, setBookDisplayed] = useState(false);
  const [scene, setScene] = useState(0);
  const startScene = 1;
  const endScene = 1;

  return (
    <MainLayout canvasClassName='bg-black' className='mgn-try-magin bg-white' layoutKind='app'>
      {/* REFACTOR: convert into component, accept 4 children elements */}
      <div
        className={`${styles['mgn-preview']} flex h-screen flex-col items-center justify-center bg-neutral-950`}
      >
        {/* HACK: have to use fixed rem for max height and width due to mobile browsers */}
        <div className='mgn-step flex w-full flex-1 flex-col justify-between bg-yellow-rb-200 p-2'>
          {/* HACK: have to use fixed rem for height due to mobile browsers */}
          <div className='mgn-story flex w-full flex-1 flex-col justify-between'>
            <div className='mgn-step-top h-book flex flex-col justify-start'>
              <Book
                onTypingComplete={() => setBookDisplayed(true)}
                sceneCurrent={scene}
                sceneEnd={endScene}
                sceneStart={startScene}
                useTypingAnimation={!isBookDisplayed}
                styleTypedNonTypedSame
              />
            </div>

            <div className='mgn-step-middle h-guided-message flex flex-col items-center justify-center pt-1'>
              {/* REFACTOR: make content an optional parameter */}
              {/* REFACTOR: make this cleaner */}
              {!isBookDisplayed && scene === 0 && (
                <>
                  <IconUpArrow className='my-1 w-16' />
                  <GuideMessage className='my-1 font-bold'>
                    {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
                    {locale.guide.tryMagin2a_guidedMessage[0]}
                  </GuideMessage>
                </>
              )}
              {isBookDisplayed && scene === 0 && (
                <>
                  <IconUpArrow className='my-1 w-16' />
                  <GuideMessage
                    className='my-1 font-bold'
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                    messages={locale.guide.tryMagin2a_guidedMessage}
                  />
                </>
              )}
              {isBookDisplayed && scene !== 0 && (
                <GuideMessage
                  className='my-1 font-bold'
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                  messages={locale.guide.tryMagin2b_guidedMessage}
                />
              )}
            </div>

            <div className='mgn-step-bottom h-film flex flex-1 items-end justify-center'>
              {/* TODO: show on a 5 second delay */}
              {/* OPTIMIZE: figure out how to allow \n in the string and convert in to <br /> */}
              {isBookDisplayed && scene === 0 && (
                <div className='flex animate-fadeIn flex-col items-center'>
                  <Image
                    src='/assets/common/images/movie-screen.webp'
                    alt='people in a theatre watching a movie'
                    className='h-auto w-auto !object-scale-down'
                    width='555'
                    height='332'
                  />
                </div>
              )}
              {isBookDisplayed && scene !== 0 && (
                <Film
                  className='animate-delayFadeIn'
                  onNext={() => {
                    router.push('/try-magin/3');
                  }}
                  onPrev={() => {}}
                  scene={scene}
                />
              )}
            </div>
          </div>

          {/* REFACTOR: make this cleaner */}
          {isBookDisplayed && scene === 0 && (
            <Navigation
              className='mt-2'
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
                  setScene(scene + 1);
                },
              }}
            />
          )}
          {isBookDisplayed && scene !== 0 && (
            <Navigation
              className='mt-2'
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
