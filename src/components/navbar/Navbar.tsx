import * as React from 'react';
import NavbarBrand, { INavbarBrandProps } from './NavbarBrand';
import NavbarEnd, { INavbarEndProps } from './NavbarEnd';
import NavbarStart, { INavbarStartProps } from './NavbarStart';

export interface INavbarProps {
  brand: INavbarBrandProps;
  start: INavbarStartProps;
  end: INavbarEndProps;
}

const Navbar: React.FunctionComponent<INavbarProps> = ({ brand, start, end }) => (
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
