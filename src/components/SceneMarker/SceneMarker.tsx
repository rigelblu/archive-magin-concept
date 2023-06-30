// Copyright rigélblu inc.
// All rights reserved.
import styles from './SceneMarker.module.scss';

type Props = {
  className?: string;
  children: React.ReactNode;
};

// REFACTOR: rename to SceneIndicator
export default function SceneMarker(props: Props) {
  const { children, className = '' } = props;

  return (
    <div
      className={`${styles['mgn-scenemarker']} pl-1 border-l-2 border-l-blue-rb-600 ${className}`}
    >
      {children}
    </div>
  );
}
