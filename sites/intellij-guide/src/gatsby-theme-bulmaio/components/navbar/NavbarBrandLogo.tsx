import React, { FC } from 'react';
import { Link } from 'gatsby';

const logo = require('./jetbrains-simple.svg');

const NavbarBrandLogo: FC = () => (
  <>
    <a data-testid={`navbarbrand-logo`} className="navbar-item bio-navbar-brand"
       href={`https://www.jetbrains.com/idea/`}>
      <img
        src={logo}
        alt={`JetBrains Logo`}
        role="presentation"
        width="42"
        height="42"
        style={{ maxHeight: '4rem' }}
      />
    </a>
    <Link className="navbar-item bio-navbar-brand" to={`/`}
          style={{ marginRight: '1rem' }}>
      IntelliJ IDEA Guide
    </Link>
  </>
);

export default NavbarBrandLogo;
