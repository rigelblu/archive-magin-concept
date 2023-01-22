// Copyright rigélblu inc.
// All rigts reserve
import { useRouter } from 'next/router';

import Book from '@/components/Book/Book';
import Film from '@/components/Film/Film';
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
          <Book maginPreviewStep={3} showPageControls className='h-full' />
          <GuideMessage className='font-bold'>
            {/* TODO: show on a 5 second delay */}
            {/* OPTIMIZE: figure out how to allow \n in the string and convert in to <br /> */}
            {/* OPTIMIZE: create a component to cycle through the array with a delay */}
            {locale.guide.step3_1} <br />
            {locale.guide.step3_2} <br />
          </GuideMessage>
          <Film className='h-full' />

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
    </div>
  );
}
