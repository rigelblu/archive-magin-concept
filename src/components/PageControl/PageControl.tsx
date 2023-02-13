// Copyright rigélblu inc.
// All rights reserved.
import { Button } from 'primereact/button';

interface Props {
  // REFACTOR: improve naming to indicate aria-label
  action: string;
  onClick: () => void;
  isShown?: boolean;
  className?: string;
}

export default function PageControl(props: Props) {
  const { action, onClick, isShown = true, className = '' } = props;

  // TODO: replace ascii with svg
  let icon = '';
  if (!isShown) {
    icon = '';
  } else if (action === 'prev') {
    icon = 'pi-chevron-left';
  } else if (action === 'next') {
    icon = 'pi-chevron-right';
  } else {
    console.error('PageControl: invalid action');
  }

  // REFACTOR: w-4 is used to prevent Book from shifting
  // FIXME: use primereact button instead of div
  // TODO: style chevron in blue-rb-600 and background in blue-rb-lighter
  return (
    <Button
      className={`mgn-page-control p-button-text h-4 max-w-max ${className}`}
      aria-label={action}
      disabled={!isShown}
      icon={`pi ${icon}`}
      onClick={onClick}
    />
  );
}
