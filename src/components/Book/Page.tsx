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
    <h3 className='my-2 text-lg'>Chapter 1</h3>,
    <>
      <p>"What's two plus two?"</p>
      <p>Something about the question irritates me. I'm tired. I drift back to sleep.</p>
      <p>A few minutes pass, then I hear it again.</p>
      <p>"What's two plus two?"</p>
      <p>
        The soft, feminine voice lacks emotion and the pronunciation is identical to the previous
        time she said it. It's a computer. A computer is hassling me. I'm even more irritated now.
      </p>
    </>,
    <>
      <p>
        "Lrmln," I say. I'm surprised. I meant to say "Leave me alone"—a completely reasonable
        response in my opinion—but I failed to speak.
      </p>
      <p>"Incorrect," says the computer. "What's two plus two?"</p>
    </>,
    <>
      <p>Time for an experiment. I'll try to say hello.</p>
      <p>"Hlllch?" I say.</p>
      <p>"Incorrect. What's two plus two?"</p>
      <p>
        What's going on? I want to find out, but I don't have much to work with. I can't see. I
        can't hear anything other than the computer. I can't even feel. No, that's not true. I feel
        something. I'm lying down. I'm on something soft. A bed.
      </p>
    </>,
  ];

  // HACK: Had to use &nbsp instead of using css to text-indent due to limitation of typed.js, could to str replace too
  // OPTIMIZE: make typing animation work for any page content
  // OPTIMIZE: move content into data file / firebase
  const contentIntroTyped = (
    <span>
      &nbsp;What's two plus two?
      <br />
      &nbsp;&nbsp;&nbsp;Something about the question irritates me. I'm tired. I drift back to sleep.
      <br />
      &nbsp;&nbsp;&nbsp;A few minutes pass, then I hear it again.
      <br />
      &nbsp;&nbsp;&nbsp;"What's two plus two?"
      <br />
      &nbsp;&nbsp;&nbsp;The soft, feminine voice lacks emotion and the pronunciation is identical to
      the previous time she said it. It's a computer. A computer is hassling me. I'm even more
      irritated now.
    </span>
  );

  // REFACTOR: step 2, 3, etc into an array
  // REFACTOR: import content from a file
  const contentIntro = (
    <>
      {contentScenes[0]}

      <p>
        <span ref={refTyped}>
          {/* OPTIMIZE: create function to increase pause on every period, question, etc */}
          {/* FIXME: typed.js intermittenly prints ^{typedPuncationMarkPause} instead of pausing.
                    It also creates a jitter sometimes, where you can see "<" for a split second.
                    Removing from code until we find a fix. */}
          {/* HACK: typed.js is inserting style when dynimically removing id, preventing the text
                    from display when useTypingAnimation is false. */}
          {useTypingAnimation && <span id='typed-strings'>{contentIntroTyped}</span>}
          {!useTypingAnimation && contentIntroTyped}
        </span>
        {useTypingAnimation && <span id='typed' className='pl-2' />}
      </p>
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

  // REFACTOR: add shot number
  function getContent(sceneStart: number, sceneEnd: number, sceneCurrent: number): React.ReactNode {
    const content = [...contentScenes];
    content[sceneCurrent] = <SceneMarker className='pl-2'>{content[sceneCurrent]}</SceneMarker>;

    const chapter = [content[0]];
    const pageContent = content.slice(sceneStart, sceneEnd + 1);

    return <>{chapter.concat(pageContent)}</>;
  }

  let content: React.ReactNode;
  switch (sceneCurrent) {
    case 0:
      content = <div className='pl-2'>{contentIntro}</div>;
      break;
    case 1:
      content = getContent(sceneStart, sceneEnd, sceneCurrent);
      break;
    case 2:
      content = getContent(sceneStart, sceneEnd, sceneCurrent);
      break;
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
