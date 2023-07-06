// Copyright rigélblu inc.
// All rights reserved.
import { Button } from 'primereact/button';

// REFACTOR: accept enums  for className and translate to proper css class
interface Props {
  left?: { className: string; label: string; onClick: () => void };
  middle?: { className: string; label: string; onClick: () => void };
  right?: { className: string; label: string; onClick: () => void };
  className?: string;
}

export default function Navigation(props: Props) {
  const { left = null, middle = null, right = null, className = '' } = props;

  // OPTIMIZE: generalize to accept any # of objects
  return (
    <div className={`mgn-navigation flex justify-between ${className}`}>
      {left && (
        <Button className={`text-center ${left.className}`} onClick={left.onClick}>
          {left.label}
        </Button>
      )}
      {middle && (
        <Button className={`text-center ${middle.className}`} onClick={middle.onClick}>
          {middle.label}
        </Button>
      )}
      {right && (
        <Button className={`text-center ${right.className}`} onClick={right.onClick}>
          {right.label}
        </Button>
      )}
    </div>
  );
}
