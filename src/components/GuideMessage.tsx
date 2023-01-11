// Copyright rigélblu inc.
// All rights reserved.

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function GuideMessage(props: Props) {
  const { children = '', className = '' } = props;

  // TODO: log if message is empty string
  // REFACTOR: define standard padding in global.css
  return <div className={`mgn-guide ${className} w-full p-1 text-center`}>{children}</div>;
}
