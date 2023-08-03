// Copyright rigélblu inc. All rights reserved.
import { Button } from 'primereact/button';
import FocusEffect from '@/components/FocusEffect';

type NavItem = {
  id: string;
  label: string;
  onClick: () => void;
  className?: string;
  focusEffect?: boolean;
};

type Props = {
  items: NavItem[];
  className?: string;
};

export default function NavBar({ items, className = '' }: Props) {
  const alignClass = items.length === 1 ? 'justify-center' : 'justify-between';

  return (
    <div className={`mgn-navigation flex w-full ${alignClass} ${className}`}>
      {items.map((item) => {
        const button = (
          <Button className={`text-center ${item.className || ''}`} onClick={item.onClick}>
            {item.label}
          </Button>
        );

        return (
          <div key={item.id}>{item.focusEffect ? <FocusEffect>{button}</FocusEffect> : button}</div>
        );
      })}
    </div>
  );
}
