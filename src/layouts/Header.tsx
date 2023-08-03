// Copyright rigélblu inc. All rights reserved.
import Link from 'next/link';
import locale, { LocaleType } from '@/locales/en';

const t: LocaleType = locale;

export default function Header() {
  return (
    <header>
      <Link href='/' className='mgn-rb-blue p-2 text-sm font-bold'>
        {t.general.magin}
        <span className='block pl-2 text-2xs font-normal'>{t.general.tagline}</span>
      </Link>
    </header>
  );
}
