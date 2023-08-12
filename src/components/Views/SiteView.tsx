// Copyright rigélblu inc. All rights reserved.
import clsx from '@/lib/clsx-helpers';
import { SiteLayout } from '@/components/Layout';

type Props = {
  children: React.ReactNode;
};

type CustomSiteViewProps = {
  children: React.ReactNode;
  canvasClassName?: string;
  containerClassName?: string; // Container for header, footer, and main
  mainClassName?: string;
};

function CustomSiteView({
  children,
  canvasClassName = '',
  containerClassName = '',
  mainClassName = '',
}: CustomSiteViewProps) {
  return (
    <SiteLayout
      canvasClassName={clsx(canvasClassName, 'bg-ivory-100')}
      containerClassName={clsx(containerClassName, 'mx-auto max-w-4xl')}
      mainClassName={clsx(mainClassName, 'py-1')}
    >
      {children}
    </SiteLayout>
  );
}

export function SiteView({ children }: Props) {
  return (
    <div className={SiteView.name}>
      <CustomSiteView containerClassName='flex flex-col'>{children}</CustomSiteView>
    </div>
  );
}

export function SiteFullScreenView({ children }: Props) {
  return (
    <div className={SiteView.name}>
      <CustomSiteView
        containerClassName='h-screen flex flex-col mx-auto max-w-4xl'
        mainClassName='flex flex-1 flex-col items-center justify-center'
      >
        {children}
      </CustomSiteView>
    </div>
  );
}
