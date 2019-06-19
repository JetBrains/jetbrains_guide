import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { Thumbnail } from '../../models';

export interface SubsectionAuthorProps {
  title: string;
  subtitle?: string;
  href: string;
  thumbnail: Thumbnail;
}

const SubsectionAuthor: React.FC<SubsectionAuthorProps> = (
  { title, subtitle, href, thumbnail }
  ) => (
  <Link data-testid={`sa-href`} className="bd-link" to={href}>
    <h2 className="bd-link-name">
      <figure className="bd-link-figure">
        <div className="image is-rounded is-64x64">
          <Img alt={`sa-thumbnail`} className="bio-resourcecard-logo" fluid={thumbnail.childImageSharp.fluid}/>
        </div>
      </figure>
      {title}
    </h2>
    {subtitle && <p className="bd-link-subtitle">{subtitle}</p>}
  </Link>

);

export default SubsectionAuthor;
