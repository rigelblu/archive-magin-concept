// Copyright rigélblu inc.
// All rigts reserve
import { useRouter } from 'next/router';

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
      {/* REFACTOR: convert into component css class */}
      <div className='mgn-preview flex w-screen h-screen p-3 justify-content-center align-items-center'>
        <div className='w-full h-full sm:max-w-24rem sm:max-h-40rem'>
          <div className='h-full flex flex-column justify-content-between'>
            <div className='mgn-guide-step1 flex flex-column h-full justify-items-center'>
              <div className='flex h-full'>
                <GuideMessage className='flex flex-column h-3/4 justify-content-end'>
                  <p className='font-bold '>
                    {locale.guide.step2_read}
                    <br />
                    {locale.guide.step2_movieSceen}
                    <br />
                    <Book />
                    <br />
                    {/* TODO: show on a 1 second delay */}
                    {locale.guide.step2_whatWould}
                  </p>
                </GuideMessage>
              </div>

              {/* REFACTOR: use next layout */}
              <Navigation
                left={{
                  label: locale.navigation.back,
                  onClick: () => {
                    router.push('/try-magin/1');
                  },
                }}
                right={{
                  label: locale.guide.step2_showMe,
                  onClick: () => {
                    router.push('/try-magin/2');
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
