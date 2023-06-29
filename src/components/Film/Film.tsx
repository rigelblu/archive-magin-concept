// Copyright rigélblu inc.
// All rights reserved.
import PageControl from '@/components/PageControl/PageControl';
import ScenePanel from './ScenePanel';

type Props = {
  className?: string;
  onNext: () => void;
  onPrev: () => void;
  // REFACTOR: make showPrev showNext on by default. Make it optional to turn off
  showPrev: boolean;
  showNext: boolean;
};

export default function Film(props: Props) {
  const { className = '', onNext, onPrev, showPrev, showNext } = props;

  return (
    // REFACTOR: move px-2 to global, align with book
    <div className={`mgn-film flex items-center justify-between ${className}`}>
      <PageControl action='prev' onClick={onPrev} className='px-1' isShown={showPrev} />
      <ScenePanel />
      <PageControl action='next' onClick={onNext} className='px-1' isShown={showNext} />
    </div>
  );
}
