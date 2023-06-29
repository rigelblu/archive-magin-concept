// Copyright rigélblu inc.
// All rights reserved.
import { Button } from 'primereact/button';
import IconArrowLeft from '@/assets/common/icons/arrow-left.svg';
import IconArrowRight from '@/assets/common/icons/arrow-right.svg';

interface Props {
  // REFACTOR: improve naming to indicate aria-label
  action: string;
  onClick: () => void;
  isShown?: boolean;
  className?: string;
}

export default function PageControl(props: Props) {
  const { action, onClick, isShown = true, className = '' } = props;

  // REFACTOR: w-4 is used to prevent Book from shifting
  // TODO: style chevron in blue-rb-600 and background in blue-rb-lighter
  return (
    <Button
      className={`mgn-page-control ${className}`}
      aria-label={action}
      disabled={!isShown}
      onClick={onClick}
    >
      {!isShown && <span className='w-3' />}
      {isShown && action === 'prev' && <IconArrowLeft className='w-3' />}
      {isShown && action === 'next' && <IconArrowRight className='w-3' />}
    </Button>
  );
}
