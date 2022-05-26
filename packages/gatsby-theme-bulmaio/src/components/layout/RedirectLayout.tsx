import * as React from 'react';

export interface RedirectLayoutProps {
  to: string;
}

const RedirectLayout: React.FC<RedirectLayoutProps> = ({ to }) => {
  return (
    <html lang="en">
      <title>Redirecting...</title>
      <meta charSet={`utf-8`} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv={`X-UA-Compatible`} />
      <meta httpEquiv={`refresh`} content={`0; url=` + to} />

      <body>
        <p>
          If you are not redirected automatically, please{' '}
          <a href={to}>click here</a>.
        </p>
      </body>
    </html>
  );
};

export default RedirectLayout;
