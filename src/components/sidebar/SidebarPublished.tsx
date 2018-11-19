import React from 'react';

import Img from 'gatsby-image';
import { Link } from 'gatsby';

interface ISidebarPublishedProps {
  date: string;
  author: {
    href: string;
    title: string;
    headshot: any;
  };
}

const SidebarPublished: React.SFC<ISidebarPublishedProps> = ({ date, author }) => (
  <div className="bio-page-sidenav-published-heading">
    <p className="menu-label bio-page-sidebar-published">Published</p>
    <ul className="menu-list">
      <li>
        <article className="media">
          <figure className="media-left">
            <div className="image is-rounded is-48x48">
              <Img className="bio-resourcecard-logo" fluid={author.headshot.childImageSharp.fluid} />
            </div>
          </figure>
          <div className="media-content">
            <div className="content">
              <div className="bio-page-sidebar-published-date">{date}</div>
              <div>by:</div>
              <Link to={author.href}>{author.title}</Link>
            </div>
          </div>
        </article>
      </li>
    </ul>
  </div>
);

export default SidebarPublished;
