// Copyright rigélblu inc. All rights reserved.
import clsx, { cmpCls } from '@/lib/clsx-helpers';
import { SceneRange } from '@/components/Scene/SceneContent';
import locale, { LocaleType } from '@/locales/en';
import Page from './Page';

const t: LocaleType = locale;

type Props = {
  sceneRange: SceneRange;
  className?: string;
  // REFACTOR: group into type
  animateTyping?: boolean;
  onTypingComplete?: () => void;
  styleTypedNonTypedSame?: boolean;
};

export default function Book({
  sceneRange,
  className = '',
  animateTyping = false,
  onTypingComplete = undefined,
  styleTypedNonTypedSame = false,
}: Props) {
  return (
    <div className={clsx(cmpCls(Book.name), 'flex w-full flex-1 flex-col', className)}>
      <h2 className='mb-2 text-center text-2xs text-gray-500'>{t.book.title}</h2>
      <Page
        sceneRange={sceneRange}
        animateTyping={animateTyping}
        onTypingComplete={onTypingComplete}
        styleTypedNonTypedSame={styleTypedNonTypedSame}
      />
    </div>
  );
}
