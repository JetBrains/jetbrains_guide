import * as React from 'react';
import { Link } from 'gatsby';

export interface INavbarMenuItemProps {
  label: string;
  href: string;
  css_class?: string;
  accent?: string;
  icon?: string;
  label_narrow?: boolean;
}

const NavbarMenuItem: React.SFC<INavbarMenuItemProps> = (
  { accent, href, label, icon, css_class, label_narrow = false }) => (
  <Link className={'navbar-item bd-navbar-item-' + css_class}
        to={href}>
    <span className={'icon has-text-' + accent}>
      <i className={'fas fa-' + icon}/>
    </span>
    {label_narrow &&
    <>
      <span className="is-hidden-touch is-hidden-widescreen">
        {label_narrow}
      </span>
      <span className="is-hidden-desktop-only bulmaio-menu-label">
        {label}
      </span>
    </>
    }
    {!label_narrow &&
    <span className="bulmaio-menu-label">{label}</span>
    }
  </Link>
);

export default NavbarMenuItem;