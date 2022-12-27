// Copyright rigélblu inc.
// All rights reserved.
import { Button } from 'primereact/button';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  // REFACTOR: turn this into a helper function
  const onClickTryMagin = async () => {
    let response;
    try {
      response = await router.push('/magin-preview');
    } catch {
      response = null;
      console.error('Page: Home, OnClickTryMagin: router.push failed to return promise');
    }
    return response;
  };

  return (
    <div className='flex flex-column h-screen v-screen justify-content-center align-items-center '>
      {/* Tagline */}
      <h1 className='text-center mb-8'>
        Have you <span className='mgn-text-blue-rb'>read a novel</span> <br /> and wondered,
        <br /> why can&apos;t I <span className='mgn-text-blue-rb'>remember</span>{' '}
        <br className='inline sm:hidden' />
        anything?
      </h1>

      <h2 className='text-center'>
        Learn to watch a novel <br />
        like a <span className='mgn-text-blue-rb'>Pixar</span> director
      </h2>

      {/* Try magin */}
      <Button
        label='Try magin'
        tooltip='Coming soon...'
        tooltipOptions={{ position: 'bottom' }}
        className='mgn-primary-cta'
        // REFACTOR: disable through eslintrc
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={onClickTryMagin}
      />
    </div>
  );
}
