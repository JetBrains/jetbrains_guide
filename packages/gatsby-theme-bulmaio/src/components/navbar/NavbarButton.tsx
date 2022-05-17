import * as React from 'react';
// import '../../../../guide-sass/NavbarButton.scss';

export interface NavbarButtonProps {
  accent: string;
  href: string;
  label: string;
}

const NavbarButton: React.FC<NavbarButtonProps> = ({ accent, href, label }) => (
  <p className="control">
    <a className={`button is-fullwidth-mobile is-${accent}`} href={href} target="_new" data-testid={`navbutton-a`}>
      <strong>{label}</strong>
    </a>
  </p>
);

export default NavbarButton;
