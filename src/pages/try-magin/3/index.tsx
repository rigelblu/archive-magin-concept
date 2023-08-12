// Copyright rigélblu inc. All rigts reserve
import { joinClassesWithComponent } from '@rigelblu/rb-base-packages-join-classes';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { CTARole } from '@/components/BaseComponents';
import Book from '@/components/Book/Book';
import Film from '@/components/Film/Film';
import GuideMessage from '@/components/GuideMessage';
import NavBar from '@/components/NavBar';
import { AppLayout } from '@/layouts/Layout';
import locale, { LocaleType } from '@/locales/en';

const t: LocaleType = locale;

export default function MaginPreview() {
  const router = useRouter();
  const [scene, setScene] = useState(2);
  const scenes = { start: 1, end: 2, current: scene };

  return (
    <AppLayout canvasClassName='bg-black' mainClassName='mgn-try-magin bg-white'>
      {/* REFACTOR: convert into component, accept 4 children elements */}
      <div
        className={joinClassesWithComponent(
          MaginPreview.name,
          'flex h-screen flex-col items-center justify-center bg-neutral-950'
        )}
      >
        {/* HACK: have to use fixed rem for max height and width due to mobile browsers */}
        <div className='mgn-step flex max-h-[48rem] w-full flex-1 flex-col justify-between bg-ivory-100 p-2 sm:max-w-[25rem]'>
          <div className='mgn-story flex w-full flex-1 flex-col justify-between'>
            {/* HACK: have to use fixed rem for height due to mobile browsers */}
            <div className='mgn-step-top flex max-h-[60%] flex-1 flex-col justify-start overflow-y-auto iphone-se-max-h:max-h-[57%]'>
              <Book sceneRange={scenes} />
            </div>

            <div className='mgn-step-middle flex flex-col items-center justify-center pt-1'>
              {/* TODO: show on a 5 second delay */}
              {/* OPTIMIZE: figure out how to allow \n in the string and convert in to <br /> */}
              <GuideMessage
                className='flex items-center font-bold'
                messages={[...t.guide.tryMagin3a_guidedMessages]}
              />
            </div>

            <div className='mgn-step-bottom flex max-h-[30%] flex-1 flex-col items-end'>
              <div className='relative flex w-full flex-1 animate-fadeIn flex-col items-center'>
                <Film
                  onNext={() => {
                    setScene(scene + 1);
                  }}
                  onPrev={() => {
                    setScene(scene - 1);
                  }}
                  scene={scene}
                />
              </div>
            </div>
          </div>

          {/* HACK: temporarily disable */}
          <NavBar
            className='mt-2'
            items={[
              {
                id: t.navigation.back,
                label: t.navigation.back,
                ctaRole: CTARole.Secondary,
                onClick: () => {
                  router.push('/try-magin/2');
                },
              },
              {
                id: t.navigation.next,
                label: t.navigation.next,
                ctaRole: CTARole.Primary,
                onClick: () => {
                  router.push('/join/1');
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
