// Copyright rigélblu inc.
// All rigts reserve
import anime from 'animejs';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

import GuideMessage from '@/components/GuideMessage';
import Navigation from '@/components/Navigation/Navigation';
import MainLayout from '@/layouts/MainLayout';

// REFACTOR: read based on language
import locale from '@/locales/en.json';
import styles from '../try-magin.module.scss';

export default function MarginPreview() {
  const router = useRouter();
  const bookTitleRef = useRef<HTMLSpanElement | null>(null);

  // REFACTOR: move into a helper function
  useEffect(() => {
    const bookTitle = bookTitleRef.current;
    if (!bookTitle) throw Error('bookTitle is not assigned');
    else if (!bookTitle.textContent) throw Error('bookTitle.textContext is not assigned');

    // TODO: shorten duration time
    bookTitle.innerHTML = bookTitle.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
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
  }, []);

  return (
    <MainLayout canvasClassName='bg-black' className='mgn-try-magin bg-white' layoutKind='app'>
      {/* REFACTOR: convert into component, accept 4 children elements */}
      <div
        className={`${styles['mgn-preview']} flex h-screen flex-col items-center justify-center bg-neutral-950 `}
      >
        <div className='mgn-step flex w-full flex-1 flex-col justify-between bg-yellow-rb-200 p-2 '>
          {/* REFACTOR: into top, middle, button div elements, put the guide message into the bottom */}
          <GuideMessage className='flex max-h-[32rem] flex-1 items-end justify-center sm:max-h-[40rem]'>
            <h2 className='text-blue-rb-600'>
              {locale.guide.tryMagin1_maginPresents}
              <br />
              <span className='animation text-black' ref={bookTitleRef}>
                {locale.book.title}
              </span>
              <br />
            </h2>
          </GuideMessage>

          {/* REFACTOR: use next layout */}
          <Navigation
            className='mt-2'
            left={{
              className: 'mgn-cta-secondary',
              label: locale.navigation.returnHome,
              onClick: () => {
                router.push('/');
              },
            }}
            right={{
              className: 'mgn-cta-primary',
              label: locale.guide.tryMagin1_watchNovel,
              onClick: () => {
                router.push('/try-magin/2');
              },
            }}
          />
        </div>
      </div>
    </MainLayout>
  );
}
