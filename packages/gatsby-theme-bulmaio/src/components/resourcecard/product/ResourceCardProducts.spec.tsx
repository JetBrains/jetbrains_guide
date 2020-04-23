import React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import { ResourceCardProducts, ResourceCardProductsProps } from './ResourceCardProducts';

afterEach(cleanup);

export const DUMMY_RCPR: ResourceCardProductsProps = {
  items: [
    { label: 'label1', slug: '/slug1' }
  ]
};

describe('ResourceCardTechnologies', () => {
  it('renders nothing with empty input', () => {
    const { queryByTestId } = render(<ResourceCardProducts items={[]}/>);
    expect(queryByTestId('rcpr-key')).toBeNull();
  });

  it('renders items', () => {
    const { getByText } = render(<ResourceCardProducts {...DUMMY_RCPR}/>);
    const link = getByText('label1');
    expect(link).toHaveAttribute('href', '/slug1');
  });
});
