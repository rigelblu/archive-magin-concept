// Copyright rigélblu inc. All rights reserved.

export default function Footer() {
  return (
    <footer className='flex'>
      <div className='flex w-full items-center justify-between p-2'>
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
