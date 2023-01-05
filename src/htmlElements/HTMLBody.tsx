// Copyright rigélblu inc.
// All rights reserved.
import React from 'react';
// import { useRouter } from 'next/router';

import HTMLHeader from './HTMLHeader';
import HTMLFooter from './HTMLFooter';
// TODO: add unit tests

interface HTMLBodyProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
}

export default function HTMLBody(props: HTMLBodyProps) {
  const { children, showHeader = true, showFooter = true } = props;
  return (
    <div>
      {showHeader && <HTMLHeader />}
      {children}
      {showFooter && <HTMLFooter />}
    </div>
  );
}
