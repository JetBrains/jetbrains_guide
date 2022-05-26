import * as React from 'react';
import { Link as ScrollLink } from 'react-scroll/modules';

export interface Doclink {
  label: string;
  target: string;
}

export interface SidebarDoclinksProps {
  links: Doclink[];
}

const Doclink: React.FC<Doclink> = ({ label, target }) => (
  <li>
    <ScrollLink
      data-testid={`sapl-link`}
      activeClass="active"
      to={target}
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
      style={{ width: 'auto' }}
    >
      {label}
    </ScrollLink>
  </li>
);

const SidebarDoclinks: React.FC<SidebarDoclinksProps> = ({ links }) => (
  <div
    className="bio-page-sidebar-references-group"
    style={{ marginTop: '1rem' }}
  >
    {links.length > 0 && (
      <>
        <p className="menu-label bio-page-sidebar-published">On This Page</p>
        <ul className="menu-list">
          {links.map(link => (
            <Doclink key={link.target} {...link} />
          ))}
        </ul>
      </>
    )}
  </div>
);

export default SidebarDoclinks;
