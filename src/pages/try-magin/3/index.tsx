// Copyright rigélblu inc.
// All rigts reserve
import { useRouter } from 'next/router';
import { useState } from 'react';
import Book from '@/components/Book/Book';
import Film from '@/components/Film/Film';
import GuideMessage from '@/components/GuideMessage';
import Navigation from '@/components/Navigation/Navigation';
import MainLayout from '@/layouts/MainLayout';

// OPTIMIZE: read based on language
import locale from '@/locales/en.json';

export default function MarginPreview() {
  const router = useRouter();
  const [scene, setScene] = useState(2);
  const startScene = 1;
  const endScene = 2;

  return (
    <MainLayout canvasClassName='bg-black' className='mgn-try-magin bg-white' layoutKind='app'>
      {/* REFACTOR: convert into component, accept 4 children elements */}
      <div className='flex h-screen flex-col items-center justify-center bg-neutral-950'>
        {/* HACK: have to use fixed rem for max height and width due to mobile browsers */}
        <div className='mgn-step flex max-h-[48rem] w-full flex-1 flex-col justify-between bg-yellow-rb-200 p-2 sm:max-w-[25rem]'>
          <div className='mgn-story flex w-full flex-1 flex-col justify-between'>
            {/* HACK: have to use fixed rem for height due to mobile browsers */}
            <div className='mgn-step-top flex max-h-[60%] flex-1 flex-col justify-start overflow-y-auto iphone-se-max-h:max-h-[57%]'>
              <Book sceneCurrent={scene} sceneEnd={endScene} sceneStart={startScene} />
            </div>

            <div className='mgn-step-middle flex flex-col items-center justify-center pt-1'>
              {/* TODO: show on a 5 second delay */}
              {/* OPTIMIZE: figure out how to allow \n in the string and convert in to <br /> */}
              {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
              <GuideMessage
                className='flex items-center font-bold'
                messages={locale.guide.tryMagin3a_guidedMessage}
              />
            </div>

            <div className='mgn-step-bottom flex max-h-[30%] flex-1 flex-col items-end'>
              <div className='relative flex w-full flex-1 animate-fadeIn flex-col items-center'>
                <Film
                  onNext={() => {
                    setScene(scene + 1);
                  }}
                  onPrev={() => {
                    setScene(scene - 1);
                  }}
                  scene={scene}
                />
              </div>
            </div>
          </div>

          {/* HACK: temporarily disable */}
          <Navigation
            className='mt-2'
            left={{
              className: 'mgn-cta-secondary',
              label: locale.navigation.back,
              onClick: () => {
                router.push('/try-magin/2');
              },
            }}
            right={{
              className: 'mgn-cta-primary',
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              label: locale.navigation.next,
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
