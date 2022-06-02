import * as React from 'react';
import { FC } from 'react';
import { Link } from 'gatsby';

import Logo from '../logo/Logo';

const NavbarBrandLogo: FC = () => (
  <Link
    data-testid={`navbarbrand-logo`}
    className="navbar-item bio-navbar-brand"
    to={`/`}
  >
    {Logo}
  </Link>
);

export default NavbarBrandLogo;
