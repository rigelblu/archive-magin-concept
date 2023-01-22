// Copyright rigélblu inc.
// All rigts reserve
import { useRouter } from 'next/router';
import Image from 'next/image';

import Book from '@/components/Book/Book';
import GuideMessage from '@/components/GuideMessage';
import Navigation from '@/components/Navigation/Navigation';

// OPTIMIZE: read based on language
import Locale from '@/locales/en.json';

// REFACTOR: move into LocaleType.ts file
interface LocalePropType {
  [key: string]: string;
}
interface LocaleType {
  [key: string]: LocalePropType;
}

export default function MarginPreview() {
  const router = useRouter();
  const locale = Locale as LocaleType;

  return (
    <div className='mgn-try-magin bg-white'>
      {/* REFACTOR: convert into component, accept 4 children elements */}
      <div className='mgn-preview flex w-screen h-screen p-3 justify-content-center align-items-center'>
        <div className='mgn-step flex flex-column w-full h-full justify-content-between sm:max-w-24rem sm:max-h-50rem'>
          {/* REFACTOR: make content an optional parameter */}
          <GuideMessage className='font-bold'>{locale.guide.step2_read}</GuideMessage>
          <Book maginPreviewStep={2} showPageControls={false} className='h-full' />

          {/* TODO: show on a 5 second delay */}
          {/* OPTIMIZE: figure out how to allow \n in the string and convert in to <br /> */}
          <GuideMessage className='font-bold'>{locale.guide.step2_movieSceen}</GuideMessage>

          <div className='flex flex-column h-full justify-content-start align-items-center relative'>
            <Image
              src='/assets/common/images/movie-screen.webp'
              alt='people in a theatre watching a movie'
              className='!object-scale-down w-20rem h-auto'
              width='640'
              height='364'
            />
            <GuideMessage className='font-bold'>
              {/* TODO: show on a 1 second delay */}
              {locale.guide.step2_whatWould}
            </GuideMessage>
          </div>

          {/* REFACTOR: use next layout */}
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
        </div>
      </div>
    </div>
  );
}
