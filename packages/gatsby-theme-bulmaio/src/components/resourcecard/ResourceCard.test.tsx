/**
 * @jest-environment @happy-dom/jest-environment
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import * as Gatsby from 'gatsby';

import ResourceCard, { ResourceCardProps } from './ResourceCard';
import { DUMMY_RCL } from './logo/ResourceCardLogo.test';
import { DUMMY_RCM, DUMMY_RCM2 } from './media/ResourceCardMedia.test';
import { DUMMY_RCA } from './author/ResourceCardAuthor.test';
import { DUMMY_RCPR } from './product/ResourceCardProducts.test';
import { DUMMY_RCTE } from './technology/ResourceCardTechnologies.test';
import { DUMMY_RCTO } from './topic/ResourceCardTopics.test';
import { DUMMY_RCD } from './date/ResourceCardDate.test';
import { DUMMY_RCTH } from './thumbnail/ResourceCardThumbnail.test';

export const DUMMY_RCRT = 'Tip';

const withPrefix = jest.spyOn(Gatsby, 'withPrefix');
withPrefix.mockImplementation(src => {
  return src;
});

export const DUMMY_RC: ResourceCardProps = {
  media: DUMMY_RCM2,
  author: DUMMY_RCA,
  products: DUMMY_RCPR,
  technologies: DUMMY_RCTE,
  topics: DUMMY_RCTO,
  date: DUMMY_RCD,
  resourceType: DUMMY_RCRT,
};

describe('ResourceCard', () => {
  it('should have a card with a thumbnail', () => {
    const { getByText, queryByTestId, getByAltText } = render(
      <ResourceCard {...DUMMY_RC} thumbnail={DUMMY_RCTH.thumbnail} />
    );

    // Thumbnail
    expect(queryByTestId('rcl-publicURL')).toBeNull();
    expect(getByAltText('rcg-thumbnail')).toHaveAttribute('src', 'image1.png');

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

    // Products
    const products = getByText('productlabel1');
    expect(products).toHaveAttribute('href', '/productslug1');

    // Technologies
    const technologies = getByText('rctelabel1');
    expect(technologies).toHaveAttribute('href', '/rcteslug1');

    // Topics
    const topics = getByText('rctolabel1');
    expect(topics).toHaveAttribute('href', '/rctoslug1');

    // Date
    const date = getByText(DUMMY_RCD.date as string);
    expect(date).toBeTruthy();
  });

  it('should have a card with a logo', () => {
    const { queryByTestId } = render(
      <ResourceCard {...DUMMY_RC} logo={DUMMY_RCL} />
    );

    // Logo
    expect(queryByTestId('rcl-publicURL')).toHaveAttribute('src', 'image1.png');
    expect(queryByTestId('rcg-thumbnail')).toBeNull();
  });
});
