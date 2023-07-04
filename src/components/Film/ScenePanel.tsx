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
  const img = { src: '', alt: '', width: 0, height: 0 };

  switch (scene) {
    case 1:
      img.src = '/assets/common/images/storyboard-panel-1.webp';
      img.alt =
        'An overhead, close up shot of a tired person lying down, head falling asleep with eyes slightly open and irritated in a very dark room.';
      img.width = 607;
      img.height = 362;
      break;
    case 2:
      img.src = '/assets/common/images/storyboard-panel-2.webp';
      img.alt = 'close up, head shot person trying to talk';
      img.width = 612;
      img.height = 365;
      break;
    default:
  }

  return (
    <div
      className={`mgn-scenepanel mb-0.5 flex h-full w-full flex-col justify-between rounded-lg p-1 outline ${className}`}
    >
      {/* OPTIMIZE: find better font */}
      <div className='text-2xs'>
        {locale.film.scene}: {scene}
      </div>

      <hr className='border-1 my-1 border-black' />

      <SceneMarker className='my-1 h-full'>
        {/* OPTIMIZE: load image cdn */}
        {/* OPTIMIZE: create SceneImage component, accept alt and src props */}
        <Image src={img.src} alt={img.alt} className='mx-auto !object-scale-down pl-2' fill />
      </SceneMarker>
    </div>
  );
}
