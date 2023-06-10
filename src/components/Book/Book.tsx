// Copyright rigélblu inc.
// All rights reserved.
// OPTIMIZE: read based on language
import locale from '@/locales/en.json';

import PageControl from '../PageControl/PageControl';
import Page from './Page/Page';

interface Props {
  className?: string;
  maginPreviewStep?: number | null;
  showPageControls?: boolean;
}

export default function Book(props: Props) {
  const { className = '', maginPreviewStep = null, showPageControls = true } = props;
  const onClick = () => console.log('prev/next click');

  return (
    <div className={`mgn-book flex ${className}`}>
      {showPageControls && (
        <PageControl action='prev' onClick={onClick} className='px-1' isShown={false} />
      )}

      <div>
        <h2 className='my-2 text-2xs text-center text-gray-500'>{locale.book.title}</h2>
        <Page maginPreviewStep={maginPreviewStep} />
      </div>

      {showPageControls && <PageControl action='next' onClick={onClick} className='px-1' />}
    </div>
  );
}
