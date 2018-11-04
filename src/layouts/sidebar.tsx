import * as React from 'react';
import Helmet from 'react-helmet';

import './index.scss';
// @ts-ignore
import favicon from './jetbrains_favicon.ico';

import Navbar from '../components/navbar/Navbar';
import { NAVBAR } from '../components/navbar/constants';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

interface IPublished {
  date: string;
  author: {
    href: string;
    title: string;
    headshot: any;
  };
}

const Published: React.SFC<IPublished> = ({ date, author }) => (
  <div className="bio-page-sidenav-published-heading">
    <p className="menu-label bio-page-sidebar-published">Published</p>
    <ul className="menu-list">
      <li>
        <article className="media">
          <figure className="media-left">
            <div className="image is-rounded is-48x48">
              <Img className="bio-resourcecard-logo" fluid={author.headshot.childImageSharp.fluid} />
            </div>
          </figure>
          <div className="media-content">
            <div className="content">
              <div className="bio-page-sidebar-published-date">{date}</div>
              <div>by:</div>
              <Link to={author.href}>{author.title}</Link>
            </div>
          </div>
        </article>
      </li>
    </ul>
  </div>
);

interface IReferenceGroup {
  reftype: string;
  accent: string;
  references: string[];
}

const ReferenceGroup: React.SFC<IReferenceGroup> = ({ reftype, accent, references }) => (
  <div className="bio-page-sidebar-references-group">
    <p className="menu-label" style={{ marginTop: '1rem' }}>
      <span style={{ textTransform: 'uppercase' }} className="bio-page-sidebar-references-reftype">
        {reftype}
      </span>
    </p>
    <div>
      {references.map(reference => (
        <Link
          to={`/${reftype}/${reference}`}
          key={reference}
          style={{ display: 'inline-block', margin: '0 0.2rem' }}
          className="bio-page-sidebar-references-href"
        >
          <span className={`tag bio-page-sidebar-references-label has-text-${accent}`}>{reference}</span>
        </Link>
      ))}
    </div>
  </div>
);

interface ISidebar {
  published: IPublished;
  technologies: string[];
  topics: string[];
}

interface SidebarLayoutProps extends React.HTMLProps<HTMLDivElement> {
  title: string;
  subtitle?: string;
  sidebar: ISidebar;
}

class SidebarLayout extends React.PureComponent<SidebarLayoutProps, {}> {
  public render() {
    const published = this.props.sidebar.published;
    return (
      <div>
        <Helmet
          title={`${this.props.title} - PyCharm Guide`}
          meta={[{ name: 'description', content: 'template' }, { name: 'keywords', content: 'template, something' }]}
        >
          <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js" />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <html lang="en" />
          <body className="layout-default" />
          <link rel="shortcut icon" href={favicon} />
        </Helmet>
        <Navbar {...NAVBAR} />

        <main className="bd-main bulmaio-body">
          <div className="bd-side-background" />
          <div className="bd-main-container container">
            <div className="bd-duo">
              <div className="bd-lead">
                <Heading title={this.props.title} subtitle={this.props.subtitle} />
                {this.props.children}
              </div>

              <aside className="bd-side bio-page-sidebar">
                {published && <Published {...published} />}
                <ReferenceGroup reftype="technologies" accent="danger" references={this.props.sidebar.technologies} />
                <ReferenceGroup reftype="topics" accent="primary" references={this.props.sidebar.topics} />
              </aside>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default SidebarLayout;
