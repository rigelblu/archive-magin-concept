// Copyright rigélblu inc.
// All rights reserved.
import { Button } from 'primereact/button';

interface Props {
  left: string;
  right: string;
  className?: string;
}

export default function Navigation(props: Props) {
  const { left, right, className = '' } = props;

  return (
    <div className={`mgn-navigation ${className} flex justify-content-between`}>
      <Button className='text-center mgn-cta-secondary'>{left}</Button>
      <Button className='text-center mgn-cta-primary'>{right}</Button>
    </div>
  );
}
