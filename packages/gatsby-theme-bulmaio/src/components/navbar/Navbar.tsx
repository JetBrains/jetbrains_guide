import * as React from 'react';
import NavbarStart, { NavbarStartProps } from './NavbarStart';
import NavbarEnd, { NavbarEndProps } from './NavbarEnd';
import NavbarBrand, { NavbarBrandProps } from "./NavbarBrand";

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
