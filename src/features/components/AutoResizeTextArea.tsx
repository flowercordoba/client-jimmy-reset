import React, { useEffect, useRef } from 'react';
import autosize from 'autosize';

interface AutoResizeTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const AutoResizeTextArea: React.FC<AutoResizeTextAreaProps> = (props) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textAreaRef.current) {
      autosize(textAreaRef.current);
    }

    return () => {
      if (textAreaRef.current) {
        autosize.destroy(textAreaRef.current);
      }
    };
  }, []);

  return (
    <textarea
      ref={textAreaRef}
      {...props}
    />
  );
};

export default AutoResizeTextArea;
