// Copyright rigélblu inc. All rights reserved.
import { joinClassesWithComponent } from '@rigelblu/rb-base-packages-join-classes';
import { Link } from '@/components/BaseComponents';
import locale, { LocaleType } from '@/locales/en';

const t: LocaleType = locale;

export default function Header() {
  return (
    <header className={joinClassesWithComponent(Header.name)}>
      {/* REFACTOR: move p-2 to a base component */}
      <Link href='/' className='p-2 text-sm font-bold'>
        {t.general.magin}
        <span className='block pl-2 text-2xs font-normal'>{t.general.tagline}</span>
      </Link>
    </header>
  );
}
