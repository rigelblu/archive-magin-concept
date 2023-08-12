// Copyright rigélblu inc. All rigts reserve
import anime from 'animejs';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { CTARole } from '@/components/BaseComponents';
import GuideMessage from '@/components/GuideMessage';
import NavBar from '@/components/NavBar';
import { AppLayout } from '@/layouts/Layout';
import locale, { LocaleType } from '@/locales/en';

const t: LocaleType = locale;

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
    <AppLayout canvasClassName='bg-black' mainClassName='mgn-try-magin bg-white'>
      {/* REFACTOR: convert into component, accept 4 children elements */}
      <div className='flex h-screen flex-col items-center justify-center bg-neutral-950'>
        <div className='mgn-step flex max-h-[48rem] w-full flex-1 flex-col justify-between bg-ivory-100 p-2 sm:max-w-[25rem]'>
          {/* OPTIMIZE: adjust for each device screen */}
          <div className='mgn-story flex max-h-[32rem] flex-1 flex-col justify-end sm:max-h-[40rem]'>
            <div className='mgn-step-top flex max-h-[60%] flex-1 flex-col justify-end'>
              {/* REFACTOR: into top, middle, button div elements, put the guide message into the bottom */}
              <GuideMessage className=' mx-auto'>
                <h2 className='text-blue-rb-600 sm-min-h:text-lg md-min-h:text-xl'>
                  {t.guide.tryMagin1_maginPresents}
                  <br />
                  <span className='animation text-black' ref={bookTitleRef}>
                    {t.book.title}
                  </span>
                  <br />
                </h2>
              </GuideMessage>
            </div>
          </div>

          {/* REFACTOR: use next layout */}
          <NavBar
            className='mt-2'
            items={[
              {
                id: t.navigation.returnHome,
                label: t.navigation.returnHome,
                ctaRole: CTARole.Secondary,
                onClick: () => {
                  router.push('/');
                },
                className: 'mgn-cta-secondary',
              },
              {
                id: t.guide.tryMagin1_watchNovel,
                label: t.guide.tryMagin1_watchNovel,
                ctaRole: CTARole.Primary,
                onClick: () => {
                  router.push('/try-magin/2');
                },
                focusEffect: true,
              },
            ]}
          />
        </div>
      </div>
    </AppLayout>
  );
}
