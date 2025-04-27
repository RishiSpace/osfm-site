
import React from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock = ({ code, language = 'bash' }: CodeBlockProps) => {
  return (
    <div className="code-block">
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
