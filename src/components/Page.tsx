// Copyright rigélblu inc. All rights reserved.
import { joinClassesWithComponent } from '@rigelblu/rb-base-packages-join-classes';
import SceneContent, { SceneRange } from '@/components/Scene/SceneContent';

type PageProps = {
  sceneRange: SceneRange;
  className?: string;
  animateTyping?: boolean;
  onTypingComplete?: () => void;
  styleTypedNonTypedSame: boolean;
};

export default function Page({
  sceneRange,
  className = '',
  animateTyping = false,
  onTypingComplete = undefined,
  styleTypedNonTypedSame,
}: PageProps) {
  return (
    <div className={joinClassesWithComponent(Page.name, 'flex w-full flex-1 flex-col', className)}>
      <SceneContent
        sceneRange={sceneRange}
        styleTypedNonTypedSame={styleTypedNonTypedSame}
        animateTyping={animateTyping}
        onTypingComplete={onTypingComplete}
      />
    </div>
  );
}
