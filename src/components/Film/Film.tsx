// Copyright rigélblu inc. All rights reserved.
import SceneControl, { Action } from '@/components/Scene/SceneControl';
import ScenePanel from '@/components/Scene/ScenePanel';

type Props = {
  onNext: () => void;
  onPrev: () => void;
  scene: number;
  className?: string;
  hidePrev?: boolean;
  hideNext?: boolean;
};

export default function Film({
  onNext,
  onPrev,
  scene,
  className = '',
  hidePrev = false,
  hideNext = false,
}: Props) {
  const showPrev = !hidePrev && scene !== 1;
  const showNext = !hideNext && scene !== 2; // Temporary, should be adjusted to 3

  return (
    <div className={`film flex w-full flex-1 flex-col items-center justify-between ${className}`}>
      <main className='flex h-full w-full flex-1'>
        <SceneControl action={Action.Prev} onClick={onPrev} className='px-1' isShown={showPrev} />
        <ScenePanel scene={scene} />
        <SceneControl action={Action.Next} onClick={onNext} className='px-1' isShown={showNext} />
      </main>
    </div>
  );
}
