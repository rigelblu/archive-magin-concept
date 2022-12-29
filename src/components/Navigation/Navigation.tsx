// Copyright rigélblu inc.
// All rights reserved.
interface Props {
  className?: string;
}

export default function Navigation(props: Props) {
  const { className = '' } = props;

  return (
    <div className={`flex justify-content-between ${className}`}>
      <div className='text-center'>Left</div>
      <div className='text-center'>Right</div>
    </div>
  );
}
