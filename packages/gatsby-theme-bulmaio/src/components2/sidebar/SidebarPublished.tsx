import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { Thumbnail } from '../../models';

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
      <p className="menu-label bio-page-sidebar-published">Published</p>
      <ul className="menu-list">
        <li>
          <article className="media">
            <figure className="media-left">
              <div className="image is-rounded is-48x48">
                <Img className="bio-resourcecard-logo" fluid={author.thumbnail.childImageSharp.fluid}/>
              </div>
            </figure>
            <div className="media-content">
              <div className="content">
                <div className="bio-page-sidebar-published-date">{date}</div>
                <div>by:</div>
                <Link to={author.slug}>{author.title}</Link>
              </div>
            </div>
          </article>
        </li>
      </ul>
    </div>);
};

export default SidebarPublished;
