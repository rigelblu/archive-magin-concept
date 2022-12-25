// Copyright rigélblu inc.
// All rights reserved.
import { Button } from 'primereact/button';

export default function Home() {
  return (
    <div className='flex flex-column h-screen v-screen justify-content-center align-items-center '>
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
      <Button
        label='Try magin'
        tooltip='Coming soon...'
        tooltipOptions={{ position: 'bottom' }}
        className='mgn-primary-cta'
      />
    </div>
  );
}
