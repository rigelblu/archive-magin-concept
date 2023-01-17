// Copyright rigélblu inc.
// All rights reserved.
import Image from 'next/image';
import Scene from '@/components/Scene/Scene';
import PageControl from '@/components/PageControl/PageControl';

interface Props {
  className?: string;
}

export default function Storyboard(props: Props) {
  const { className = '' } = props;

  return (
    <div className={`mgn-storyboard flex align-items-center ${className}`}>
      <PageControl action='prev' onClick={() => {}} isShown={false} className='px-1' />
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
      <PageControl action='next' onClick={() => {}} className='px-1' />
    </div>
  );
}
