// Copyright rigélblu inc.
// All rights reserved.
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
    <div className={`mgn-book flex justify-content-between align-items-center ${className}`}>
      {showPageControls && (
        <PageControl action='prev' onClick={onClick} className='px-1' isShown={false} />
      )}
      <Page maginPreviewStep={maginPreviewStep} />
      {showPageControls && <PageControl action='next' onClick={onClick} className='px-1' />}
    </div>
  );
}
