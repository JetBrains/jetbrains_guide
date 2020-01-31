import * as React from 'react';
import NavbarBrand, { NavbarBrandProps } from './NavbarBrand';
import NavbarStart, { NavbarStartProps } from './NavbarStart';
import NavbarEnd, { NavbarEndProps } from './NavbarEnd';

export interface NavbarProps {
  brand: NavbarBrandProps;
  start: NavbarStartProps;
  end: NavbarEndProps;
}

const Navbar: React.FC<NavbarProps> = ({ brand, start, end }) => (
  <nav id="navbar" className="navbar is-spaced is-dark">
    <div className="container">
      <NavbarBrand {...brand}/>
      <div id="navMenuIndex" className="navbar-menu">
        <NavbarStart {...start}/>
        <NavbarEnd {...end}/>
      </div>
    </div>
  </nav>
);

export default Navbar;
