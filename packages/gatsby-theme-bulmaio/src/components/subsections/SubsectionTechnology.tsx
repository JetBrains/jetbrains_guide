import * as React from 'react';
import { Link, withPrefix } from 'gatsby';
import { Thumbnail } from 'gatsby-theme-bulmaio/src/models';

export interface SubsectionTechnologyProps {
  title: string;
  subtitle?: string;
  href: string;
  logo: Thumbnail;
}

const SubsectionTechnology: React.FC<SubsectionTechnologyProps> = ({
  title,
  subtitle,
  href,
  logo,
}) => (
  <Link data-testid={`ste-href`} className="bd-link" to={href}>
    <h2 className="bd-link-name">
      <figure className="bd-link-figure">
        <div className="image is-64x64">
          <img
            data-testid={`ste-logo`}
            className="bio-resourcecard-logo"
            src={
              logo.childImageSharp
                ? withPrefix(logo.childImageSharp.resized.src)
                : logo.publicURL
            }
            alt="Logo"
          />
        </div>
      </figure>
      {title}
    </h2>
    {subtitle && <p className="bd-link-subtitle">{subtitle}</p>}
  </Link>
);

export default SubsectionTechnology;
