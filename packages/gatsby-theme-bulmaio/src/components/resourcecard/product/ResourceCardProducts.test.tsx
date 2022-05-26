/**
 * @jest-environment @happy-dom/jest-environment
 */
import * as React from 'react';
import { render } from '@testing-library/react';

import {
  ResourceCardProducts,
  ResourceCardProductsProps,
} from './ResourceCardProducts';

export const DUMMY_RCPR: ResourceCardProductsProps = {
  items: [{ label: 'productlabel1', slug: '/productslug1' }],
};

describe('ResourceCardProducts', () => {
  it('renders nothing with empty input', () => {
    const { queryByTestId } = render(<ResourceCardProducts items={[]} />);
    expect(queryByTestId('rcte-key')).toBeNull();
  });

  it('renders items', () => {
    const { getByText } = render(<ResourceCardProducts {...DUMMY_RCPR} />);
    const link = getByText('productlabel1');
    expect(link).toHaveAttribute('href', '/productslug1');
  });
});
