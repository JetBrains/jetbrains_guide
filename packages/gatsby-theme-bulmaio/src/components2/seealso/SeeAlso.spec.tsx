import React from 'react';
import { render } from '@testing-library/react';
import { SeeAlsoProps } from './models';
import { SeeAlso } from './SeeAlso';

test('SeeAlso', async () => {
  const seeAlsoProps: SeeAlsoProps = {
    items: [
      {
        title: 'First',
        href: 'first'
      },
      {
        title: 'Second',
        href: 'second'
      },
    ]
  };

  const { getByText } = render(<SeeAlso {...seeAlsoProps} />);
  expect(getByText('See Also').tagName).toBe('HEADER');
  const first = getByText('First');
  expect(first.getAttribute('href')).toBe('first');
  const second = getByText('Second');
  expect(second.getAttribute('href')).toBe('second');
});
