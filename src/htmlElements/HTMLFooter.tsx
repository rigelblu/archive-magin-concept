// Copyright rigélblu inc.
// All rights reserved.
import React from 'react';
// TODO: add unit tests

export default function HTMLFooter() {
  return (
    <footer className='flex'>
      <div className='flex w-full justify-content-between align-items-center'>
        <div>
          magin is a product of&nbsp;
          <a href='https://rigelblu.com' rel='noreferrer noopener' target='_blank'>
            rigélblu
          </a>
        </div>
        <div>&copy; 2022 rigélblu inc. all rights reserved.</div>
        {/* <div><a href="">Terms </a> | <a href="">Privacy</a></div> */}
      </div>
    </footer>
  );
}
