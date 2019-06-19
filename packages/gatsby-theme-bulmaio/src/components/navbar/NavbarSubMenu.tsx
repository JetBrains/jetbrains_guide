import * as React from 'react';
import NavbarSubItem, { NavbarSubItemProps } from './NavbarSubItem';

export interface NavbarSubMenuProps {
  href?: string;
  label: string;
  items: NavbarSubItemProps[];
}

const NavbarSubMenu: React.FC<NavbarSubMenuProps> = ({ label, items }) => {
  return (
    <div className="navbar-item has-dropdown is-hoverable">
      <span data-testid={`navbarsubmenu-label`} className="navbar-link bio-dropdown-main">{label}</span>
      <div id="moreDropdown" className="navbar-dropdown">
        {items && items.map(item => <NavbarSubItem {...item} key={item.href} />)}
      </div>
    </div>
  )
};

export default NavbarSubMenu;
