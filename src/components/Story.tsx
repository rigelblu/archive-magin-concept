// Copyright rigélblu inc. All rights reserved.
import { useState } from 'react';
import { joinClassesWithComponent } from '@rigelblu/rb-base-packages-join-classes';
import { SceneRange } from './Scene/SceneContent';
import Book from './Book';
import Film from './Film';

type Props = {
  sceneRange: SceneRange;
  bookEl?: React.ReactElement<typeof Book>;
  guidedMessageNode?: React.ReactNode;
  filmEl?: React.ReactElement<typeof Film>;
};

export default function Story({
  sceneRange,
  bookEl = undefined,
  guidedMessageNode = undefined,
  filmEl = undefined,
}: Props) {
  const [scene, setScene] = useState(sceneRange.current);

  return (
    <div
      className={joinClassesWithComponent(
        Story.name,
        // REFACTOR: accept this as a prop
        'flex w-full flex-1 flex-col justify-between'
      )}
    >
      {/* HACK: have to use fixed rem for height due to mobile browsers */}
      {/* // FIXME: max-h isn't applied on iOS mobile safari */}
      <div className='flex max-h-[60%] flex-1 flex-col justify-start overflow-y-auto iphone-se-max-h:max-h-[57%]'>
        {bookEl || (
          <Book sceneRange={{ start: sceneRange.start, end: sceneRange.end, current: scene }} />
        )}
      </div>

      <div className='flex flex-col items-center justify-center pt-1'>
        {guidedMessageNode || null}
      </div>

      <div className='mgn-step-bottom flex max-h-[30%] flex-1 flex-col items-end'>
        {filmEl || (
          <Film
            sceneRange={{ start: sceneRange.start, end: sceneRange.end, current: scene }}
            setScene={setScene}
            className='relative flex w-full flex-1 animate-fadeIn flex-col items-center'
          />
        )}
      </div>
    </div>
  );
}
