// Copyright rigélblu inc.
// All rights reserved.
import React from 'react';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export default function Cue(props: Props) {
  const { className = '', children = undefined } = props;

  return (
    <div className={`${className}`}>
      {React.Children.map(children, (child) => {
        // Verify that the child is a valid React element
        if (!React.isValidElement(child)) return child;

        // Add the `animate-shadow` class to the child's existing classes
        return React.cloneElement(child, {
          // @ts-expect-error FIXME: later
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-member-access
          className: `animate-shadow ${child.props.className || ''}`,
        });
      })}
    </div>
  );
}
