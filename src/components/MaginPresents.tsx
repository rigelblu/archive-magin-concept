// Copyright rigélblu inc. All rights reserved.
import anime from 'animejs';
import { useEffect, useRef } from 'react';
import clsx, { cmpCls } from '@/lib/clsx-helpers';
import locale, { LocaleType } from '@/locales/en';
import { BookType } from '@/data/bookData';

const t: LocaleType = locale;

type Props = {
  book: BookType;
};

export default function MaginPresents({ book }: Props) {
  const bookTitleRef = useRef<HTMLSpanElement | null>(null);

  // TODO: move into a helper animation function, make speed a parameter
  useEffect(() => {
    const bookTitleEl = bookTitleRef.current;
    if (!bookTitleEl) console.error('MaginPresents: bookTitle is not assigned');
    else if (!bookTitleEl.textContent)
      console.error('MaginPresents: bookTitle.textContext is not assigned');
    else {
      bookTitleEl.innerHTML = bookTitleEl.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );
      anime
        .timeline({ loop: false })
        .add({
          targets: '.letter',
          opacity: [0, 1],
          easing: 'easeInOutQuad',
          duration: 1800,
          delay: (el, i) => 150 * (i + 1),
        })
        .add({
          opacity: 1,
          duration: 3000,
          easing: 'easeOutExpo',
          delay: 1000,
        });
    }
  }, []);

  return (
    // OPTIMIZE: adjust for each device screen size
    <div
      className={clsx(
        cmpCls(MaginPresents.name),
        'flex max-h-[32rem] flex-1 flex-col justify-end sm:max-h-[40rem]'
      )}
    >
      <div className='flex max-h-[60%] flex-1 flex-col justify-end'>
        <h2 className='p-1 text-center text-blue-rb-600 sm-min-h:text-lg md-min-h:text-xl'>
          {t.guide.maginPresents_opening}
          <br />
          <span className='animation text-black' ref={bookTitleRef}>
            {book}
          </span>
          <br />
        </h2>
      </div>
    </div>
  );
}
