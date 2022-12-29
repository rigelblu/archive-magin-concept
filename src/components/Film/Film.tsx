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
    <div className={`flex ${className}`}>
      <Scene />
      <Storyboard />
    </div>
  );
}
