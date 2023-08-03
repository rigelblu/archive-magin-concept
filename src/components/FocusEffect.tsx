// Copyright rigélblu inc. All rights reserved.
import React, { ReactElement } from 'react';

type Props = {
  children?: React.ReactNode;
  className?: string;
};

export default function FocusEffect(props: Props) {
  const { className = '', children = undefined } = props;

  return (
    <div className={`${className}`}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) {
          console.error(`FocusEffect: invalid child ${JSON.stringify(child, null, 2)}`);
          return child;
        }

        const childProps = child.props as { className?: string };
        return React.cloneElement(child as ReactElement<Record<string, unknown>>, {
          className: `animate-shadow ${childProps.className || ''}`,
        });
      })}
    </div>
  );
}
