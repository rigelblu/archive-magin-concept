// Copyright rigélblu inc.
// All rights reserved.
import React from 'react';

import Header from './Header';
import Footer from './Footer';
// TODO: add unit tests

interface Props {
  children: React.ReactNode;
  bodyClassName?: string;
  className?: string;
  layoutKind?: string;
}

export default function MainLayout(props: Props) {
  const { children, bodyClassName = '', className = '', layoutKind = 'site' } = props;
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

  return (
    <div className={`mx-auto max-w-4xl ${bodyClassName}`}>
      {showHeader && <Header />}
      <main className={className}>{children}</main>
      {showFooter && <Footer />}
    </div>
  );
}
