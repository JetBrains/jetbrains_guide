/**
 * @jest-environment @happy-dom/jest-environment
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { SeeAlsoProps } from './models';
import { SeeAlso } from './SeeAlso';

test('SeeAlso', async () => {
  const seeAlsoProps: SeeAlsoProps = {
    items: [
      {
        title: 'First',
        href: 'first',
      },
      {
        title: 'Second',
        href: 'second',
      },
    ],
  };

  const { getByText } = render(<SeeAlso {...seeAlsoProps} />);
  expect(getByText('See Also').tagName).toBe('HEADER');
  expect(getByText('First')).toHaveAttribute('href', 'first');
  expect(getByText('Second')).toHaveAttribute('href', 'second');
});
