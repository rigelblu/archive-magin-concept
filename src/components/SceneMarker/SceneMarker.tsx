// Copyright rigélblu inc.
// All rights reserved.
import styles from './SceneMarker.module.scss';

interface Props {
  children: React.ReactNode;
  sceneNum: number;
  className?: string;
}

// REFACTOR: rename to SceneIndicator
export default function SceneMarker(props: Props) {
  const { children, sceneNum, className = '' } = props;
  console.log('sceneNum', JSON.stringify(sceneNum, null, 2));

  // OPTIMIZE: keep track how many scenes there are with state, don't make a requirement to pass in
  let sceneColor = '';
  switch (sceneNum) {
    case 1:
      sceneColor = styles['scene-blue'];
      break;
    case 2:
      sceneColor = styles['scene-orange'];
      break;
    case 3:
      sceneColor = styles['scene-green'];
      break;
    default:
      sceneColor = styles['scene-black'];
  }

  // TODO: make scene accessible
  return (
    <div className={`${styles['mgn-scenemarker']} my-1 border-left-2 ${sceneColor} ${className}`}>
      {children}
    </div>
  );
}
