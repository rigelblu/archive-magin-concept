// Copyright rigélblu inc.
// All rights reserved.
// OPTIMIZE: read based on language
import locale from '@/locales/en.json';
import Page from './Page';

interface Props {
  className?: string;
  maginPreviewStep?: number | null; // REFACTOR: create a seperate component, that wraps this one
  onTypingComplete?: () => void;
  useTypingAnimation?: boolean;
}

export default function Book(props: Props) {
  const {
    className = '',
    maginPreviewStep = null,
    onTypingComplete = undefined,
    useTypingAnimation = false,
  } = props;

  return (
    <div className={`mgn-book flex w-full flex-1 ${className}`}>
      <div className='w-full'>
        <h2 className='mb-2 text-2xs text-center text-gray-500'>{locale.book.title}</h2>
        <Page
          maginPreviewStep={maginPreviewStep}
          onTypingComplete={onTypingComplete}
          useTypingAnimation={useTypingAnimation}
        />
      </div>
    </div>
  );
}
