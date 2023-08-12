// Copyright rigélblu inc. All rights reserved.
import { Link } from '@/components/BaseComponents';

export default function Footer() {
  return (
    <footer className='flex'>
      <div className='flex w-full items-center justify-between p-2'>
        <div>
          magin is a product of&nbsp;
          <Link href='https://rigelblu.com'>rigélblu</Link>
        </div>
        <div>&copy; 2022 rigélblu inc. all rights reserved.</div>
        {/* <div><Link href="">Terms </Link> | <Link href="">Privacy</Link></div> */}
      </div>
    </footer>
  );
}
