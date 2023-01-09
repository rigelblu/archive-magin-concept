// Copyright rigélblu inc.
// All rights reserved.
import Book from '@/components/Book/Book';
import Film from '@/components/Film/Film';
import GuideMessage from '@/containers/MaginGuide/GuideMessage';
import Navigation from '@/components/Navigation/Navigation';

export default function MaginGuide() {
  return (
    <div>
      <div>
        <GuideMessage>Guide </GuideMessage>
        <Book />
        <GuideMessage>Guide </GuideMessage>
        <Film />
      </div>
      <Navigation />
    </div>
  );
}
