import * as React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { ITechnologyNode } from '../types/technologies/models';
import { ITopicNode } from '../types/topics/models';

interface IAuthorProps {
  title: string;
  href: string;
  headshot: any;
  twitter?: string;
}

interface IResourceCardProps {
  title: string;
  subtitle?: string;
  href: string;
  date?: string;
  logo_href?: string;
  technologies: ITechnologyNode[];
  topics: ITopicNode[];
  author?: IAuthorProps;
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
            <Link to={props.href}>
              <strong>{props.title}</strong>
            </Link>
            {props.subtitle && <div style={{ minHeight: '2.2rem' }}>{props.subtitle}</div>}
          </div>
          <nav className="level is-mobile">
            <div className="level-left">
              {props.author && (
                <Link className="level-item bio-card-author" to={props.author.href}>
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
              {props.technologies &&
                props.technologies.map(technology => (
                  <span className="level-item bio-common-card-references" key={technology.fields.slug}>
                    <div className="tags">
                      <span className="tag is-rounded has-text-warning">
                        <Link to={technology.fields.slug} className="has-text-danger">
                          {technology.frontmatter.label}
                        </Link>
                      </span>
                    </div>
                  </span>
                ))}
              {props.topics &&
                props.topics.map(topic => (
                  <span className="level-item bio-common-card-references" key={topic.fields.slug}>
                    <div className="tags">
                      <span className="tag is-rounded">
                        <Link to={topic.fields.slug} className="has-text-primary">
                          {topic.frontmatter.label}
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
