/*

A HoC to extract content from outside world, mainly references and
flattening.

 */

import { parse } from 'qs';
import * as React from 'react';

import { IAuthorEdge, IAuthorEdges } from '../authors/models';
import { IBaseResourceEdges, IBaseResourceNode } from '../base_models';
import { IPlaylistEdges } from '../playlists/models';
import { ITipNode } from './models';

export interface ITipWrapperProps {
  location: {
    search: string;
  };
  data: {
    tip: ITipNode;
    authors: { edges: IAuthorEdges };
    resources: {
      edges: IBaseResourceEdges;
    };
    playlists: {
      edges: IPlaylistEdges;
    };
  };
}

const TipWrapper = (Component: any) => ({ data: { tip, authors, resources, playlists }, location }: ITipWrapperProps) => {
  const search = location.search ? parse(location.search.substring(1)) : null;
  const playlistLabel = search.playlist;

  const tipNode = {
    ...tip.frontmatter,
    slug: tip.fields.slug,
    excerpt: tip.excerpt,
    html: tip.html
  };

  // Flatten the author
  const authorEdge: IAuthorEdge | undefined = authors.edges.find(edge => edge.node.frontmatter.label === tip.frontmatter.author);
  const author = authorEdge
    ? {
        ...authorEdge.node.frontmatter,
        slug: authorEdge.node.fields.slug
      }
    : undefined;

  // If we have a playlist label from the query string or cookie,
  // grab the playlist and dereference its items
  if (playlistLabel) {
    const playlistEdge = playlists.edges.find(resource => {
      const fm = resource.node.frontmatter;
      return fm.label === playlistLabel;
    });

    if (playlistEdge) {
      // Make a mapping of all resources, slug -> resource
      const allResources: { [s: string]: IBaseResourceNode } = {};
      resources.edges.map(edge => (allResources[edge.node.fields.slug] = edge.node));

      // Flatten the playlist steps
      const playlistNode = playlistEdge.node;
      const playlistItems = playlistNode.frontmatter.items.map(itemSlug => allResources[itemSlug]);
      return <Component resource={tipNode} author={author} playlist={playlistNode} playlistItems={playlistItems} />;
    }
  }

  return <Component resource={tipNode} author={author} />;
};

export default TipWrapper;
