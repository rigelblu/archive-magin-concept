// Copyright rigélblu inc.
// All rights reserved.
import { Button } from 'primereact/button';
import { useRouter } from 'next/router';
import IconGithub from '@/assets/common/icons/github-mark.svg';

export default function Home() {
  const router = useRouter();
  // REFACTOR: load value from json file
  const featureFlagOnClick = true;

  return (
    <div className='flex flex-column h-screen v-screen justify-content-center align-items-center'>
      <div className='mgn-home flex flex-column h-full v-full justify-content-center align-items-center'>
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
          // tooltip='Coming soon...'
          // tooltipOptions={{ position: 'bottom' }}
          className='mgn-cta-primary'
          // REFACTOR: disable through eslintrc
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={() => {
            if (featureFlagOnClick) router.push('/try-magin/1');
          }}
        />
      </div>

      {/* Footer */}
      <div>
        {/* FIXME: remove extra white space below icon */}
        <Button
          aria-label='magin on GitHub'
          className='mgn-bg-github text-white border-none m-0 mb-1 p-0 pl-1'
          icon={
            <span className='surface-100 p-button-icon-right w-2rem p-1 pb-0 m-0 ml-1'>
              <IconGithub />
            </span>
          }
          iconPos='right'
          label='magin on GitHub'
          onClick={() => {
            window.location.href = 'https://github.com/rigelblu/magin-concept';
          }}
        />
      </div>
    </div>
  );
}
