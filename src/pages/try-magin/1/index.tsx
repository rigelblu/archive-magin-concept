// Copyright rigélblu inc. All rigts reserve
import { useRouter } from 'next/router';
import AppView from '@/components/Views/AppView';
import { CTARole } from '@/components/BaseComponents';
import MaginPresents from '@/components/MaginPresents';
import NavBar from '@/components/NavBar';
import locale, { LocaleType } from '@/locales/en';
import { Book } from '@/data/bookData';

const t: LocaleType = locale;

export default function MarginPreview() {
  const router = useRouter();

  const appContent = <MaginPresents book={Book.ProjectHailMary} />;

  const appNavBar = (
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
        },
        {
          id: t.guide.maginPresents_watchNovel,
          label: t.guide.maginPresents_watchNovel,
          ctaRole: CTARole.Primary,
          onClick: () => {
            router.push('/try-magin/2');
          },
          focusEffect: true,
        },
      ]}
    />
  );
  return <AppView appContent={appContent} appNavBar={appNavBar} />;
}
