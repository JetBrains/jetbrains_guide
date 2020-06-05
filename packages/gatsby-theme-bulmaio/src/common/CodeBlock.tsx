import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';

// @ts-ignore
const isHighlightedLine = (line: any, mark: string = '// highlight-next-line') =>
  line?.some((prevLine: any) => {
    return prevLine?.content === mark;
  });

export default ({ children, className }: any) => {
  const language = className.replace(/language-/, '') || '';
  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={undefined}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className + ' content'} style={{ ...style }}>
          {tokens.map((line, i) => {
            const lineProps = getLineProps({ line, key: i });
            const classNameArr = [lineProps.className];
            if (isHighlightedLine(line)) {
              return null;
            }

            if (isHighlightedLine(tokens?.[i - 1])) {
              classNameArr.push(`${lineProps.className} gatsby-highlight-code-line`);
            }
            return (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
}
