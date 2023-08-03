// Copyright rigélblu inc. All rights reserved.
import React, { useEffect, useState } from 'react';
import Header from './Header';
// import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
  canvasClassName?: string;
  bodyClassName?: string;
  mainClassName?: string;
};

export function SiteLayout(props: LayoutProps) {
  return <MainLayout {...props} layoutType={LayoutType.Site} />; // eslint-disable-line @typescript-eslint/no-use-before-define, no-use-before-define, react/jsx-props-no-spreading
}

export function AppLayout(props: LayoutProps) {
  return <MainLayout {...props} layoutType={LayoutType.App} />; // eslint-disable-line @typescript-eslint/no-use-before-define, no-use-before-define, react/jsx-props-no-spreading
}

enum LayoutType {
  App = 'app',
  Site = 'site',
}

type MainLayoutProps = {
  children: React.ReactNode;
  canvasClassName?: string;
  bodyClassName?: string;
  mainClassName?: string;
  layoutType: LayoutType;
};

function MainLayout(props: MainLayoutProps) {
  const {
    children,
    bodyClassName = '',
    canvasClassName = '',
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
    <div className={`mgn-canvas ${canvasClassName}`}>
      <div className={`mgn-body mx-auto max-w-4xl bg-ivory-100 ${bodyClassName}`}>
        {layoutType === LayoutType.Site && <Header />}
        <main className={mainClassName}>{children}</main>
        {/* {layoutType === LayoutType.Site && <Footer />} */}
      </div>
    </div>
  );
}
