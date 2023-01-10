// Copyright rigélblu inc.
// All rights reserved.
import MaginGuide from '@/containers/MaginGuide/MaginGuide';

export default function MaginPreview() {
  return (
    // REFACTOR: convert into component css class
    <div className='mgn-preview flex w-screen h-screen p-3 justify-content-center align-items-center'>
      <div className='w-full h-full sm:max-w-24rem sm:max-h-40rem'>
        <div className='h-full flex flex-column justify-content-between'>
          <MaginGuide />
        </div>
      </div>
    </div>
  );
}
