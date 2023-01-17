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
    <div className={`mgn-book flex align-items-center ${className}`}>
      {showPageControls && (
        <PageControl action='prev' isShown={false} onClick={onClick} className='px-1' />
      )}
      <Page maginPreviewStep={maginPreviewStep} />
      {showPageControls && <PageControl action='next' isShown onClick={onClick} className='px-1' />}
    </div>
  );
}
