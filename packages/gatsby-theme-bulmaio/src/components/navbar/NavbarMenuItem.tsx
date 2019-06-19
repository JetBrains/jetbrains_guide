import { Link } from 'gatsby';
import * as React from 'react';
import { NavbarSubItemProps } from './NavbarSubItem';

export interface NavbarMenuItemProps {
  accent: string;
  cssClass?: string;
  href: string;
  label: string;
  icon: string;
  labelNarrow?: boolean;
  items: NavbarSubItemProps[];
}

const NavbarMenuItem: React.FC<NavbarMenuItemProps> = ({ accent, href, label, icon, cssClass, labelNarrow = false }) => (
  <Link data-testid={`navbarmenuitem-link`} className={`navbar-item bd-navbar-item-${cssClass}`} to={href}>
    <span data-testid={`navbarmenuitem-span`} className={`icon has-text-${accent}`}>
      <i data-testid={`navbarmenuitem-i`} className={`fas fa-${icon}`} />
    </span>
    {labelNarrow && (
      <>
        <span className="is-hidden-touch is-hidden-widescreen">{labelNarrow}</span>
        <span className="is-hidden-desktop-only bulmaio-menu-label">{label}</span>
      </>
    )}
    {!labelNarrow && <span data-testid={`navbarmenuitem-label`} className="bulmaio-menu-label">{label}</span>}
  </Link>
);

export default NavbarMenuItem;
