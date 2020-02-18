import * as React from 'react';
import NavbarMenuItem, { NavbarMenuItemProps } from './NavbarMenuItem';
import NavbarSubMenu, { NavbarSubMenuProps } from './NavbarSubMenu';

export interface NavbarStartProps {
  items: Array<NavbarMenuItemProps | NavbarSubMenuProps>;
}

const NavbarStart: React.FC<NavbarStartProps> = ({ items }) => {
  return (
    <div className="navbar-start">
      {items.filter(item => item.label != 'Skip').map(item => {
          // @ts-ignore
          if (item.items && item.items.length > 0) {
            // Submenu
            return (
              <NavbarSubMenu key={item.label} {...item}/>
            );
          } else {
            // @ts-ignore
            // noinspection UnnecessaryLocalVariableJS
            const menu = <NavbarMenuItem key={item.href} {...item}/>;
            return menu;
          }
        }
      )}
    </div>
  );
};

export default NavbarStart;
