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
  // OPTIMIZE: make color a parm
  return (
    <div className={`mgn-guide w-full p-1 text-center text-green-800 ${className} `}>
      {children}
    </div>
  );
}
