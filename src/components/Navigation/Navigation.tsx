// Copyright rigélblu inc.
// All rights reserved.
import { Button } from 'primereact/button';

interface Props {
  left: { label: string; onClick: () => void };
  right: { label: string; onClick: () => void };
  className?: string;
}

export default function Navigation(props: Props) {
  const { left, right, className = '' } = props;

  return (
    <div className={`mgn-navigation flex justify-content-between ${className}`}>
      <Button className='text-center mgn-cta-secondary' onClick={left.onClick}>
        {left.label}
      </Button>
      <Button className='text-center mgn-cta-primary' onClick={right.onClick}>
        {right.label}
      </Button>
    </div>
  );
}
