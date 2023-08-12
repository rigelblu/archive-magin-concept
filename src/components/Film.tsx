// Copyright rigélblu inc. All rights reserved.
import { joinClassesWithComponent } from '@rigelblu/rb-base-packages-join-classes';
import { SceneRange } from '@/components/Scene/SceneContent';
import SceneControl, { Action } from '@/components/Scene/SceneControl';
import ScenePanel from '@/components/Scene/ScenePanel';

type Props = {
  sceneRange: SceneRange;
  setScene: (scene: number) => void;
  className?: string;
  hidePrev?: boolean;
  hideNext?: boolean;
  onNext?: () => void | undefined;
  onPrev?: () => void | undefined;
};

export default function Film({
  sceneRange,
  setScene,
  className = '',
  hidePrev = false,
  hideNext = false,
  onNext = undefined,
  onPrev = undefined,
}: Props) {
  // REFACTOR: move into SceneControl
  const onHandleNext = () => {
    if (sceneRange.current < sceneRange.end) setScene(sceneRange.current + 1);
  };
  const onHandlePrev = () => {
    if (sceneRange.current > sceneRange.start) setScene(sceneRange.current - 1);
  };

  const showPrev = !hidePrev && sceneRange.current !== 1;
  const showNext = !hideNext && sceneRange.current !== 2; // Temporary, should be adjusted to 3

  return (
    <div
      className={joinClassesWithComponent(
        Film.name,
        'flex w-full flex-1 flex-col items-center justify-between',
        className
      )}
    >
      <div className='flex h-full w-full flex-1'>
        {/* REFACTOR: move SceneControl into Story */}
        <SceneControl
          action={Action.Prev}
          onClick={onPrev || onHandlePrev}
          className='px-1'
          isShown={showPrev}
        />
        <ScenePanel scene={sceneRange.current} />
        <SceneControl
          action={Action.Next}
          onClick={onNext || onHandleNext}
          className='px-1'
          isShown={showNext}
        />
      </div>
    </div>
  );
}
