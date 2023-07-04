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
import styles from '../try-magin.module.scss';

export default function MarginPreview() {
  const router = useRouter();
  const [scene, setScene] = useState(2);
  const startScene = 1;
  const endScene = 2;

  return (
    <MainLayout canvasClassName='bg-black' className='mgn-try-magin bg-white' layoutKind='app'>
      {/* REFACTOR: convert into component, accept 4 children elements */}
      <div
        className={`${styles['mgn-preview']} flex h-screen flex-col items-center justify-center bg-neutral-950`}
      >
        {/* HACK: have to use fixed rem for max height and width due to mobile browsers */}
        <div className='mgn-step flex	w-full flex-1 flex-col justify-between bg-yellow-rb-200 p-2'>
          {/* HACK: have to use fixed rem for height due to mobile browsers */}
          <div className='mgn-step-top col h-book max-h-for-screen flex flex-col justify-start'>
            <Book sceneCurrent={scene} sceneEnd={endScene} sceneStart={startScene} />
          </div>

          <div className='mgn-step-middle h-guided-message flex flex-1 justify-center overflow-hidden pt-1'>
            {/* TODO: show on a 5 second delay */}
            {/* OPTIMIZE: figure out how to allow \n in the string and convert in to <br /> */}
            {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
            <GuideMessage
              className='flex items-center font-bold'
              messages={locale.guide.tryMagin3a_guidedMessage}
            />
          </div>

          <div className='mgn-step-bottom h-film max-h-for-screen flex animate-delayFadeIn items-end'>
            <Film
              className='flex-1'
              onNext={() => {
                setScene(scene + 1);
              }}
              onPrev={() => {
                setScene(scene - 1);
              }}
              scene={scene}
            />
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
              label: locale.guide.tryMagin3a_nextScene,
              onClick: () => {
                setScene(scene + 1);
              },
            }}
          />
        </div>
      </div>
    </MainLayout>
  );
}
