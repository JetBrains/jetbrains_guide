import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { Tip2Resource } from './models';
// @ts-ignore
// noinspection ES6UnusedImports
import { SeeAlso } from '../../components2/seealso';
import SidebarLayout from '../../components/layout/SidebarLayout';
import { TwitterCardPage } from '../../components/layout/MasterLayout';
import { Tip2Sidebar } from '../../components2/tipsidebar/Tip2Sidebar';

export interface TipProps {
  location: {
    search: string;
  };
  data: {
    tip2: Tip2Resource
  }
}

const Tip2: FC<TipProps> = (
  {
    location,
    data: {
      tip2
    }
  }) => {

  // ##### Twitter Card support
  const twitterCardPage: TwitterCardPage = {
    title: tip2.title,
    description: tip2.subtitle ? tip2.subtitle : '',
    image: tip2.cardThumbnail ? `https://www.jetbrains.com${tip2.cardThumbnail.publicURL}` : ''
  };

  // ##### Sidebars
  const sidebar = <Tip2Sidebar
    date={tip2.date}
    author={tip2.author2}
    technologies={tip2.technologies2}
    topics={tip2.topics2}
    body={tip2.body}
    seealso={tip2.seealso}
    longVideo={tip2.longVideo}
    inPlaylists={[]}
  />;


  const main = <div>xx</div>
  return (
    <SidebarLayout
      pageTitle={tip2.title}
      subtitle={tip2.subtitle}
      twitterCardPage={twitterCardPage}>
      {{
        // topNav,
        // bottomNav,
        sidebar,
        main
      }}
    </SidebarLayout>
  )
};

// noinspection JSUnusedGlobalSymbols
export default Tip2;

export const query = graphql`
  query($slug: String!) {
    tip2(slug: { eq: $slug }) {
      label
      slug
      title
      subtitle
      slug
      date(formatString: "MMMM Do, YYYY")
      author2 {
        ...ListedAuthor2Fragment
      }
      cardThumbnail {
        publicURL
      }
      date(formatString: "MMMM Do, YYYY")
      animatedGif {
        file {
            publicURL
        }
        width
        height
      }
      shortVideo {
        ...VideoFragment
      }
      longVideo {
        ...VideoFragment
      }
      leadin
      author2 {
        ...ListedAuthor2Fragment
      }      
    }
  }
`;
