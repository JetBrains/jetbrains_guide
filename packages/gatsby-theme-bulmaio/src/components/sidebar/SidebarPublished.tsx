import React from 'react';
import { Link } from 'gatsby';
import { Thumbnail } from '../../models';
import { withPrefix } from 'gatsby'

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
                <img
                  src={withPrefix(author.thumbnail.childImageSharp.resized.src /* TODO: need to fix this url to display image */)}
                  alt=""
                  loading="lazy"
                  width="48"
                  height="48"
                  className="bio-resourcecard-logo" />
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
    </div>
  );
};

export default SidebarPublished;
