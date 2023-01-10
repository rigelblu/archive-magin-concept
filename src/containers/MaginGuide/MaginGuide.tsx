// Copyright rigélblu inc.
// All rights reserved.
import { useRouter } from 'next/router';

import GuideMessage from '@/containers/MaginGuide/GuideMessage';
import Navigation from '@/components/Navigation/Navigation';

// REFACTOR: read based on language
import locale from '@/locales/en.json';

interface Props {
  className?: string;
}

// REFACTOR: move into own files
function Step1() {
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
        `Page: MaginGuide, Step: 1, onClickReturnHome: router.push failed to return promise, response: ${
          response || 'not truthy'
        }`
      );
    }
  };

  return (
    <div className='mgn-guide-step1 flex flex-column h-full justify-items-center'>
      <div className='flex h-full'>
        <GuideMessage className='flex flex-column h-3/4 justify-content-end'>
          <h1>
            {locale.guide.step1_magin_presents}
            <br />
            {locale.book.title}
            <br />
          </h1>
        </GuideMessage>
      </div>
      <Navigation
        left={{ label: locale.navigation.returnHome, onClick: onClickReturnHome }}
        right={{ label: locale.navigation.watchNovel, onClick: () => {} }}
      />
    </div>
  );
}

export default function MaginGuide(props: Props) {
  const { className = '' } = props;

  return (
    <div className={`mgn-guide h-full ${className}`}>
      <Step1 />
    </div>
  );
}
