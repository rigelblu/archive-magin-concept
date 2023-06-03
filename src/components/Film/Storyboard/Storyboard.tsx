// Copyright rigélblu inc.
// All rights reserved.
import Image from 'next/image';
import Scene from '@/components/Scene/Scene';

interface Props {
  className?: string;
}

export default function Storyboard(props: Props) {
  const { className = '' } = props;

  return (
    <div className={`mgn-storyboard ${className}`}>
      <Scene sceneNum={1}>
        {/* OPTIMIZE: load image cdn */}
        {/* TODO: load image based on selected scene */}
        <Image
          src='/assets/common/images/storyboard-panel-1.webp'
          alt='An overhead, close up shot of a tired person lying down, head falling asleep with eyes slightly open and irritated in a very dark room.'
          className='h-auto w-80 !object-scale-down'
          width={330}
          height={270}
        />
      </Scene>
    </div>
  );
}
