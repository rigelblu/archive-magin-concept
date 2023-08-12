// Copyright rigélblu inc. All rights reserve
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import IconUpArrow from '@/assets/common/icons/arrow-up.svg';
import AppView from '@/components/Views/AppView';
import { CTARole } from '@/components/BaseComponents';
import Book from '@/components/Book';
import Film from '@/components/Film';
import GuideMessage from '@/components/GuideMessage';
import NavBar from '@/components/NavBar';
import Story from '@/components/Story';
import locale, { LocaleType } from '@/locales/en';

const t: LocaleType = locale;

export default function MaginPreview() {
  const router = useRouter();
  const [isBookDisplayed, setBookDisplayed] = useState(false);
  const [scene, setScene] = useState(0);
  const sceneRange = { start: 1, end: 1, current: 1 };

  // REFACTOR: pass book enum to it
  const bookEl = (
    <Book
      sceneRange={sceneRange}
      animateTyping={!isBookDisplayed}
      onTypingComplete={() => setBookDisplayed(true)}
      styleTypedNonTypedSame
    />
  );

  // REFACTOR: move logic into src/components/MaginPreview/GuideMessage
  //           interface <GuideMessage process={...} />
  const guidedMessageNode = [];
  if (!isBookDisplayed && scene === 0) {
    guidedMessageNode.push(
      <>
        <IconUpArrow className='my-1 w-16' />
        <GuideMessage
          className='my-1 font-bold'
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          messages={[t.guide.tryMagin2a_guidedMessages[0]]}
        />
      </>
    );
  }
  if (isBookDisplayed && scene === 0) {
    guidedMessageNode.push(
      <>
        <IconUpArrow className='my-1 w-16' />
        <GuideMessage
          className='my-1 font-bold'
          messages={[...t.guide.tryMagin2a_guidedMessages]}
        />
      </>
    );
  }
  if (isBookDisplayed && scene !== 0) {
    guidedMessageNode.push(
      <GuideMessage className='my-1 font-bold' messages={[t.guide.tryMagin2b_guidedMessage]} />
    );
  }

  const filmEl = (
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
          sceneRange={sceneRange}
          setScene={setScene}
          onNext={() => {
            router.push('/try-magin/3');
          }}
          onPrev={() => {}}
          className='animate-delayFadeIn'
        />
      )}
    </div>
  );

  const appContent = (
    <Story
      sceneRange={sceneRange}
      bookEl={bookEl}
      guidedMessageNode={guidedMessageNode}
      filmEl={filmEl}
    />
  );

  // REFACTOR: make this cleaner
  const appNavBar = (
    <>
      {isBookDisplayed && scene === 0 && (
        <NavBar
          className='mt-2'
          items={[
            {
              id: t.navigation.back,
              label: t.navigation.back,
              ctaRole: CTARole.Secondary,
              onClick: () => {
                router.push('/try-magin/1');
              },
            },
            {
              id: t.guide.tryMagin2a_showMe,
              label: t.guide.tryMagin2a_showMe,
              ctaRole: CTARole.Primary,
              onClick: () => {
                setScene(scene + 1);
              },
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
              ctaRole: CTARole.Secondary,
              onClick: () => {
                router.push('/try-magin/1');
              },
            },
            {
              id: t.guide.tryMagin2b_nextScene,
              label: t.guide.tryMagin2b_nextScene,
              ctaRole: CTARole.Primary,
              onClick: () => {
                router.push('/try-magin/3');
              },
              focusEffect: true,
            },
          ]}
        />
      )}
    </>
  );

  return <AppView appContent={appContent} appNavBar={appNavBar} />;
}
