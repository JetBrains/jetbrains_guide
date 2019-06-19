import * as React from 'react';
import NavbarButton, { NavbarButtonProps } from './NavbarButton';
import NavbarLink, { NavbarLinkProps } from './NavbarLink';

export interface NavbarEndProps {
  buttons: NavbarButtonProps[];
  links: NavbarLinkProps[];
}

const NavbarEnd: React.FC<NavbarEndProps> = ({ links, buttons }) => (
  <div className="navbar-end">
    {links && links.map(link => <NavbarLink key={link.href} {...link} />)}
    {buttons && buttons.map(button => <NavbarButton key={button.href} {...button} />)}
  </div>
);

export default NavbarEnd;
