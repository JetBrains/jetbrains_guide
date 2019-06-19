import React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import ResourceCard, { ResourceCardProps } from './ResourceCard';
import { DUMMY_RCL } from './logo/ResourceCardLogo.spec';
import { DUMMY_RCM, DUMMY_RCM2 } from './media/ResourceCardMedia.spec';
import { DUMMY_RCA } from './author/ResourceCardAuthor.spec';
import { DUMMY_RCTE } from './technology/ResourceCardTechnologies.spec';
import { DUMMY_RCTO } from './topic/ResourceCardTopics.spec';
import { DUMMY_RCD } from './date/ResourceCardDate.spec';
import { DUMMY_RCTH } from './thumbnail/ResourceCardThumbnail.spec';

afterEach(cleanup);

export const DUMMY_RC: ResourceCardProps = {
  media: DUMMY_RCM2,
  author: DUMMY_RCA,
  technologies: DUMMY_RCTE,
  topics: DUMMY_RCTO,
  date: DUMMY_RCD
};

describe('ResourceCard', () => {
  it('should have a card with a thumbnail', () => {
    const { getByText, queryByTestId, getByAltText } = render(<ResourceCard {...DUMMY_RC} thumbnail={DUMMY_RCTH}/>);

    // Thumbnail
    expect(queryByTestId('rcl-publicURL')).toBeNull();
    expect(getByAltText('rcg-thumbnail')).toHaveAttribute('sizes', '987');

    // Media
    expect(queryByTestId('rcm-href')).toHaveAttribute('href', DUMMY_RCM.href);
    expect(getByText(DUMMY_RCM.title)).toBeTruthy();
    if (DUMMY_RCM2.subtitle) {
      expect(getByText(DUMMY_RCM2.subtitle)).toBeTruthy();
    }

    // Author
    if (DUMMY_RCA) {
      expect(getByText(DUMMY_RCA.title as string)).toBeTruthy();
    }

    // Technologies
    const technologies = getByText('label1');
    expect(technologies).toHaveAttribute('href', '/slug1');

    // Topics
    const topics = getByText('label1');
    expect(topics).toHaveAttribute('href', '/slug1');

    // Date
    const date = getByText(DUMMY_RCD.date as string);
    expect(date).toBeTruthy();
  });

  it('should have a card with a logo', () => {
    const { queryByTestId } = render(<ResourceCard {...DUMMY_RC} logo={DUMMY_RCL}/>);

    // Logo
    expect(queryByTestId('rcl-publicURL')).toHaveAttribute('src', DUMMY_RCL.publicURL);
    expect(queryByTestId('rcg-thumbnail')).toBeNull();
  });

});
