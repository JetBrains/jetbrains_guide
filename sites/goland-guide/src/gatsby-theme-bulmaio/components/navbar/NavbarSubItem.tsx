import { Link } from 'gatsby';
import * as React from 'react';

export interface NavbarSubItemProps {
  accent: string;
  description: string;
  href: string;
  icon: string;
  label?: string;
}

const NavbarSubItem: React.FC<NavbarSubItemProps> = ({ accent, href, label, icon, description }) => (
  <Link data-testid={`navbarsubitem-link`} className="navbar-item" to={href}>
    <span>
      <span data-testid={`navbarsubitem-span`} className={`icon has-text-${accent}`}>
        <i data-testid={`navbarsubitem-i`} className={`fas fa-${icon}`} />
      </span>
      <strong data-testid={`navbarsubitem-strong`}>{label}</strong>
      {label && (
        <>
          <br />
          <span data-testid={`navbarsubitem-span2`} className="bio-dropdown-description">{description}</span>
        </>
      )}
    </span>
  </Link>
);

export default NavbarSubItem;
