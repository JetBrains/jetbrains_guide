import React from 'react';

import { Link as ScrollLink } from 'react-scroll/modules';

export interface IDoclink {
  label: string;
  target: string;
}

export interface ISidebarDoclinksProps {
  links: IDoclink[];
}

const Doclink: React.SFC<IDoclink> = ({ label, target }) => (
  <li>
    <ScrollLink activeClass="active" to={target} spy={true} smooth={true} offset={0} duration={500} style={{ width: 'auto' }}>
      {label}
    </ScrollLink>
  </li>
);

const SidebarDoclinks: React.SFC<ISidebarDoclinksProps> = ({ links }) => {
  return (
    <div className="bio-page-sidebar-references-group" style={{ marginTop: '1rem' }}>
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
};

export default SidebarDoclinks;
