// Copyright rigélblu inc.
// All rights reserved.
// OPTIMIZE: read based on language
import locale from '@/locales/en.json';
import Page from './Page';

interface Props {
  className?: string;
  onTypingComplete?: () => void;
  scene: number;
  useTypingAnimation?: boolean;
}

export default function Book(props: Props) {
  const { className = '', onTypingComplete = undefined, scene, useTypingAnimation = false } = props;

  return (
    <div className={`mgn-book flex w-full flex-1 ${className}`}>
      <div className='w-full'>
        <h2 className='mb-2 text-2xs text-center text-gray-500'>{locale.book.title}</h2>
        <Page
          onTypingComplete={onTypingComplete}
          scene={scene}
          useTypingAnimation={useTypingAnimation}
        />
      </div>
    </div>
  );
}
