// Copyright rigélblu inc. All rights reserved.
import { AppLayout } from '@/components/Layout';
import NavBar from '@/components/NavBar';

type Props = {
  appContent: React.ReactNode;
  appNavBar: React.ReactElement<typeof NavBar>;
};

export default function AppView({ appContent, appNavBar }: Props) {
  return (
    <div className={AppView.name}>
      <AppLayout
        canvasClassName='bg-black'
        containerClassName='mx-auto max-w-4xl'
        mainClassName='flex h-screen flex-col items-center justify-center bg-neutral-950'
      >
        {/* HACK: have to use fixed rem for max height and width due to mobile browsers */}
        <div className='flex max-h-[48rem] w-full flex-1 flex-col justify-between bg-ivory-100 p-2 sm:max-w-[25rem]'>
          <div className='flex w-full flex-1 flex-col justify-between'>{appContent}</div>
          {appNavBar}
        </div>
      </AppLayout>
    </div>
  );
}
