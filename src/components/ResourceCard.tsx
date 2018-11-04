import * as React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

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
  technologies: string[];
  topics: string[];
  author?: IAuthorProps;
  thumbnail?: any;
}

const ResourceCard: React.SFC<IResourceCardProps> = (props) => {
  return (
    <div className="bio-resourcecard box">
      <article className="media">
        <div className="media-left">
          {props.logo_href && (
            <figure className="image is-64x64 }">
              <img src={props.logo_href} alt="Logo"/>
            </figure>
          )}
          {props.thumbnail && (
            <figure className="image is-128x128 }">
              <Img fluid={props.thumbnail.childImageSharp.fluid}/>
            </figure>
          )}
        </div>
        <div className="media-content">
          <div className="content bio-resourcecard-props">
            <p>
              <Link to={props.href}>
                <strong>{props.title}</strong>
              </Link>
              {props.subtitle &&
              <>
                <br/>
                <span>{props.subtitle}</span>
              </>
              }
            </p>
          </div>
          <nav className="level is-mobile">
            <div className="level-left">
              {props.author && (
                <Link className="level-item bio-card-author"
                      to={props.author.href}>
                  <figure className="image is-rounded is-24x24">
                    {props.author.headshot && (
                      <div className="image is-rounded is-24x24">
                        <Img className="bio-resourcecard-logo"
                             fluid={props.author.headshot.childImageSharp.fluid}/>
                      </div>
                    )}
                  </figure>
                  <span className="bio-card-author-label">{props.author.title}</span>
                </Link>
              )}
              {props.technologies.map(technology => (
                <span className="level-item bio-common-card-references"
                      key={technology}>
                  <div className="tags">
                    <span className="tag is-rounded">
                      <Link to={`/technologies/${technology}`}>
                        {technology}
                      </Link>
                    </span>
                  </div>
                </span>
              ))}
              {props.topics.map(topic => (
                <span className="level-item bio-common-card-references"
                      key={topic}>
                  <div className="tags">
                    <span className="tag is-rounded">
                      <Link to={`/topics/${topic}`}>
                        {topic}
                      </Link>
                    </span>
                  </div>
                </span>
              ))}
            </div>
            {props.date && (
              <div className="level-right is-size-7 has-text-grey">
                <span className="level-item bio-common-card-published">
                  {props.date}
                </span>
              </div>
            )}
          </nav>
        </div>
      </article>
    </div>
  );
};

export default ResourceCard;