// Copyright rigélblu inc.
// All rigts reserve
import MaginGuide from '@/src/containers/MaginGuide/MaginGuide';

export default function MarginPreview() {
  return (
    <div className='mgn-try-magin'>
      {/* REFACTOR: convert into component css class */}
      <div className='mgn-preview flex w-screen h-screen p-3 justify-content-center align-items-center'>
        <div className='w-full h-full sm:max-w-24rem sm:max-h-40rem'>
          <div className='h-full flex flex-column justify-content-between'>
            <MaginGuide />
          </div>
        </div>
      </div>{' '}
    </div>
  );
}
