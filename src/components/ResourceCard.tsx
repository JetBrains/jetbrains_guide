import { Link } from 'gatsby';
import Img from 'gatsby-image';
import * as React from 'react';
import { IListingCategoryItem } from './ListingWrapper';

export interface IResourceCardProps {
  title: string;
  subtitle?: string;
  slug: string;
  date?: string;
  logo_href?: string;
  technologies: IListingCategoryItem[];
  topics: IListingCategoryItem[];
  author?: IListingCategoryItem;
  thumbnail?: any;
}

const ResourceCard: React.FunctionComponent<IResourceCardProps> = props => {
  return (
    <div className="bio-resourcecard box">
      <article className="media">
        <div className="media-left">
          {props.logo_href && (
            <figure className="image is-64x64 }">
              <img src={props.logo_href} alt="Logo" />
            </figure>
          )}
          {props.thumbnail && (
            <figure className="image is-96x96 }">
              <Img fluid={props.thumbnail.childImageSharp.fluid} />
            </figure>
          )}
        </div>
        <div className="media-content">
          <div className="content bio-resourcecard-props">
            <Link to={props.slug}>
              <strong>{props.title}</strong>
            </Link>
            {props.subtitle && <div style={{ minHeight: '2.2rem' }}>{props.subtitle}</div>}
          </div>
          <nav className="level is-mobile">
            <div className="level-left">
              {props.author && (
                <Link className="level-item bio-card-author" to={props.author.slug}>
                  <figure className="image is-rounded is-24x24">
                    {props.author.headshot && (
                      <div className="image is-rounded is-24x24">
                        <Img className="bio-resourcecard-logo" fluid={props.author.headshot.childImageSharp.fluid} />
                      </div>
                    )}
                  </figure>
                  <span className="bio-card-author-label">{props.author.title}</span>
                </Link>
              )}
              {props.technologies.length > 0 &&
                props.technologies.map(technology => (
                  <span className="level-item bio-common-card-references" key={technology.slug}>
                    <div className="tags">
                      <span className="tag is-rounded has-text-warning">
                        <Link to={technology.slug} className="has-text-danger">
                          {technology.label}
                        </Link>
                      </span>
                    </div>
                  </span>
                ))}
              {props.topics.length > 0 &&
                props.topics.map(topic => (
                  <span className="level-item bio-common-card-references" key={topic.slug}>
                    <div className="tags">
                      <span className="tag is-rounded">
                        <Link to={topic.slug} className="has-text-primary">
                          {topic.label}
                        </Link>
                      </span>
                    </div>
                  </span>
                ))}
            </div>
            {props.date && (
              <div className="level-right is-size-7 has-text-grey">
                <span className="level-item bio-common-card-published">{props.date}</span>
              </div>
            )}
          </nav>
        </div>
      </article>
    </div>
  );
};

export default ResourceCard;
