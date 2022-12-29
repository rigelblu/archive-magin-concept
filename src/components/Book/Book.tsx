// Copyright rigélblu inc.
// All rights reserved.
import Reader from './Reader/Reader';

interface Props {
  className?: string;
}

export default function Book(props: Props) {
  const { className = '' } = props;

  return (
    <div className={`mgn-book ${className}`}>
      <Reader />
    </div>
  );
}
