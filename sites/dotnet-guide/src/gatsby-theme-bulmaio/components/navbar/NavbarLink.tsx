import * as React from 'react';

export interface NavbarLinkProps {
  color: string;
  href: string;
  icon: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ href, color, icon }) => {
  if (icon === 'github')
    return ('');
  let myIcon = 'fab fa-lg fa-' + icon;
  let myStyle = {};
  if (icon.startsWith('custom-')) {
    myIcon = icon.substring('custom-'.length);
    myStyle = {
      width: '100%',
      height: '100%',
      backgroundSize: 'cover'
    };
  }
  return (
    <a data-testid={`navbarlink-a`} className="navbar-item is-hidden-touch" href={href} target="_blank">
      <span data-testid={`navbarlink-span`} className="icon" style={{ color: `#${color}` }}>
        <i data-testid={`navbarlink-i`} className={`${myIcon}`} style={myStyle} />
      </span>
    </a>
  );
};

export default NavbarLink;
