// Copyright rigélblu inc.
// All rights reserved.
import PageControl from '@/components/PageControl/PageControl';
import ScenePanel from './ScenePanel';

type Props = {
  className?: string;
  onNext: () => void;
  onPrev: () => void;
  scene: number; // TODO: show PageControls based on first and last scene number
  // REFACTOR: make showPrev showNext on by default. Make it optional to turn off
  hideNext?: boolean;
  hidePrev?: boolean;
};

export default function Film(props: Props) {
  const { className = '', hideNext = false, hidePrev = false, onNext, onPrev, scene } = props;

  return (
    // REFACTOR: move px-2 to global, align with book
    <div className={`mgn-film flex items-center justify-between ${className}`}>
      <PageControl
        action='prev'
        onClick={onPrev}
        className='px-1'
        isShown={!hidePrev && scene > 0}
      />
      <ScenePanel scene={scene} />
      <PageControl
        action='next'
        onClick={onNext}
        className='px-1'
        isShown={!hideNext && scene < 3}
      />
    </div>
  );
}
