// Copyright rigélblu inc.
// All rights reserved.
import PageControl from '@/components/PageControl/PageControl';

import Storyboard from './Storyboard/Storyboard';

interface Props {
  className?: string;
}

export default function Film(props: Props) {
  const { className = '' } = props;

  return (
    // REFACTOR: move px-2 to global, align with book
    <div className={`mgn-film flex justify-content-between align-items-center ${className}`}>
      <PageControl action='prev' onClick={() => {}} className='px-1' isShown={false} />
      <Storyboard />
      <PageControl action='next' onClick={() => {}} className='px-1' />
    </div>
  );
}
