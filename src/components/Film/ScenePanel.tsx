// Copyright rigélblu inc.
// All rights reserved.
import Image from 'next/image';
import SceneMarker from '@/components/SceneMarker/SceneMarker';

// OPTIMIZE: read based on language
import locale from '@/locales/en.json';

type Props = {
  className?: string;
};

export default function ScenePanel(props: Props) {
  const { className = '' } = props;
  const sceneNum = 1;

  return (
    <div className={`mgn-scenepanel outline rounded-lg p-2 w-full ${className}`}>
      {/* OPTIMIZE: find better font */}
      <div className='text-xs'>
        {locale.film.scene}: {sceneNum}
      </div>
      <hr className='border-1 border-black my-1 py-1' />
      <SceneMarker sceneNum={sceneNum}>
        {/* OPTIMIZE: load image cdn */}
        {/* OPTIMIZE: create SceneImage component, accept alt and src props */}
        <Image
          src='/assets/common/images/storyboard-panel-1.webp'
          alt='An overhead, close up shot of a tired person lying down, head falling asleep with eyes slightly open and irritated in a very dark room.'
          className='h-auto mx-auto !object-scale-down'
          width={330}
          height={270}
        />
      </SceneMarker>
    </div>
  );
}
