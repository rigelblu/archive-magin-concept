// Copyright rigélblu inc.
// All rights reserved.
import Image from 'next/image';
import SceneMarker from '@/components/SceneMarker/SceneMarker';

// OPTIMIZE: read based on language
import locale from '@/locales/en.json';

type Props = {
  className?: string;
  scene: number;
};

export default function ScenePanel(props: Props) {
  const { className = '', scene } = props;
  let src = '';
  let alt = '';

  switch (scene) {
    case 1:
      src = '/assets/common/images/storyboard-panel-1.webp';
      alt =
        'An overhead, close up shot of a tired person lying down, head falling asleep with eyes slightly open and irritated in a very dark room.';
      break;
    case 2:
      src = '/assets/common/images/storyboard-panel-2.webp';
      alt = 'close up, head shot person trying to talk';
      break;
    default:
  }

  return (
    <div
      className={`mgn-scenepanel flex w-full flex-col justify-between rounded-lg p-1 outline ${className}`}
    >
      {/* OPTIMIZE: find better font */}
      <div className='text-2xs'>
        {locale.film.scene}: {scene}
      </div>

      <hr className='border-1 my-1 border-black' />

      <SceneMarker className='my-1'>
        {/* OPTIMIZE: load image cdn */}
        {/* OPTIMIZE: create SceneImage component, accept alt and src props */}
        <Image
          src={src}
          alt={alt}
          className='mx-auto h-auto w-auto !object-scale-down pl-2'
          width={330}
          height={270}
        />
      </SceneMarker>
    </div>
  );
}
