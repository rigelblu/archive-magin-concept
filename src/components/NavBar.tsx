// Copyright rigélblu inc. All rights reserved.
import clsx, { cmpCls } from '@/lib/clsx-helpers';
import { CTAButton, CTARole } from '@/components/BaseComponents';
import FocusEffect from '@/components/FocusEffect';

type NavItem = {
  id: string;
  label: string;
  ctaRole: CTARole;
  onClick: () => void;
  className?: string;
  focusEffect?: boolean;
};

type Props = {
  items: NavItem[];
  className?: string;
};

// OPTIMiZE: convert items in children of type NavItem, NavButton
export default function NavBar({ items, className = '' }: Props) {
  const alignClass = items.length === 1 ? 'justify-center' : 'justify-between';

  return (
    <div className={clsx(cmpCls(NavBar.name), 'flex w-full', alignClass, className)}>
      {items.map((item) => {
        const button = (
          <CTAButton
            role={item.ctaRole}
            onClick={item.onClick}
            className={`text-center ${item.className || ''}`}
          >
            {item.label}
          </CTAButton>
        );

        return (
          <div key={item.id}>{item.focusEffect ? <FocusEffect>{button}</FocusEffect> : button}</div>
        );
      })}
    </div>
  );
}
