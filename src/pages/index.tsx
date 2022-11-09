// Copyright rigélblu inc.
// All rights reserved.
import React from 'react';

import HTMLBody from '@/components/htmlElements/HTMLBody';

export default function PageRoot() {
  return (
    <HTMLBody showHeader={false} showFooter={false}>
      <h1 className='flex h-screen justify-content-center align-items-center mgn-text-blue-rb'>
        hello magin
      </h1>
    </HTMLBody>
  );
}
