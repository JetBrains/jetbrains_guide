import * as React from 'react';
import { Link } from '@reach/router';

export interface INavbarLinkProps {
  href: string;
  color: string;
  icon: string;
}

const NavbarLink: React.SFC<INavbarLinkProps> = ({ href, color, icon }) => (
  <Link className="navbar-item is-hidden-touch is-hidden-desktop-only"
     to={href}
     target="_blank"
  >
    <span className="icon"
          style={{ color: '#' + color }}>
      <i className={'fab fa-lg fa-' + icon}/>
    </span>
  </Link>

);

export default NavbarLink;