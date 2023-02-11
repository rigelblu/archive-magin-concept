// Copyright rigélblu inc.
// All rights reserved.
import React from 'react';

import Header from './Header';
import Footer from './Footer';
// TODO: add unit tests

interface Props {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
}

export default function MainLayout(props: Props) {
  const { children, showHeader = true, showFooter = true } = props;
  return (
    <div>
      {showHeader && <Header />}
      {children}
      {showFooter && <Footer />}
    </div>
  );
}