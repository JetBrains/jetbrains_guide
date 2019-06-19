import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import { SeeAlso } from './SeeAlso';
import { SeeAlsoProps } from './models';

const DUMMY_PROPS: SeeAlsoProps = {
  items: [
    { title: 'title1', href: '/href1' }
  ]
};

test('Displays a See Also', () => {
  const { getByText } = render(<SeeAlso {...DUMMY_PROPS} />);
  expect(getByText('title1')).toHaveAttribute('href', '/href1');
});
