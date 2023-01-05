// Copyright rigélblu inc.
// All rights reserved.
interface Props {
  className?: string;
}

export default function Navigation(props: Props) {
  const { className = '' } = props;

  return (
    <div className={`mgn-navigation ${className} flex justify-content-between`}>
      {/* REFACTOR: accept divs as props */}
      <div className='text-center mgn-cta-secondary'>Left</div>
      <div className='text-center mgn-cta-primary'>Right</div>
    </div>
  );
}
