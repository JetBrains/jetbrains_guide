import * as React from 'react';
import { Link } from 'gatsby';

export interface INavbarButtonProps {
  accent: string;
  href: string;
  label: string;
}

const NavbarButton: React.SFC<INavbarButtonProps> = ({ accent, href, label }) => (
  <p className="control">
    <Link className={'button is-' + accent} to={href}>
      <strong>{label}</strong>
    </Link>
  </p>
);

export default NavbarButton;