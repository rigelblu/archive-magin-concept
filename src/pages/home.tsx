// Copyright rigélblu inc.
// All rights reserved.
import { Button } from 'primereact/button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import IconGithub from '@/assets/common/icons/github-mark.svg';

export default function Home() {
  const router = useRouter();
  // REFACTOR: load value from json file
  const featureFlagOnClick = true;

  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      {/* Header */}
      <Link href='/' className='flex w-full flex-none content-start p-2 font-bold text-blue-rb'>
        magin.blue
      </Link>

      <div className='mgn-home flex flex-1 flex-col items-center justify-center'>
        {/* Tagline */}
        <h1 className='mb-8 text-center'>
          Have you <span className='text-blue-rb'>read a novel</span> <br /> and wondered,
          <br /> why can&apos;t I <span className='text-blue-rb'>remember</span>{' '}
          <br className='inline sm:hidden' />
          anything?
        </h1>
        <h2 className='text-center'>
          Learn to watch a novel <br />
          like a <span className='text-blue-rb'>Pixar</span>
          <span className='font-normal'>&#8482;</span> director
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

      {/* Github */}
      {/* FIXME: remove extra white space below icon */}
      <Button
        aria-label='magin on GitHub'
        className='mgn-bg-github m-0 mb-1 w-max flex-none border-none !bg-[#161b22] p-0 pl-1 text-white'
        icon={
          <span className='p-button-icon-right m-0 ml-1 w-8 bg-[#F5F5F5] p-1 pb-0'>
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
  );
}
