// Copyright rigélblu inc.
// All rights reserved.
import PageControl from '../PageControl/PageControl';
import Page from './Page/Page';

interface Props {
  className?: string;
  showPageControls?: boolean;
}

export default function Book(props: Props) {
  const { className = '', showPageControls = true } = props;
  const onClick = () => console.log('prev/next click');

  return (
    <div className={`mgn-book ${className} flex align-items-center`}>
      {showPageControls && (
      <PageControl action='prev' isShown={false} onClick={onClick} className='px-1' />
      )}
      <Page />
      {showPageControls && <PageControl action='next' isShown onClick={onClick} className='px-1' />}
    </div>
  );
}
