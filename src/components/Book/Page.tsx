// Copyright rigélblu inc.
// All rights reserved.
import { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import SceneMarker from '@/components/SceneMarker/SceneMarker';

interface Props {
  className?: string;
  maginPreviewStep?: number | null;
  onTypingComplete?: () => void;
  useTypingAnimation?: boolean;
}

export default function Page(props: Props) {
  const {
    className = '',
    maginPreviewStep = null,
    onTypingComplete = undefined,
    useTypingAnimation = false,
  } = props;
  const refTyped = useRef(null);
  const typeSpeed = 30;

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    if (useTypingAnimation && maginPreviewStep === 2) {
      const typed = new Typed('#typed', {
        fadeOut: true,
        loop: false,
        stringsElement: '#typed-strings',
        typeSpeed,

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
  }, [maginPreviewStep, onTypingComplete, useTypingAnimation]);

  // HACK: Had to use &nbsp instead of using css to text-indent due to limitation of typed.js
  // OPTIMIZE: make typing animation work for any page content
  const typedText = (
    <span>
      What's two plus two?
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
  const contentMaginPreviewStep2 = (
    <SceneMarker sceneNum={1} className='pl-2'>
      <h3 className='my-2 text-lg'>Chapter 1</h3>

      <p>
        <span ref={refTyped}>
          {/* OPTIMIZE: create function to increase pause on every period, question, etc */}
          {/* FIXME: typed.js intermittenly prints ^{typedPuncationMarkPause} instead of pausing.
                     It also creates a jitter sometimes, where you can see "<" for a split second.
                     Removing from code until we find a fix. */}
          {/* HACK: typed.js is inserting style when dynimically removing id, preventing the text
                    from display when useTypingAnimation is false. */}
          {useTypingAnimation && <span id='typed-strings'>{typedText}</span>}
          {!useTypingAnimation && <span>{typedText}</span>}
        </span>
        {useTypingAnimation && <span id='typed' />}
      </p>
    </SceneMarker>
  );

  const contentMaginPreviewStep3 = (
    // REFACTOR: add shot number
    <>
      <SceneMarker sceneNum={1} className='pl-2'>
        <p>"What's two plus two?"</p>
        <p>Something about the question irritates me. I'm tired. I drift back to sleep.</p>
      </SceneMarker>
      <SceneMarker sceneNum={2} className='pl-2'>
        <p>A few minutes pass, then I hear it again.</p>
        <p>"What's two plus two?"</p>
        <p>
          The soft, feminine voice lacks emotion and the pronunciation is identical to the previous
          time she said it. It's a computer. A computer is hassling me. I'm even more irritated now.
        </p>
        <p>
          "Lrmln," I say. I'm surprised. I meant to say "Leave me alone"—a completely reasonable
          response in my opinion—but I failed to speak.
        </p>
        <p>"Incorrect," says the computer. "What's two plus two?"</p>
      </SceneMarker>
    </>
  );

  const projectHailMary = (
    <>
      {/* REFACTOR: accept the content from a parameter */}
      <p>Chapter 1</p>
      <SceneMarker sceneNum={1} className='pl-2'>
        <p>"What's two plus two?"</p>
        <p>Something about the question irritates me. I'm tired. I drift back to sleep.</p>
      </SceneMarker>

      <SceneMarker sceneNum={2} className='pl-2'>
        <p>A few minutes pass, then I hear it again.</p>
        <p>"What's two plus two?"</p>
        <p>
          The soft, feminine voice lacks emotion and the pronunciation is identical to the previous
          time she said it. It's a computer. A computer is hassling me. I'm even more irritated now.
        </p>
        <p>
          "Lrmln," I say. I'm surprised. I meant to say "Leave me alone"—a completely reasonable
          response in my opinion—but I failed to speak.
        </p>
        <p>"Incorrect," says the computer. "What's two plus two?"</p>
      </SceneMarker>

      <SceneMarker sceneNum={3} className='pl-2'>
        <p>Time for an experiment. I'll try to say hello.</p>
        <p>"Hlllch?" I say.</p>
        <p>"Incorrect. What's two plus two?"</p>
        <p>
          What's going on? I want to find out, but I don't have much to work with. I can't see. I
          can't hear anything other than the computer. I can't even feel. No, that's not true. I
          feel something. I'm lying down. I'm on something soft. A bed.
        </p>
      </SceneMarker>
    </>
  );

  let content: React.ReactElement;
  switch (maginPreviewStep) {
    case 2:
      content = contentMaginPreviewStep2;
      break;
    case 3:
      content = contentMaginPreviewStep3;
      break;
    default:
      content = projectHailMary;
  }

  return (
    <div className={`mgn-page flex flex-1 ${className}`}>
      <div className='flex-1 overflow-hidden bg-[#f8f1e3] text-left font-theano text-sm text-black'>
        {content}
      </div>
    </div>
  );
}
