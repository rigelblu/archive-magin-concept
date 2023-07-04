// Copyright rigélblu inc.
// All rights reserved.
import React, { useEffect } from 'react';

import Header from './Header';
import Footer from './Footer';

interface Props {
  children: React.ReactNode;
  canvasClassName?: string;
  bodyClassName?: string;
  className?: string;
  layoutKind?: string;
}

export default function MainLayout(props: Props) {
  const {
    children,
    bodyClassName = '',
    canvasClassName = '',
    className = '',
    layoutKind = 'site',
  } = props;
  let showHeader = false;
  let showFooter = false;

  switch (layoutKind) {
    case 'app':
      showHeader = false;
      showFooter = false;
      break;
    case 'site':
      showHeader = true;
      showFooter = false;
      break;
    default:
      break;
  }

  useEffect(() => {
    const devices = [
      { userAgent: 'iPhone|iPad', class: 'device-apple' },
      { userAgent: 'Android', class: 'device-android' },
    ];

    devices.forEach((device) => {
      if (new RegExp(device.userAgent, 'i').test(navigator.userAgent)) {
        document.body.classList.add(device.class);
      }
    });
  }, []);

  return (
    <div className={`mgn-canvas ${canvasClassName}`}>
      <div className={`mgn-body mx-auto max-w-4xl bg-yellow-rb-200 ${bodyClassName}`}>
        {showHeader && <Header />}
        <main className={className}>{children}</main>
        {showFooter && <Footer />}
      </div>
    </div>
  );
}
