// Copyright rigélblu inc.
// All rights reserved.

interface Props {
  className?: string;
}

export default function Storyboard(props: Props) {
  const { className = '' } = props;

  return <div className={`w-full ${className}`}>Storyboard</div>;
}
