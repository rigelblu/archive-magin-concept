// Copyright rigélblu inc. All rights reserve
import { useRouter } from 'next/router';
import AppView from '@/components/Views/AppView';
import NavBar from '@/components/NavBar';
import locale, { LocaleType } from '@/locales/en';
import { CTARole } from '@/components/BaseComponents';

const t: LocaleType = locale;

export default function JoinMagin() {
  const router = useRouter();

  // HACK: have to use fixed rem for height due to mobile browsers
  const appContent = (
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
  );

  const appNavBar = (
    <NavBar
      items={[
        {
          id: t.navigation.returnHome,
          label: t.navigation.returnHome,
          ctaRole: CTARole.Primary,
          onClick: () => {
            router.push('/');
          },
        },
      ]}
    />
  );

  return <AppView appContent={appContent} appNavBar={appNavBar} />;
}
