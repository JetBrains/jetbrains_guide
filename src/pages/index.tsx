import * as React from 'react';
import DefaultLayout from '../layouts/generic';
// @ts-ignore
import splash from './pycharm_splash.svg';
import { ITipsProps } from '../types/tips/Tips';
import { graphql, Link } from 'gatsby';
import VideoPlayer from '../components/VideoPlayer';
import { IVideoPlayer } from '../types/base_models';

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
      <div className="columns">
        <div className="column is-three-fifths">
          <VideoPlayer {...shortVideoJsOptions} />
        </div>
        <div className="column is-two-fifths content" style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
          <div className="content bio-resourcecard-props">
            <div>
              <div>
                <Link to={href}>
                  <strong>{title}</strong>
                </Link>
                <div>{subtitle && <div style={{ minHeight: '2.2rem' }}>{subtitle}</div>}</div>
              </div>
              <div style={{ marginTop: '1rem' }}>
                <Link className="button is-light" style={{ width: 'auto' }} to={href}>
                  More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                  const href = item.fields.slug;
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
          <div style={{ marginTop: '1rem', display: 'flex' }}>
            <Link className="button is-success" to={`/tips/`}>
              All Tips
            </Link>
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
          fields {
            slug
          }
          frontmatter {
            type
            date(formatString: "MMMM Do, YYYY")
            title
            subtitle
            technologies
            topics
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
