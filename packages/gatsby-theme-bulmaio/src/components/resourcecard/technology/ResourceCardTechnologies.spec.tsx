import React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import { ResourceCardTechnologies, ResourceCardTechnologiesProps } from './ResourceCardTechnologies';

afterEach(cleanup);

export const DUMMY_RCTE: ResourceCardTechnologiesProps = {
  items: [
    { label: 'label1', slug: '/slug1' }
  ]
};

describe('ResourceCardTechnologies', () => {
  it('renders nothing with empty input', () => {
    const { queryByTestId } = render(<ResourceCardTechnologies items={[]}/>);
    expect(queryByTestId('rcte-key')).toBeNull();
  });

  it('renders items', () => {
    const { getByText } = render(<ResourceCardTechnologies {...DUMMY_RCTE}/>);
    const link = getByText('label1');
    expect(link).toHaveAttribute('href', '/slug1');
  });
});
