import * as React from 'react';
import NavbarSubItem, { INavbarSubItemProps } from './NavbarSubItem';
import { Link } from 'gatsby';

export interface INavbarSubMenuProps {
  label: string;
  href: string;
  items: Array<INavbarSubItemProps>;
}

const NavbarSubMenu: React.SFC<INavbarSubMenuProps> = (
  { href, label, items }) => (
  <div className="navbar-item has-dropdown is-hoverable">
    <Link className="navbar-link bio-dropdown-main"
          to={href}>
      {label}
    </Link>
    <div id="moreDropdown" className="navbar-dropdown">
      {items && items.map((item) => (
        <NavbarSubItem {...item} key={item.href}/>
      ))}
    </div>
  </div>
);

export default NavbarSubMenu;