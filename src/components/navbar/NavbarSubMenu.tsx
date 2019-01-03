import * as React from 'react';
import NavbarSubItem, { INavbarSubItemProps } from './NavbarSubItem';

export interface INavbarSubMenuProps {
  label: string;
  href: string;
  items: INavbarSubItemProps[];
}

const NavbarSubMenu: React.FunctionComponent<INavbarSubMenuProps> = ({ items }) => (
  <div className="navbar-item has-dropdown is-hoverable">
    <div id="moreDropdown" className="navbar-dropdown">
      {items && items.map(item => <NavbarSubItem {...item} key={item.href} />)}
    </div>
  </div>
);

export default NavbarSubMenu;
