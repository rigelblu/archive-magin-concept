// Copyright rigélblu inc.
// All rights reserved.
import Scene from '@/components/Scene/Scene';

interface Props {
  className?: string;
}

export default function Reader(props: Props) {
  const { className = '' } = props;

  return (
    <div className={`mgn-reader flex ${className}`}>
      <Scene />
      <div className='w-full'>Reader</div>
    </div>
  );
}
