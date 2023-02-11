// Copyright rigélblu inc.
// All rights reserved.
import Scene from '@/components/Scene/Scene';
import styles from './Page.module.scss';

interface Props {
  className?: string;
  maginPreviewStep?: number | null;
}

export default function Page(props: Props) {
  const { className = '', maginPreviewStep = null } = props;

  // REFACTOR: step 2, 3, etc into an array
  // REFACTOR: import content from a file
  const contentMaginPreviewStep2 = (
    <Scene sceneNum={1} className='pl-2'>
      <h2 className='mb-4 font-bold'>Chapter 1</h2>
      <p>“What’s two plus two?”</p>
      <p>Something about the question irritates me. I’m tired. I drift back to sleep.</p>
    </Scene>
  );

  const contentMaginPreviewStep3 = (
    <>
      <Scene sceneNum={1} className='pl-2'>
        <p>“What’s two plus two?”</p>
        <p>Something about the question irritates me. I’m tired. I drift back to sleep.</p>
      </Scene>
      <Scene sceneNum={2} className='pl-2'>
        <p>A few minutes pass, then I hear it again.</p>
        <p>“What’s two plus two?”</p>
        <p>
          The soft, feminine voice lacks emotion and the pronunciation is identical to the previous
          time she said it. It’s a computer. A computer is hassling me. I’m even more irritated now.
        </p>
        <p>
          “Lrmln,” I say. I’m surprised. I meant to say “Leave me alone”—a completely reasonable
          response in my opinion—but I failed to speak.
        </p>
        <p>“Incorrect,” says the computer. “What’s two plus two?”</p>
      </Scene>
    </>
  );

  const projectHailMary = (
    <>
      {/* REFACTOR: accept the content from a parameter */}
      <p>Chapter 1</p>
      <Scene sceneNum={1} className='pl-2'>
        <p>“What’s two plus two?”</p>
        <p>Something about the question irritates me. I’m tired. I drift back to sleep.</p>
      </Scene>

      <Scene sceneNum={2} className='pl-2'>
        <p>A few minutes pass, then I hear it again.</p>
        <p>“What’s two plus two?”</p>
        <p>
          The soft, feminine voice lacks emotion and the pronunciation is identical to the previous
          time she said it. It’s a computer. A computer is hassling me. I’m even more irritated now.
        </p>
        <p>
          “Lrmln,” I say. I’m surprised. I meant to say “Leave me alone”—a completely reasonable
          response in my opinion—but I failed to speak.
        </p>
        <p>“Incorrect,” says the computer. “What’s two plus two?”</p>
      </Scene>

      <Scene sceneNum={3} className='pl-2'>
        <p>Time for an experiment. I’ll try to say hello.</p>
        <p>“Hlllch?” I say.</p>
        <p>“Incorrect. What’s two plus two?”</p>
        <p>
          What’s going on? I want to find out, but I don’t have much to work with. I can’t see. I
          can’t hear anything other than the computer. I can’t even feel. No, that’s not true. I
          feel something. I’m lying down. I’m on something soft. A bed.
        </p>
      </Scene>
    </>
  );

  let content: React.ReactElement;
  switch (maginPreviewStep) {
    case 2:
      content = contentMaginPreviewStep2;
      break;
    case 3:
      content = contentMaginPreviewStep3;
      break;
    default:
      content = projectHailMary;
  }

  return (
    <div className={`${styles['mgn-page']} flex flex-1 ${className}`}>
      <div className='w-full flex-1 overflow-hidden bg-[#f8f1e3] text-left font-theano text-sm text-black'>
        {content}
      </div>
    </div>
  );
}
