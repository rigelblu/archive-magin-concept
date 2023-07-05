// Copyright rigélblu inc.
// All rights reserved.
// OPTIMIZE: read based on language
import locale from '@/locales/en.json';
import Page from './Page';

type Props = {
  className?: string;
  onTypingComplete?: () => void;
  sceneCurrent: number;
  sceneEnd: number;
  sceneStart: number;
  styleTypedNonTypedSame?: boolean;
  useTypingAnimation?: boolean;
};

export default function Book(props: Props) {
  const {
    className = '',
    onTypingComplete = undefined,
    sceneCurrent,
    sceneStart,
    sceneEnd,
    styleTypedNonTypedSame = false,
    useTypingAnimation = false,
  } = props;

  return (
    <div className={`mgn-book flex h-full w-full flex-1 ${className}`}>
      <div className='w-full'>
        <h2 className='mb-2 text-center text-2xs text-gray-500'>{locale.book.title}</h2>
        <Page
          onTypingComplete={onTypingComplete}
          sceneCurrent={sceneCurrent}
          sceneEnd={sceneEnd}
          sceneStart={sceneStart}
          useTypingAnimation={useTypingAnimation}
          styleTypedNonTypedSame={styleTypedNonTypedSame}
        />
      </div>
    </div>
  );
}
