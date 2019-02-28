import { Link } from 'gatsby';
import Img from 'gatsby-image';
import * as React from 'react';

interface ITechnologyEntry {
  title: string;
  subtitle?: string;
  href: string;
  logo: any;
}

interface ITopicEntry {
  title: string;
  subtitle?: string;
  href: string;
  accent: string;
  icon: string;
}

interface IAuthorEntry {
  title: string;
  subtitle?: string;
  href: string;
  headshot: any;
}
interface IPlaylistEntry {
  title: string;
  subtitle?: string;
  href: string;
  thumbnail: any;
}

export const SubsectionAuthor: React.FunctionComponent<IAuthorEntry> = entry => (
  <Link className="bd-link" to={entry.href}>
    <h2 className="bd-link-name">
      <figure className="bd-link-figure">
        <div className="image is-rounded is-64x64">
          <Img className="bio-resourcecard-logo" fluid={entry.headshot.childImageSharp.fluid} />
        </div>
      </figure>
      {entry.title}
    </h2>
    {entry.subtitle && <p className="bd-link-subtitle">{entry.subtitle}</p>}
  </Link>
);

export const SubsectionPlaylist: React.FunctionComponent<IPlaylistEntry> = entry => (
  <Link className="bd-link" to={entry.href}>
    <h2 className="bd-link-name">
      <figure className="bd-link-figure">
        <div className="image is-64x64">
          <Img className="bio-resourcecard-logo" fluid={entry.thumbnail.childImageSharp.fluid} />
        </div>
      </figure>
      {entry.title}
    </h2>
    {entry.subtitle && <p className="bd-link-subtitle">{entry.subtitle}</p>}
  </Link>
);

export const SubsectionTopic: React.FunctionComponent<ITopicEntry> = entry => (
  <Link className="bd-link" to={entry.href}>
    <h2 className="bd-link-name">
      <figure className="bd-link-figure">
        <span className={`bd-link-icon has-text-${entry.accent}`}>
          <i className={entry.icon} />
        </span>
      </figure>
      {entry.title}
    </h2>
    {entry.subtitle && <p className="bd-link-subtitle">{entry.subtitle}</p>}
  </Link>
);

export const SubsectionTechnology: React.FunctionComponent<ITechnologyEntry> = entry => (
  <Link className="bd-link" to={entry.href}>
    <h2 className="bd-link-name">
      <figure className="bd-link-figure">
        <div className="image is-64x64">
          <img className="bio-resourcecard-logo" src={entry.logo} alt="Logo" />
        </div>
      </figure>
      {entry.title}
    </h2>
    {entry.subtitle && <p className="bd-link-subtitle">{entry.subtitle}</p>}
  </Link>
);
