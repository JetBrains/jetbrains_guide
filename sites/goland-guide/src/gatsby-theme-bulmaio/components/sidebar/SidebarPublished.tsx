import React from 'react';
import { Thumbnail } from 'gatsby-theme-bulmaio/src/models';

export interface SidebarPublishedProps {
  date: string;
  author: {
    slug: string;
    title: string;
    thumbnail: Thumbnail;
  };
}

const SidebarPublished: React.FC<SidebarPublishedProps> = (
  { date, author }
) => {
  return (
    <div className="bio-page-sidenav-published-heading">
      <p className="menu-label bio-page-sidebar-published">Published on:</p>
      <ul className="menu-list">
        <li>
          <article className="media">
            <div className="media-content">
              <div className="content">
                <div className="bio-page-sidebar-published-date">{date}</div>
              </div>
            </div>
          </article>
        </li>
      </ul>
    </div>
  );
};

export default SidebarPublished;
