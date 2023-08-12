// Copyright rigélblu inc. All rights reserved.
import { joinClassesWithComponent } from '@rigelblu/rb-base-packages-join-classes';

type Props = {
  children: React.ReactNode;
  className?: string;
};

// REFACTOR: rename to SceneIndicator
export default function SceneMarker(props: Props) {
  const { children, className = '' } = props;

  return (
    <div
      className={joinClassesWithComponent(
        SceneMarker.name,
        'relative flex flex-1 flex-col border-l-2 border-l-blue-rb-600',
        className
      )}
    >
      {/* FIXME: image is center-aligned on safari, but border is on far left */}
      {/* FIXME: iamge is left-aligned on chrome */}
      {/* FIXME: for all case, image should be center-aligned, with left border right beside */}
      {children}
    </div>
  );
}
