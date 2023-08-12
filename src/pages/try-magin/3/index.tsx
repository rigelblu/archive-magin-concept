// Copyright rigélblu inc. All rights reserve
import { useRouter } from 'next/router';
import AppView from '@/components/Views/AppView';
import { CTARole } from '@/components/BaseComponents';
import GuideMessage from '@/components/GuideMessage';
import NavBar from '@/components/NavBar';
import Story from '@/components/Story';
import locale, { LocaleType } from '@/locales/en';

const t: LocaleType = locale;

export default function MaginPreview() {
  const router = useRouter();
  const sceneRange = { start: 1, end: 2, current: 2 };

  const guidedMessageNode = (
    <GuideMessage
      className='flex items-center font-bold'
      messages={[...t.guide.tryMagin3a_guidedMessages]}
    />
  );

  const appContent = <Story sceneRange={sceneRange} guidedMessageNode={guidedMessageNode} />;

  const appNavBar = (
    <>
      {' '}
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
    </>
  );

  return <AppView appContent={appContent} appNavBar={appNavBar} />;
}
