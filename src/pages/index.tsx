import * as React from 'react';
import DefaultLayout from '../layouts/generic';
// @ts-ignore
import splash from './pycharm_splash.svg';
import { ITipsProps } from '../types/tips/Tips';
import { graphql, Link } from 'gatsby';
import { IVideoPlayer } from '../types/tips/models';
import VideoPlayer from '../components/VideoPlayer';

const dataUri = `url("${splash}") center center`;

interface ITipItemProps {
  title: string;
  subtitle?: string;
  href: string;
  shortVideo: IVideoPlayer;
}

const TipItem: React.SFC<ITipItemProps> = ({ title, subtitle, href, shortVideo }) => {
  const shortVideoJsOptions = {
    controls: true,
    poster: shortVideo.poster.publicURL,
    techOrder: ['youtube'],
    sources: [
      {
        src: shortVideo.url,
        type: 'video/youtube'
      }
    ]
  };

  return (
    <div className="bio-resourcecard box">
      <article className="media">
        <div className="media-left">
          <figure className="image" style={{ width: 480, height: 270 }}>
            <VideoPlayer {...shortVideoJsOptions} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content bio-resourcecard-props">
            <Link to={href}>
              <strong>{title}</strong>
            </Link>
            {subtitle && <div style={{ minHeight: '2.2rem' }}>{subtitle}</div>}
          </div>
        </div>
      </article>
    </div>
  );
};

const IndexPage: React.SFC<ITipsProps> = ({ data }) => {
  const items = data.tips.edges.map(edge => edge.node);

  return (
    <DefaultLayout>
      <section className="hero is-medium" style={{ background: dataUri, backgroundRepeat: 'no-repeat', backgroundSize: 1500 }}>
        <div className="hero-body">
          <div className="container">
            <h1 className="title">PyCharm Guide</h1>
            <h2 className="subtitle">Well-organized collection of learning resources for PyCharm</h2>
          </div>
        </div>
      </section>
      <section className="section has-background-light">
        <div className="container">
          <h1 className="title">Recent Tips</h1>
          <div className="columns">
            <div className="column is-four-fifths-desktop bio-resourcecards">
              {items &&
                items.map(item => {
                  const frontmatter = item.frontmatter;
                  const href = `/tips/${frontmatter.path}`;
                  return (
                    <TipItem
                      key={href}
                      title={frontmatter.title}
                      subtitle={frontmatter.subtitle}
                      href={href}
                      shortVideo={frontmatter.shortVideo}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    tips: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { eq: "tip" } } }
      limit: 3
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          id
          frontmatter {
            type
            date(formatString: "MMMM Do, YYYY")
            path
            title
            subtitle
            technologies
            topics
            author
            shortVideo {
              url
              poster {
                publicURL
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
