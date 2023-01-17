// Copyright rigélblu inc.
// All rights reserved.
import Image from 'next/image';

interface Props {
  className?: string;
}

export default function Storyboard(props: Props) {
  const { className = '' } = props;

  return (
    <div className={`mgn-storyboard w-full ${className}`}>
      {/* OPTIMIZE: load image cdn */}
      {/* TODO: load image based on selected scene */}
      <Image
        src='/assets/common/images/storyboard-placeholder.png'
        alt='Placeholder'
        width={330}
        height={270}
      />
    </div>
  );
}
