// Copyright rigélblu inc. All rights reserved.
import React, { useEffect, useState } from 'react';
import clsx, { cmpCls } from '@/lib/clsx-helpers';
import Header from '@/components/Page/Header';
// import Footer from './Footer';

// Public Interface: SiteLayout and AppLayout
const Layout = {
  App: 'app',
  Site: 'site',
} as const;
type LayoutType = (typeof Layout)[keyof typeof Layout];

type LayoutProps = {
  children: React.ReactNode;
  canvasClassName?: string;
  containerClassName?: string;
  mainClassName?: string;
};

export function SiteLayout(props: LayoutProps) {
  return <MainLayout {...props} layoutType={Layout.Site} />; // eslint-disable-line @typescript-eslint/no-use-before-define, no-use-before-define, react/jsx-props-no-spreading
}

export function AppLayout(props: LayoutProps) {
  return <MainLayout {...props} layoutType={Layout.App} />; // eslint-disable-line @typescript-eslint/no-use-before-define, no-use-before-define, react/jsx-props-no-spreading
}

type MainLayoutProps = {
  children: React.ReactNode;
  canvasClassName?: string;
  containerClassName?: string; // Container for header, footer, and main
  mainClassName?: string;
  layoutType: LayoutType;
};

// Private interface
function MainLayout(props: MainLayoutProps) {
  const {
    children,
    canvasClassName = '',
    containerClassName = '',
    mainClassName = '',
    layoutType,
  } = props;

  // OPTIIMIZE: enable this only on mobile safari
  // Trigger mobile safari to rerender when the nav bar disappears
  const [windowHeight, setWindowHeight] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowHeight]);

  return (
    <div className={clsx(cmpCls(MainLayout.name), canvasClassName)}>
      <div className={containerClassName}>
        {layoutType === Layout.Site && <Header />}
        <main className={mainClassName}>{children}</main>

        {/* Temporarily disable until we need a footer */}
        {/* {layoutType === LayoutType.Site && <Footer />} */}
      </div>
    </div>
  );
}
