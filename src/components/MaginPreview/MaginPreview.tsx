// Copyright rigélblu inc.
// All rights reserved.
import Book from '@/components/Book/Book';
import Film from '@/components/Film/Film';
import Guide from '@/components/Guide/Guide';

export default function MaginPreview() {
  return (
    // REFACTOR: convert into component css class
    <div className='flex w-screen h-screen p-3 justify-content-center align-items-center'>
      <div className='w-full h-full sm:max-w-24rem sm:max-h-40rem mgn-debug-outline-red'>
        <div>
          <Book />
          <Guide />
          <Film />
        </div>
      </div>
    </div>
  );
}
