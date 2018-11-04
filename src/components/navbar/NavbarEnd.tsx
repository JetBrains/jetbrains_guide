import * as React from 'react';
import NavbarLink, { INavbarLinkProps } from './NavbarLink';
import NavbarButton, { INavbarButtonProps } from './NavbarButton';

export interface INavbarEndProps {
  links: Array<INavbarLinkProps>;
  buttons: Array<INavbarButtonProps>;
}

const NavbarEnd: React.SFC<INavbarEndProps> = ({ links, buttons }) => (
  <div className="navbar-end">
    {links && links.map((link) => <NavbarLink
      key={link.href} {...link}/>)}
    {buttons && buttons.map((button) => <NavbarButton
      key={button.href} {...button}/>)}
  </div>
);

export default NavbarEnd;