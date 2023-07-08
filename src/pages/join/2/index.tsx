// Copyright rigélblu inc.
// All rigts reserve
import { useRouter } from 'next/router';
import Navigation from '@/components/Navigation/Navigation';
import MainLayout from '@/layouts/MainLayout';
import locale from '@/locales/en'; // REFACTOR: read based on language

export default function JoinMagin() {
  const router = useRouter();

  return (
    <MainLayout canvasClassName='bg-black' className='mgn-try-magin bg-white' layoutKind='app'>
      {/* REFACTOR: convert into component, accept 4 children elements */}
      <div className='mgn-preview flex h-screen flex-col items-center justify-center bg-neutral-950'>
        {/* HACK: have to use fixed rem for max height and width due to mobile browsers */}
        <div className='mgn-step flex max-h-[48rem] w-full flex-1 flex-col justify-between bg-yellow-rb-200 p-2 sm:max-w-[25rem]'>
          <div className='mgn-story flex w-full flex-1 flex-col justify-between'>
            {/* HACK: have to use fixed rem for height due to mobile browsers */}
            <div className='flex flex-1 items-center text-center'>
              <div className='w-full'>
                <h2
                  className='pb-8'
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{ __html: locale.join.step2_header }}
                />
                <div className='mx-5 mt-3 flex justify-center'>
                  <div
                    className='text-left text-sm'
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: locale.join.step2_body }}
                  />
                </div>
              </div>
            </div>

            {/* REFACTOR: use next layout */}
            <Navigation
              middle={{
                className: 'mgn-cta-secondary',
                label: locale.navigation.returnHome,
                onClick: () => {
                  router.push('/');
                },
              }}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
