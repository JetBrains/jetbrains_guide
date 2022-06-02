/**
 * @jest-environment @happy-dom/jest-environment
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import * as Gatsby from 'gatsby';

import SubsectionAuthor, { SubsectionAuthorProps } from './SubsectionAuthor';

const withPrefix = jest.spyOn(Gatsby, 'withPrefix');
withPrefix.mockImplementation(src => {
  return src;
});

export const DUMMY_ST: SubsectionAuthorProps = {
  title: 'title1',
  subtitle: 'subtitle1',
  href: 'href1',
  thumbnail: {
    publicURL: '/publicURL1',
    childImageSharp: {
      resized: {
        src: 'image1.png',
        height: 1,
        width: 1,
        originalName: '',
      },
      gatsbyImageData: {},
    },
  },
};

test('SubsectionAuthor', () => {
  const { getByText, getByTestId, getByAltText } = render(
    <SubsectionAuthor {...DUMMY_ST} />
  );
  expect(getByTestId('sa-href')).toHaveAttribute('href', 'href1');
  expect(getByText(DUMMY_ST.title)).toBeTruthy();
  expect(getByAltText('sa-thumbnail')).toHaveAttribute('src', 'image1.png');
  if (DUMMY_ST.subtitle) expect(getByText(DUMMY_ST.subtitle)).toBeTruthy();
});
