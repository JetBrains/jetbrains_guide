import * as React from 'react';
import NavbarButton, { INavbarButtonProps } from './NavbarButton';
import NavbarLink, { INavbarLinkProps } from './NavbarLink';

export interface INavbarEndProps {
  links: INavbarLinkProps[];
  buttons: INavbarButtonProps[];
}

const NavbarEnd: React.FunctionComponent<INavbarEndProps> = ({ links, buttons }) => (
  <div className="navbar-end">
    {links && links.map((link) => <NavbarLink key={link.href} {...link} />)}
    {buttons && buttons.map((button) => <NavbarButton key={button.href} {...button} />)}
  </div>
);

export default NavbarEnd;
