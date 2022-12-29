// Copyright rigélblu inc.
// All rights reserved.

interface Props {
  message: string;
  className?: string;
}

export default function Guide(props: Props) {
  const { message, className = '' } = props;

  // TODO: log if message is empty string
  // REFACTOR: define standard padding in global.css
  return <div className={`w-full p-1 text-center ${className}`}>{message}</div>;
}
