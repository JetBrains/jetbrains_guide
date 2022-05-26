/**
 * @jest-environment @happy-dom/jest-environment
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import * as Gatsby from 'gatsby';

import SubsectionTechnology, {
  SubsectionTechnologyProps,
} from './SubsectionTechnology';

const withPrefix = jest.spyOn(Gatsby, 'withPrefix');
withPrefix.mockImplementation(src => {
  return src;
});

export const DUMMY_STE: SubsectionTechnologyProps = {
  title: 'title1',
  subtitle: 'subtitle1',
  href: 'href1',
  logo: {
    publicURL: '',
    childImageSharp: {
      resized: {
        originalName: '',
        width: 1,
        height: 1,
        src: 'image1.png',
      },
      gatsbyImageData: {},
    },
  },
};

test('SubsectionTechnology', () => {
  const { getByText, getByTestId } = render(
    <SubsectionTechnology {...DUMMY_STE} />
  );
  expect(getByTestId('ste-href')).toHaveAttribute('href', 'href1');
  expect(getByTestId('ste-logo')).toHaveAttribute('src', 'image1.png');
  expect(getByText(DUMMY_STE.title)).toBeTruthy();
  if (DUMMY_STE.subtitle) expect(getByText(DUMMY_STE.subtitle)).toBeTruthy();
});
