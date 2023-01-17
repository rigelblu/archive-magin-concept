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
    <div className={`mgn-storyboard w-full ${className}`}>
      {/* OPTIMIZE: load image cdn */}
      {/* TODO: load image based on selected scene */}
      <Scene sceneNum={1}>
      <Image
        src='/assets/common/images/storyboard-placeholder.png'
        alt='Placeholder'
        width={330}
        height={270}
      />
      </Scene>
    </div>
  );
}
