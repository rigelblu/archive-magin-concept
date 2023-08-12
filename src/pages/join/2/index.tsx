// Copyright rigélblu inc. All rigts reserve
import { joinClassesWithComponent } from '@rigelblu/rb-base-packages-join-classes';
import { useRouter } from 'next/router';
import NavBar from '@/components/NavBar';
import { AppLayout } from '@/layouts/Layout';
import locale, { LocaleType } from '@/locales/en';
import { CTARole } from '@/components/BaseComponents';

const t: LocaleType = locale;

export default function JoinMagin() {
  const router = useRouter();

  return (
    <AppLayout canvasClassName='bg-black' mainClassName='mgn-try-magin bg-white'>
      {/* REFACTOR: convert into component, accept 4 children elements */}
      <div
        className={joinClassesWithComponent(
          JoinMagin.name,
          'flex h-screen flex-col items-center justify-center bg-neutral-950'
        )}
      >
        {/* HACK: have to use fixed rem for max height and width due to mobile browsers */}
        <div className='mgn-step flex max-h-[48rem] w-full flex-1 flex-col justify-between bg-ivory-100 p-2 sm:max-w-[25rem]'>
          <div className='mgn-story flex w-full flex-1 flex-col justify-between'>
            {/* HACK: have to use fixed rem for height due to mobile browsers */}
            <div className='flex flex-1 items-center text-center'>
              <div className='w-full'>
                <h2
                  className='pb-8'
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{ __html: t.join.step2_header }}
                />
                <div className='mx-5 mt-3 flex justify-center'>
                  <div
                    className='text-left text-sm'
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: t.join.step2_body }}
                  />
                </div>
              </div>
            </div>

            {/* REFACTOR: use next layout */}
            <NavBar
              items={[
                {
                  id: t.navigation.returnHome,
                  label: t.navigation.returnHome,
                  ctaRole: CTARole.Primary,
                  onClick: () => {
                    router.push('/');
                  },
                  className: 'mgn-cta-secondary',
                },
              ]}
            />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
