// Copyright rigélblu inc.
// All rights reserved.
import Scene from '@/components/Scene/Scene';
import styles from './Reader.module.scss';

interface Props {
  className?: string;
}

export default function Reader(props: Props) {
  const { className = '' } = props;

  return (
    <div className={`${styles['mgn-reader']} ${className} flex`}>
      <div className='w-full h-15rem overflow-hidden mgn-font-theano-old-style text-sm'>
        {/* REFACTOR: accept the content from a parameter */}
        <Scene sceneNum={1}>
          <p>“What’s two plus two?”</p>
          <p>Something about the question irritates me. I’m tired. I drift back to sleep.</p>
        </Scene>

        <Scene sceneNum={2}>
          <p>A few minutes pass, then I hear it again.</p>
          <p>“What’s two plus two?”</p>
          <p>
            The soft, feminine voice lacks emotion and the pronunciation is identical to the
            previous time she said it. It’s a computer. A computer is hassling me. I’m even more
            irritated now.
          </p>
          <p>
            “Lrmln,” I say. I’m surprised. I meant to say “Leave me alone”—a completely reasonable
            response in my opinion—but I failed to speak.
          </p>
          <p>“Incorrect,” says the computer. “What’s two plus two?”</p>
        </Scene>

        <Scene sceneNum={3}>
          <p>Time for an experiment. I’ll try to say hello.</p>
          <p>“Hlllch?” I say.</p>
          <p>“Incorrect. What’s two plus two?”</p>
          <p>
            What’s going on? I want to find out, but I don’t have much to work with. I can’t see. I
            can’t hear anything other than the computer. I can’t even feel. No, that’s not true. I
            feel something. I’m lying down. I’m on something soft. A bed.
          </p>
        </Scene>
      </div>
    </div>
  );
}
