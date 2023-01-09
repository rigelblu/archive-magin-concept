// Copyright rigélblu inc.
// All rights reserved.
// import Book from '@/components/Book/Book';
// import Film from '@/components/Film/Film';
import GuideMessage from '@/containers/MaginGuide/GuideMessage';
import Navigation from '@/components/Navigation/Navigation';

// REFACTOR: read based on language
import locale from '@/locales/en.json';

interface Props {
  className?: string;
}

// REFACTOR: move into own files
function Step1() {
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
      <Navigation left={locale.navigation.returnHome} right={locale.navigation.watchNovel} />
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
