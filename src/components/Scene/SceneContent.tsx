/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-use-before-define */
import { joinClassesWithComponent } from '@rigelblu/rb-base-packages-join-classes';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Button } from '@/components/BaseComponents';
import SceneMarker from '@/components/Scene/SceneMarker';
import settings, { Mode } from '@/config/settings';
import bookData, { Book, SceneType } from '@/data/bookData';
import locale, { LocaleType } from '@/locales/en';
import styles from '@/components/Scene/SceneContent.module.scss';

export type SceneRange = {
  start: number;
  end: number;
  current: number;
};

const t: LocaleType = locale;

type Props = {
  sceneRange: SceneRange;
  styleTypedNonTypedSame: boolean;
  animateTyping?: boolean;
  onTypingComplete?: () => void;
  className?: string;
};

// ----------
// SkipAnimationProps
type SkipAnimationProps = {
  className?: string;
  onSkipAnimation: () => void;
};

function SkipAnimation(props: SkipAnimationProps) {
  const { className = '', onSkipAnimation } = props;

  return (
    <Button
      onClick={onSkipAnimation}
      className={joinClassesWithComponent(
        SkipAnimation.name,
        'my-1 !bg-ivory-300 !text-gray-600',
        className
      )}
    >
      {t.guide.tryMagin_skipAnimation}
    </Button>
  );
}

// ----------
// SceneContent
// OPTIMIZE: add shot number
export default function SceneContent({
  sceneRange,
  styleTypedNonTypedSame,
  animateTyping = false,
  onTypingComplete = undefined,
  className = '',
}: Props) {
  const typingSpeed = settings.mode !== Mode.Debug ? settings.page.typingSpeed : 0;

  const refSpanTypedStrings = useRef<HTMLSpanElement | null>(null);
  const refSpanTyped = useRef<HTMLSpanElement | null>(null);
  const refTyped = useRef<Typed | null>(null);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    // HACk: typing animation is only supported on the first scene since typed.js doesn't support multiple <p> strings
    if (
      !animateTyping ||
      !refSpanTyped ||
      !refSpanTyped.current ||
      !refSpanTypedStrings ||
      !refSpanTypedStrings.current
    )
      return;

    refTyped.current = new Typed(refSpanTyped.current, {
      fadeOut: true,
      loop: false,
      stringsElement: refSpanTypedStrings.current,
      typeSpeed: typingSpeed,

      onComplete: (self) => {
        const cursor = document.querySelector('.typed-cursor') as HTMLElement;
        if (cursor) cursor.style.display = 'none';
        if (onTypingComplete !== undefined) onTypingComplete();
      },
    });

    // TODO: do later
    // eslint-disable-next-line consistent-return
    return () => {
      refTyped.current?.destroy();
    };
  }, [onTypingComplete, sceneRange, typingSpeed, animateTyping]);

  // FEAT: https://linear.app/rigelblu/issue/MGN-173/step-1-or-see-a-smooth-transition-when-i-click-skip-animation
  const onSkipAnimation = () => {
    refTyped.current?.stop();
    if (onTypingComplete) onTypingComplete();
  };

  const scenesSlice = bookData[Book.ProjectHailMary].slice(sceneRange.start - 1, sceneRange.end);
  let content;
  switch (animateTyping) {
    case true:
      content = (
        <div className='content-text-typed pl-2'>
          <h3 className='my-2'>Chapter 1</h3>
          <span ref={refSpanTypedStrings}>{sceneDataToTypedStrings(scenesSlice, sceneRange)}</span>
          <span ref={refSpanTyped} />
          <SkipAnimation
            className='mgn-cta-secondary ml-auto mt-8 block text-center'
            onSkipAnimation={onSkipAnimation}
          />
        </div>
      );
      break;
    case false:
    default:
      content = sceneDataToJSX(scenesSlice, sceneRange);
  }

  const typingNotUsed = !styleTypedNonTypedSame ? 'typing-not-used' : 'typing-used';

  return (
    //  TODO: add support to not switch to lower case
    <div className={`${styles['mgn-scenecontent']} content-text ${className}`}>
      <div className={`mgn-content w-full overflow-y-auto bg-ivory-200 ${typingNotUsed}`}>
        {content}
      </div>
    </div>
  );
}

// ----------
// Helper functions
function generateParagraphs(scene: SceneType, isCurrentScene: boolean, isTypedString: boolean) {
  return scene.content.map((paragraph, pIndex) => {
    const borderClass = !isCurrentScene ? 'border-l-2 border-transparent' : '';

    if (isTypedString) {
      const words = paragraph.split(' ');
      const leadingWord = words[0];
      const remainingParagraph = words.slice(1).join(' ');

      return (
        // eslint-disable-next-line react/no-array-index-key
        <span key={`${scene.sceneMeta.scene}.${pIndex}`} className='content-text-typed inline'>
          <span
            // eslint-disable-next-line react/no-array-index-key
            key={`${scene.sceneMeta.scene}.${pIndex}`}
            className={`inline-block indent-3.5 ${borderClass}`}
          >
            {leadingWord}&nbsp;
          </span>
          {remainingParagraph}
          <br />
        </span>
      );
    }

    return (
      // eslint-disable-next-line react/no-array-index-key
      <p key={`${scene.sceneMeta.scene}.${pIndex}`} className={`pl-2 ${borderClass}`}>
        {paragraph}
      </p>
    );
  });
}

function mapScenes(
  sceneData: SceneType[],
  sceneRange: SceneRange,
  isTypedString = false,
  animateTyping = false
) {
  return sceneData.map((scene, index) => {
    const isCurrentScene = sceneRange.current ? sceneRange.current - 1 === index : false;
    let paragraphs = generateParagraphs(scene, isCurrentScene, isTypedString);

    if (isCurrentScene && !animateTyping)
      paragraphs = [<SceneMarker key='scene-marker'>{paragraphs}</SceneMarker>];

    const title =
      !isTypedString && scene.title ? (
        <h3 key='header' className='content-text my-2 pl-2'>
          {scene.title}
        </h3>
      ) : null;

    return (
      <>
        {title}
        <section key={scene.sceneMeta.scene} className='content-text'>
          {paragraphs}
        </section>
      </>
    );
  });
}

function sceneDataToTypedStrings(sceneData: SceneType[], sceneRange: SceneRange) {
  return mapScenes(sceneData, sceneRange, true, true);
}

function sceneDataToJSX(sceneData: SceneType[], sceneRange: SceneRange) {
  return mapScenes(sceneData, sceneRange);
}
