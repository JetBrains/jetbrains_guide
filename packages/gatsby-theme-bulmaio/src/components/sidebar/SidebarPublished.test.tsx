/**
 * @jest-environment @happy-dom/jest-environment
 */
import * as React from 'react';
import { render } from '@testing-library/react';

import SidebarPublished, { SidebarPublishedProps } from './SidebarPublished';

export const DUMMY_PROPS: SidebarPublishedProps = {
  date: 'date1',
  author: {
    slug: '/slug1',
    title: 'title1',
    thumbnail: {
      publicURL: '/publicURL1',
      childImageSharp: {
        resized: {
          src: '',
          height: 1,
          width: 1,
          originalName: '',
        },
        gatsbyImageData: {},
      },
    },
  },
};

test('SidebarPublished', () => {
  const { date, author } = DUMMY_PROPS;
  const { getByText } = render(<SidebarPublished {...DUMMY_PROPS} />);
  expect(getByText(date)).toBeTruthy();
  expect(getByText(author.title)).toHaveAttribute('href', author.slug);
});
