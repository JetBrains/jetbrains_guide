import * as React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
// @ts-ignore
import rangeParser from 'parse-numeric-range';

import vsDark from 'prism-react-renderer/themes/vsDark';

const calculateLinesToHighlight = (meta: any) => {
  const RE = /{([\d,-]+)}/;
  if (RE.test(meta)) {
    // @ts-ignore
    const strlineNumbers = RE.exec(meta)[1];
    const lineNumbers = rangeParser(strlineNumbers);
    return (index: any) => lineNumbers.includes(index + 1);
  } else {
    return () => false;
  }
};
export default ({ children, className, metastring }: any) => {
  const language = className ? className.replace(/language-/, '') || '' : '';
  const shouldHighlightLine = calculateLinesToHighlight(metastring);

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={vsDark}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className + ` content`}
          style={{ ...style, fontSize: 'large' }}
        >
          {tokens.map((line, index) => {
            const lineProps = getLineProps({ line, key: index });
            if (shouldHighlightLine(index)) {
              lineProps.className = `${lineProps.className} highlight-line`;
            }
            return (
              <div key={index} {...lineProps}>
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
};
