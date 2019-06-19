import React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import { ResourceCardTopics, ResourceCardTopicsProps } from './ResourceCardTopics';

afterEach(cleanup);

export const DUMMY_RCTO: ResourceCardTopicsProps = {
  items: [
    { label: 'label1', slug: '/slug1' }
  ]
};

describe('ResourceCardTopics', () => {
  it('renders nothing with empty input', () => {
    const { queryByTestId } = render(<ResourceCardTopics items={[]}/>);
    expect(queryByTestId('rcto-key')).toBeNull();
  });

  it('renders items', () => {
    const { getByText } = render(<ResourceCardTopics {...DUMMY_RCTO}/>);
    const link = getByText('label1');
    expect(link).toHaveAttribute('href', '/slug1');
  });
});
