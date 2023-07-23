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
import locale from '@/locales/en';

export default function MarginPreview() {
  const router = useRouter();
  const [isBookDisplayed, setBookDisplayed] = useState(false);
  const [scene, setScene] = useState(0);
  const startScene = 1;
  const endScene = 1;

  return (
    <MainLayout canvasClassName='bg-black' className='mgn-try-magin bg-white' layoutKind='app'>
      {/* REFACTOR: convert into component, accept 4 children elements */}
      <div className='mgn-preview flex h-screen flex-col items-center justify-center bg-neutral-950'>
        {/* HACK: have to use fixed rem for max height and width due to mobile browsers */}
        <div className='mgn-step flex max-h-[48rem] w-full flex-1 flex-col justify-between bg-ivory-100 p-2 sm:max-w-[25rem]'>
          {/* HACK: have to use fixed rem for height due to mobile browsers */}
          <div className='mgn-story flex w-full flex-1 flex-col justify-between'>
            {/* // FIXME: max-h isn't applied on iOS mobile safari */}
            <div className='mgn-step-top flex max-h-[60%] flex-1 flex-col justify-start overflow-y-auto iphone-se-max-h:max-h-[57%]'>
              <Book
                onTypingComplete={() => setBookDisplayed(true)}
                sceneCurrent={scene}
                sceneEnd={endScene}
                sceneStart={startScene}
                useTypingAnimation={!isBookDisplayed}
                styleTypedNonTypedSame
              />
            </div>

            <div className='mgn-step-middle flex flex-col items-center justify-center pt-1'>
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

            <div className='mgn-step-bottom flex max-h-[30%] flex-1 flex-col items-end'>
              <div className='relative flex w-full flex-1 animate-fadeIn flex-col items-center'>
                {/* OPTIMIZE: figure out how to allow \n in the string and convert in to <br /> */}
                {isBookDisplayed && scene === 0 && (
                  <Image
                    src='/assets/common/images/movie-screen.webp'
                    alt='people in a theatre watching a movie'
                    className='object-scale-down'
                    fill
                  />
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
