import * as React from 'react';
import { Link } from 'gatsby';

export interface SubsectionTopicProps {
  title: string;
  subtitle?: string;
  href: string;
  accent: string;
  icon: string;
}

const SubsectionTopic: React.FC<SubsectionTopicProps> = ({
  title,
  subtitle,
  href,
  accent,
  icon,
}) => (
  <Link data-testid={`sto-href`} className="bd-link" to={href}>
    <h2 className="bd-link-name">
      <figure className="bd-link-figure">
        <span
          data-testid={`sto-accent`}
          className={`bd-link-icon has-text-${accent}`}
        >
          <i data-testid={`sto-icon`} className={icon} />
        </span>
      </figure>
      {title}
    </h2>
    {subtitle && <p className="bd-link-subtitle">{subtitle}</p>}
  </Link>
);

export default SubsectionTopic;
