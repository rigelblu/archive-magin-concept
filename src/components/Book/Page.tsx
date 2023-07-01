// Copyright rigélblu inc.
// All rights reserved.
import { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import SceneMarker from '@/components/SceneMarker/SceneMarker';
import settings, { MODE } from '@/config/settings';
import styles from './Page.module.scss';

type Props = {
  className?: string;
  onTypingComplete?: () => void;
  sceneCurrent: number;
  sceneEnd: number;
  sceneStart: number;
  useTypingAnimation?: boolean;
};

export default function Page(props: Props) {
  const {
    className = '',
    onTypingComplete = undefined,
    sceneCurrent,
    sceneEnd,
    sceneStart,
    useTypingAnimation = false,
  } = props;
  const refTyped = useRef(null);
  const typingSpeed = settings.mode !== MODE.DEBUG ? settings.page.typingSpeed : 0;

  const contentScenes = [
    // FIXME: add key
    // eslint-disable-next-line react/jsx-key
    <h3 className='my-2 pl-2 text-lg'>Chapter 1</h3>,
    // eslint-disable-next-line react/jsx-key
    <span className='pl-2'>
      <p>"What's two plus two?"</p>
      <p>Something about the question irritates me. I'm tired. I drift back to sleep.</p>
      <p>A few minutes pass, then I hear it again.</p>
      <p>"What's two plus two?"</p>
      <p>
        The soft, feminine voice lacks emotion and the pronunciation is identical to the previous
        time she said it. It's a computer. A computer is hassling me. I'm even more irritated now.
      </p>
    </span>,
    // eslint-disable-next-line react/jsx-key
    <span className='pl-2'>
      <p>
        "Lrmln," I say. I'm surprised. I meant to say "Leave me alone"—a completely reasonable
        response in my opinion—but I failed to speak.
      </p>
      <p>"Incorrect," says the computer. "What's two plus two?"</p>
    </span>,
    // eslint-disable-next-line react/jsx-key
    <span className='pl-2'>
      <p>Time for an experiment. I'll try to say hello.</p>
      <p>"Hlllch?" I say.</p>
      <p>"Incorrect. What's two plus two?"</p>
      <p>
        What's going on? I want to find out, but I don't have much to work with. I can't see. I
        can't hear anything other than the computer. I can't even feel. No, that's not true. I feel
        something. I'm lying down. I'm on something soft. A bed.
      </p>
    </span>,
  ];

  // REFACTOR: add shot number
  function getContent(
    sceneStart: number,
    sceneEnd: number,
    sceneCurrent: number | undefined = undefined,
    includeHeader = true
  ): React.ReactNode {
    const content = [...contentScenes];
    if (sceneCurrent) content[sceneCurrent] = <SceneMarker>{content[sceneCurrent]}</SceneMarker>;

    const chapter = includeHeader ? [content[0]] : [];
    const pageContent = content.slice(sceneStart, sceneEnd + 1);

    return <>{chapter.concat(pageContent)}</>;
  }

  // REFACTOR: import content from a file
  const classIndent = 'inline-block indent-3.5';
  const classP = 'inline mb-[0.1rem]';
  const contentTyped = (
    <>
      <h3 className='my-2 text-lg'>Chapter 1</h3>
      <span ref={refTyped} id='typed-strings'>
        <span>
          <span className={classP}>
            <span className={classIndent}>What's</span> plus two?"
          </span>
          <br />

          <span className={classP}>
            <span className={classIndent}>Something</span> about the question irritates me. I'm
            tired. I drift back to sleep.
          </span>
          <br />

          <span className={classP}>
            <span className={classIndent}>A</span> few minutes pass, then I hear it again.
          </span>
          <br />

          <span className={classP}>
            <span className={classIndent}>"What's</span> two plus two?"
          </span>
          <br />

          <span className={classP}>
            <span className={classIndent}>The</span> soft, feminine voice lacks emotion and the
            pronunciation is identical to the previous time she said it. It's a computer. A computer
            is hassling me. I'm even more irritated now.
          </span>
        </span>
      </span>
      {useTypingAnimation && <span id='typed' className='' />}
    </>
  );

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    // HACk: typing animation is only supported on the first scene since typed.js doesn't support multiple <p> strings
    if (useTypingAnimation && sceneCurrent === 0) {
      const typed = new Typed('#typed', {
        fadeOut: true,
        loop: false,
        stringsElement: '#typed-strings',
        typeSpeed: typingSpeed,

        onComplete: (self) => {
          const cursor = document.querySelector('.typed-cursor') as HTMLElement;
          if (cursor) cursor.style.display = 'none';
          if (onTypingComplete !== undefined) onTypingComplete();
        },
      });

      return () => {
        typed.destroy();
      };
    }
  }, [onTypingComplete, sceneCurrent, typingSpeed, useTypingAnimation]);

  let content: React.ReactNode;
  switch (sceneCurrent) {
    case 0:
      if (useTypingAnimation) content = <div className='pl-2'>{contentTyped}</div>;
      if (!useTypingAnimation) content = getContent(sceneStart, sceneEnd);
      break;
    case 1:
    case 2:
    case 3:
      content = getContent(sceneStart, sceneEnd, sceneCurrent);
      break;
    default:
      content = <div />;
      console.error('scene not available');
  }

  return (
    <div className={`${styles['mgn-page']} flex flex-1 ${className}`}>
      <div className='flex-1 overflow-hidden bg-[#f8f1e3] text-left font-theano text-sm text-black'>
        {content}
      </div>
    </div>
  );
}
