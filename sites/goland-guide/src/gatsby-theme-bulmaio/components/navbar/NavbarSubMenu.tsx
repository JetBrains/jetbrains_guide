import * as React from 'react';
// @ts-ignore
import NavbarSubItem, { NavbarSubItemProps } from 'gatsby-theme-bulmaio/src/components/navbar/NavbarSubItem';

export interface NavbarSubMenuProps {
  href?: string;
  label: string;
  items: NavbarSubItemProps[];
}

const NavbarSubMenu: React.FC<NavbarSubMenuProps> = ({ label, items }) => <></>;

export default NavbarSubMenu;
