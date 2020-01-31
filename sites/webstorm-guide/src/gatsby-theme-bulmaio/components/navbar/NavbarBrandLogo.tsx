import React, { FC } from 'react';
import { Link } from 'gatsby';

const logo =  require('./jetbrains-simple.svg');

const NavbarBrandLogo: FC = () => (
  <Link data-testid={`navbarbrand-logo`} className="navbar-item bio-navbar-brand" to={`/`}>
    <img
      src={logo}
      alt={`JetBrains Logo`}
      role="presentation"
      width="42"
      height="42"
      style={{ maxHeight: '4rem' }}
    />
  </Link>
);

export default NavbarBrandLogo;
