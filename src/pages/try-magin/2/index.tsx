// Copyright rigélblu inc. All rigts reserve
import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';
import IconUpArrow from '@/assets/common/icons/arrow-up.svg';
import Book from '@/components/Book/Book';
import Film from '@/components/Film/Film';
import GuideMessage from '@/components/GuideMessage';
import NavBar from '@/components/NavBar';
import { AppLayout } from '@/layouts/Layout';
import locale, { LocaleType } from '@/locales/en';

const t: LocaleType = locale;

export default function MarginPreview() {
  const router = useRouter();
  const [isBookDisplayed, setBookDisplayed] = useState(false);
  const [scene, setScene] = useState(0);
  const sceneRange = { start: 1, end: 1, current: scene };

  return (
    <AppLayout canvasClassName='bg-black' mainClassName='mgn-try-magin bg-white'>
      {/* REFACTOR: convert into component, accept 4 children elements */}
      <div className='mgn-preview flex h-screen flex-col items-center justify-center bg-neutral-950'>
        {/* HACK: have to use fixed rem for max height and width due to mobile browsers */}
        <div className='mgn-step flex max-h-[48rem] w-full flex-1 flex-col justify-between bg-ivory-100 p-2 sm:max-w-[25rem]'>
          {/* HACK: have to use fixed rem for height due to mobile browsers */}
          <div className='mgn-story flex w-full flex-1 flex-col justify-between'>
            {/* // FIXME: max-h isn't applied on iOS mobile safari */}
            <div className='mgn-step-top flex max-h-[60%] flex-1 flex-col justify-start overflow-y-auto iphone-se-max-h:max-h-[57%]'>
              <Book
                sceneRange={sceneRange}
                animateTyping={!isBookDisplayed}
                onTypingComplete={() => setBookDisplayed(true)}
                styleTypedNonTypedSame
              />
            </div>

            <div className='mgn-step-middle flex flex-col items-center justify-center pt-1'>
              {/* REFACTOR: make content an optional parameter */}
              {/* REFACTOR: make this cleaner */}
              {!isBookDisplayed && scene === 0 && (
                <>
                  <IconUpArrow className='my-1 w-16' />
                  <GuideMessage
                    className='my-1 font-bold'
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    messages={[t.guide.tryMagin2a_guidedMessages[0]]}
                  />
                </>
              )}
              {isBookDisplayed && scene === 0 && (
                <>
                  <IconUpArrow className='my-1 w-16' />
                  <GuideMessage
                    className='my-1 font-bold'
                    messages={[...t.guide.tryMagin2a_guidedMessages]}
                  />
                </>
              )}
              {isBookDisplayed && scene !== 0 && (
                <GuideMessage
                  className='my-1 font-bold'
                  messages={[t.guide.tryMagin2b_guidedMessage]}
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
            <NavBar
              className='mt-2'
              items={[
                {
                  id: t.navigation.back,
                  label: t.navigation.back,
                  onClick: () => {
                    router.push('/try-magin/1');
                  },
                  className: 'mgn-cta-secondary',
                },
                {
                  id: t.guide.tryMagin2a_showMe,
                  label: t.guide.tryMagin2a_showMe,
                  onClick: () => {
                    setScene(scene + 1);
                  },
                  className: 'mgn-cta-primary',
                },
              ]}
            />
          )}
          {isBookDisplayed && scene !== 0 && (
            <NavBar
              className='mt-2'
              items={[
                {
                  id: t.navigation.back,
                  label: t.navigation.back,
                  onClick: () => {
                    router.push('/try-magin/1');
                  },
                  className: 'mgn-cta-secondary',
                },
                {
                  id: t.guide.tryMagin2b_nextScene,
                  label: t.guide.tryMagin2b_nextScene,
                  onClick: () => {
                    router.push('/try-magin/3');
                  },
                  className: 'mgn-cta-primary',
                  focusEffect: true,
                },
              ]}
            />
          )}
        </div>
      </div>
    </AppLayout>
  );
}
