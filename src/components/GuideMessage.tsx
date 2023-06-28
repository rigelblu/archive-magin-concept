// Copyright rigélblu inc.
// All rights reserved.
import { useEffect, useState } from 'react';
import settings from '@/config/settings';

interface Props {
  children?: React.ReactNode; // TODO: deprecate
  className?: string;
  messages?: string | string[]; // TODO: make required
}

export default function GuideMessage(props: Props) {
  const { children = undefined, className = '', messages = '' } = props;
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const singleMessage = typeof messages === 'string';

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentMessageIndex((previousIndex) => {
        if (messages && previousIndex < messages.length - 1) {
          return previousIndex + 1;
        }
        return 0;
      });
    }, settings.guidedMessage_DurationSecs);

    return () => {
      clearInterval(intervalId);
    };
  }, [messages]);

  // TODO: log if message is empty string
  // REFACTOR: define standard padding in global.css
  // OPTIMIZE: make color a parm
  return (
    <div className={`mgn-guide p-1 text-center text-blue-rb-600 ${className}`}>
      {singleMessage && messages}
      {!singleMessage && (
        <>
          {messages.length === 1 && messages[0]}
          {messages[currentMessageIndex]}
        </>
      )}
      {children}
    </div>
  );
}
