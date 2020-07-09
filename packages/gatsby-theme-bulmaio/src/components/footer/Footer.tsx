import * as React from 'react';

export interface FooterProps {
  copyright: string;
}

const Footer: React.FC<FooterProps> = ({copyright}) => (
  <footer className="footer">
    <div className="container">
      <div className="columns">
        <div className="column is-4 is-offset-4 has-text-centered">
          <p className="is-size-6" dangerouslySetInnerHTML={{ __html: copyright }}></p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
