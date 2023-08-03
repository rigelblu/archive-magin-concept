// Copyright rigélblu inc. All rights reserved.
import { Button } from 'primereact/button';
import IconArrowLeft from '@/assets/common/icons/arrow-left.svg';
import IconArrowRight from '@/assets/common/icons/arrow-right.svg';

export enum Action {
  Prev = 'prev',
  Next = 'next',
}

type Props = {
  // REFACTOR: improve naming to indicate aria-label
  action: Action;
  onClick: () => void;
  isShown?: boolean;
  className?: string;
};

export default function SceneControl(props: Props) {
  const { action, onClick, isShown = true, className = '' } = props;

  // OPTIMIZE: animate-shadow creates a not so good look. Duplicate svg and show it
  // OPTIMIZE: extract common elements into variables for readability
  let NavIcon = <span className='w-3' />;
  if (isShown && action === Action.Prev) NavIcon = <IconArrowLeft className='w-3' />;
  if (isShown && action === Action.Next) NavIcon = <IconArrowRight className='w-3' />;

  // REFACTOR: w-4 is used to prevent Book from shifting
  // TODO: style chevron in blue-rb-600 and background in blue-rb-lighter
  return (
    <Button
      className={`mgn-scenecontrol ${className}`}
      aria-label={action}
      disabled={!isShown}
      onClick={onClick}
    >
      {NavIcon}
    </Button>
  );
}
