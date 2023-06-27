// Copyright rigélblu inc.
// All rights reserved.
// OPTIMIZE: read based on language
import locale from '@/locales/en.json';

import PageControl from '../PageControl/PageControl';
import Page from './Page';

interface Props {
  className?: string;
  maginPreviewStep?: number | null; // REFACTOR: create a seperate component, that wraps this one
  onTypingComplete?: () => void;
  showPageControls?: boolean;
}

export default function Book(props: Props) {
  const {
    className = '',
    onTypingComplete = undefined,
    maginPreviewStep = null,
    showPageControls = true,
  } = props;
  const onClick = () => console.log('prev/next click');

  return (
    <div className={`mgn-book flex w-full ${className}`}>
      {showPageControls && (
        <PageControl action='prev' onClick={onClick} className='px-1' isShown={false} />
      )}

      <div className='w-full'>
        <h2 className='my-2 text-2xs text-center text-gray-500'>{locale.book.title}</h2>
        <Page maginPreviewStep={maginPreviewStep} onTypingComplete={onTypingComplete} />
      </div>

      {showPageControls && <PageControl action='next' onClick={onClick} className='px-1' />}
    </div>
  );
}
