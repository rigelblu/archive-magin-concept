// Copyright rigélblu inc.
// All rights reserved.

interface Props {
  className?: string;
}

export default function Scene(props: Props) {
  const { className = '' } = props;

  return <div className={`${className}`}>Scene</div>;
}
