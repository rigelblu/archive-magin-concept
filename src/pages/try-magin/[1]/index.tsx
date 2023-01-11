// Copyright rigélblu inc.
// All rigts reserve
import { useRouter } from 'next/router';

import GuideMessage from '@/components/GuideMessage';
import Navigation from '@/components/Navigation/Navigation';

// REFACTOR: read based on language
import locale from '@/locales/en.json';

export default function MarginPreview() {
  const router = useRouter();

  // OPTIMIZE: convert into helper function
  let response: boolean;
  // FIXME: figure out how to return void when promise is returned
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  const onClickReturnHome: () => void = async () => {
    try {
      response = await router.push('/');
    } catch {
      console.error(
        `Page: MaginPreview, Step: 1, onClickReturnHome: router.push failed to return promise, response: ${
          response || 'not truthy'
        }`
      );
    }
  };
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
                    {locale.guide.step1_magin_presents}
                    <br />
                    {locale.book.title}
                    <br />
                  </h2>
                </GuideMessage>
              </div>
              <Navigation
                left={{ label: locale.navigation.returnHome, onClick: onClickReturnHome }}
                right={{ label: locale.navigation.watchNovel, onClick: () => {} }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
