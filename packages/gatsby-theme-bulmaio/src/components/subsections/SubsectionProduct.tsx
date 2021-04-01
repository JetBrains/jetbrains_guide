import React from 'react';
import { Link } from 'gatsby';

export interface SubsectionProductProps {
  title: string;
  subtitle?: string;
  href: string;
  logo: string;
}

const SubsectionProduct: React.FC<SubsectionProductProps> = ({title, subtitle, href, logo}) => (
  <Link data-testid={`ste-href`} className="bd-link" to={href}>
    <h2 className="bd-link-name">
      <figure className="bd-link-figure">
        <div className="image is-64x64">
          <img data-testid={`ste-logo`} 
               className="bio-resourcecard-logo" 
               src={logo} 
               loading="lazy"
               alt="Logo" />
        </div>
      </figure>
      {title}
    </h2>
    {subtitle && <p className="bd-link-subtitle">{subtitle}</p>}
  </Link>
);

export default SubsectionProduct;
