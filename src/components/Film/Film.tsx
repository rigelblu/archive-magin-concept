// Copyright rigélblu inc.
// All rights reserved.
import Scene from '@/components/Scene/Scene';
import Storyboard from './Storyboard/Storyboard';

interface Props {
  className?: string;
}

export default function Film(props: Props) {
  const { className = '' } = props;

  return (
    // REFACTOR: move px-2 to global, align with book
    <div className={`mgn-film ${className} flex px-2`}>
      <Scene sceneNum={1}>scene</Scene>
      <Storyboard />
    </div>
  );
}
