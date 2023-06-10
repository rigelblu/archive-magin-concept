// Copyright rigélblu inc.
// All rights reserved.
import PageControl from '@/components/PageControl/PageControl';
import ScenePanel from './ScenePanel';

interface Props {
  className?: string;
}

export default function Film(props: Props) {
  const { className = '' } = props;

  return (
    // REFACTOR: move px-2 to global, align with book
    <div className={`mgn-film flex items-center justify-between ${className}`}>
      <PageControl action='prev' onClick={() => {}} className='px-1' isShown={false} />
      <ScenePanel />
      <PageControl action='next' onClick={() => {}} className='px-1' />
    </div>
  );
}
