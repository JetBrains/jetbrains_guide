import * as React from 'react';

export interface NavbarLinkProps {
  color: string;
  href: string;
  icon: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ href, color, icon }) => (
  <a data-testid={`navbarlink-a`} className="navbar-item is-hidden-touch" href={href} target="_blank">
    <span data-testid={`navbarlink-span`} className="icon" style={{ color: `#${color}` }}>
      <i data-testid={`navbarlink-i`} className={`fab fa-lg fa-${icon}`} />
    </span>
  </a>
);

export default NavbarLink;
