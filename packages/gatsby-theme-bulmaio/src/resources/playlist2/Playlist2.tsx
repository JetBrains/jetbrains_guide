import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { Playlist2Resource } from './models';
// @ts-ignore
// noinspection ES6UnusedImports
import { SeeAlso } from '../../components2/seealso';
import SidebarLayout from '../../components/layout/SidebarLayout';
import { TwitterCardPage } from '../../components/layout/MasterLayout';

export interface PlaylistProps {
  location: {
    search: string;
  };
  data: {
    playlist2: Playlist2Resource
  }
}

const Playlist2: FC<PlaylistProps> = (
  {
    location,
    data: {
      playlist2
    }
  }) => {

  // ##### Twitter Card support
  const twitterCardPage: TwitterCardPage = {
    title: playlist2.title,
    description: playlist2.subtitle ? playlist2.subtitle : '',
    image: playlist2.cardThumbnail ? `https://www.jetbrains.com${playlist2.cardThumbnail.publicURL}` : ''
  };

  const main = (
    <div style={{ marginBottom: '3rem' }}>
      xewewe
    </div>
  );
  return (
    <SidebarLayout
      pageTitle={playlist2.title}
      subtitle={playlist2.subtitle}
      twitterCardPage={twitterCardPage}>
      {{
        // topNav,
        // bottomNav,
        // sidebar,
        main
      }}
    </SidebarLayout>
  );
};

// noinspection JSUnusedGlobalSymbols
export default Playlist2;

export const query = graphql`
  query($slug: String!) {
    playlist2(slug: { eq: $slug }) {
      label
      slug
      title
      subtitle
      slug
      body
      date(formatString: "MMMM Do, YYYY")
      author2 {
        ...ListedAuthor2Fragment
      }
      technologies2 {
        ...ListedTechnology2Fragment
      }
      topics2 {
        ...ListedTopic2Fragment
      }      
      cardThumbnail {
        publicURL
      }
      author2 {
        ...ListedAuthor2Fragment
      }      
    }
  }
`;
