// Copyright rigélblu inc.
// All rigts reserve
import { useRouter } from 'next/router';

import GuideMessage from '@/components/GuideMessage';
import Navigation from '@/components/Navigation/Navigation';

// REFACTOR: read based on language
import locale from '@/locales/en.json';

export default function MarginPreview() {
  const router = useRouter();

  return (
    <div className='mgn-try-magin bg-white'>
      {/* REFACTOR: convert into component, accept 4 children elements */}
      <div className='mgn-preview flex w-screen h-screen p-3 justify-content-center align-items-center'>
        <div className='mgn-step flex flex-column w-full h-full justify-content-between sm:max-w-24rem sm:max-h-50rem'>
          <GuideMessage className='flex flex-column h-3/4 justify-content-end'>
            <h2 className='text-black'>
              {locale.guide.step1_maginPresents}
              <br />
              {locale.book.title}
              <br />
            </h2>
          </GuideMessage>

          {/* REFACTOR: use next layout */}
          <Navigation
            left={{
              label: locale.navigation.returnHome,
              onClick: () => {
                router.push('/');
              },
            }}
            right={{
              label: locale.guide.step1_watchNovel,
              onClick: () => {
                router.push('/try-magin/2');
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
