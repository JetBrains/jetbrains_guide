import * as React from 'react';

export interface IHeadingProps {
  title: string;
  subtitle?: string;
}

const Heading: React.FunctionComponent<IHeadingProps> = ({ title, subtitle }) => (
  <header className="bd-header" style={{ minHeight: '100px' }}>
    <div className="bd-header-titles">
      <h1 className="title">{title}</h1>
      {subtitle && <p className="subtitle is-4">{subtitle}</p>}
    </div>
  </header>
);

export default Heading;
