// Copyright rigélblu inc.
// All rights reserved.

interface Props {
  left: string;
  right: string;
  className?: string;
}

export default function Navigation(props: Props) {
  const { left, right, className = '' } = props;

  return (
    <div className={`mgn-navigation ${className} flex justify-content-between`}>
      <div className='text-center mgn-cta-secondary'>{left}</div>
      <div className='text-center mgn-cta-primary'>{right}</div>
    </div>
  );
}
