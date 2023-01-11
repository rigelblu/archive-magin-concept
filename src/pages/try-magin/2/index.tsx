// Copyright rigélblu inc.
// All rigts reserve
import { useRouter } from 'next/router';

import Book from '@/components/Book/Book';
import GuideMessage from '@/components/GuideMessage';
import Navigation from '@/components/Navigation/Navigation';

// REFACTOR: read based on language
import locale from '@/locales/en.json';

export default function MarginPreview() {
  const router = useRouter();

  return (
    <div className='mgn-try-magin'>
      {/* REFACTOR: convert into component css class */}
      <div className='mgn-preview flex w-screen h-screen p-3 justify-content-center align-items-center'>
        <div className='w-full h-full sm:max-w-24rem sm:max-h-40rem'>
          <div className='h-full flex flex-column justify-content-between'>
            <div className='mgn-guide-step1 flex flex-column h-full justify-items-center'>
              <div className='flex h-full'>
                <GuideMessage className='flex flex-column h-3/4 justify-content-end'>
                  <h2>
                    {locale.guide.step2_read}
                    <br />
                    {locale.guide.step2_movie_sceen}
                    <br />
                    <Book />
                  </h2>
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
                  label: locale.navigation.watchNovel,
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
