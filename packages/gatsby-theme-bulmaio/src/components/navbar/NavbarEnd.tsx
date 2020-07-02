import * as React from 'react';
import NavbarButton, { NavbarButtonProps } from './NavbarButton';
import NavbarLink, { NavbarLinkProps } from './NavbarLink';
import NavbarSearch from './NavbarSearch';

export interface NavbarEndProps {
  buttons: NavbarButtonProps[];
  links: NavbarLinkProps[];
}

const NavbarEnd: React.FC<NavbarEndProps> = ({ links, buttons }) => {

  return (
    <div className="navbar-end">
      {links && links.map(link => <NavbarLink key={link.href} {...link} />)}
      {buttons && buttons.filter(button => button.label != 'Skip').map(button => <NavbarButton
        key={button.href} {...button} />)}

      <NavbarSearch />
    </div>
  );
};

export default NavbarEnd;
