// Copyright rigélblu inc. All rights reserved.
import { useEffect, useState } from 'react';
import settings from '@/config/settings';

type Props = {
  children?: React.ReactNode; // TODO: consider deprecating
  className?: string;
  messages?: string[];
};

export default function GuideMessage({
  children = undefined,
  className = '',
  messages = [''],
}: Props) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  useEffect(() => {
    if (!messages || messages.length === 0) {
      console.warn('GuideMessage: No messages to display.');
      return () => {};
    }

    if (messages.some((message: string) => message.trim() === '')) {
      console.warn('GuideMessage: Some messages are empty.');
    }

    const intervalId: NodeJS.Timeout = setInterval(() => {
      setCurrentMessageIndex((previousIndex) => (previousIndex + 1) % messages.length);
    }, settings.guidedMessageDuration);

    return () => {
      clearInterval(intervalId);
    };
  }, [messages]);

  // REFACTOR: define standard padding in global.css
  // OPTIMIZE: make color a parm
  return (
    <div className={`mgn-guide p-1 text-center text-blue-rb-600 ${className}`}>
      {messages[currentMessageIndex]}
      {children}
    </div>
  );
}
