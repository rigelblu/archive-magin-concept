// Copyright rigélblu inc.
// All rights reserved.
import Book from '@/components/Book/Book';
import Film from '@/components/Film/Film';
import Guide from '@/components/Guide/Guide';
import Navigation from '@/components/Navigation/Navigation';

export default function MaginGuide() {
  return (
    <div>
      <div>
        <Guide message='Guide' />
        <Book />
        <Guide message='Guide' />
        <Film />
      </div>
      <Navigation />
    </div>
  );
}
