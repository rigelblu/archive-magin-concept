// Copyright rigélblu inc. All rights reserved.
import locale, { LocaleType } from '@/locales/en';
import SceneMarker from '@/components/Scene/SceneMarker';
import SceneImage from './SceneImage';

const t: LocaleType = locale;

type Props = {
  scene: number;
  className?: string;
};

export default function ScenePanel({ scene, className = '' }: Props) {
  return (
    <div
      className={`mgn-scenepanel mb-0.5 flex w-full flex-1 flex-col justify-between rounded-lg p-1 outline ${className}`}
    >
      {/* OPTIMIZE: find better font */}
      <div className='text-2xs'>
        {t.film.scene}: {scene}
      </div>

      <hr className='border-1 my-1 border-black' />

      <SceneMarker className='my-1 flex flex-1 flex-col content-center'>
        <SceneImage scene={scene} />
      </SceneMarker>
    </div>
  );
}
