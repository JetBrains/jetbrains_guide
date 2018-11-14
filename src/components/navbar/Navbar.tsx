import * as React from 'react';
import NavbarBrand, { INavbarBrandProps } from './NavbarBrand';
import NavbarStart, { INavbarStartProps } from './NavbarStart';
import NavbarEnd, { INavbarEndProps } from './NavbarEnd';

export interface INavbarProps {
  brand: INavbarBrandProps;
  start: INavbarStartProps;
  end: INavbarEndProps;
}

const Navbar: React.SFC<INavbarProps> = ({ brand, start, end }) => (
  <nav id="navbar" className="navbar is-spaced is-black">
    <div className="container">
      <NavbarBrand {...brand} />
      <div id="navMenuIndex" className="navbar-menu">
        <NavbarStart {...start} />
        <NavbarEnd {...end} />
      </div>
    </div>
  </nav>
);

export default Navbar;
