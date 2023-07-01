// Copyright rigélblu inc.
// All rights reserved.
import styles from './SceneMarker.module.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
};

// REFACTOR: rename to SceneIndicator
export default function SceneMarker(props: Props) {
  const { children, className = '' } = props;

  return <div className={`${styles['mgn-scenemarker']} relative ${className}`}>{children}</div>;
}
