// Copyright rigélblu inc.
// All rights reserved.
import { Button } from 'primereact/button';
import Cue from '@/components/Cue';

// REFACTOR: accept enums  for className and translate to proper css class
type Props = {
  left?: { className: string; label: string; onClick: () => void };
  middle?: { className: string; label: string; onClick: () => void };
  right?: { className: string; label: string; onClick: () => void };
  className?: string;
};

export default function Navigation(props: Props) {
  const { left = undefined, middle = null, right = undefined, className = '' } = props;

  let alignClass = '';
  if (left === undefined && right === undefined && middle !== undefined) {
    alignClass = 'justify-center';
  } else if (left !== undefined && right !== undefined) {
    alignClass = 'justify-between';
  }

  // OPTIMIZE: generalize to accept any # of objects
  return (
    <div className={`mgn-navigation flex w-full ${alignClass} ${className}`}>
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
        // OPTIMIZE: make it optional based on prop
        <Cue>
          <Button className={`text-center ${right.className}`} onClick={right.onClick}>
            {right.label}
          </Button>
        </Cue>
      )}
    </div>
  );
}
