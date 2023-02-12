// Copyright rigélblu inc.
// All rights reserved.
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <Link href='/' className='mgn-rb-blue flex w-full content-start p-2 text-sm font-bold'>
        magin.blue
      </Link>
    </header>
  );
}
