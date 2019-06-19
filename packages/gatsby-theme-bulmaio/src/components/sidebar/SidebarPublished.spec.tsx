import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import SidebarPublished, { SidebarPublishedProps } from './SidebarPublished';

export const DUMMY_PROPS: SidebarPublishedProps = {
  date: 'date1',
  author: {
    slug: '/slug1',
    title: 'title1',
    thumbnail: {
      publicURL: '/publicURL1',
      childImageSharp: {
        fluid: { aspectRatio: 9, src: 'src', srcSet: 'src', sizes: '9' }
      }
    }
  }
};

test('SidebarPublished', () => {
  const { date, author } = DUMMY_PROPS;
  const { getByText } = render(<SidebarPublished {...DUMMY_PROPS}/>);
  expect(getByText(date)).toBeTruthy();
  expect(getByText(author.title)).toHaveAttribute('href', author.slug);
});
