/**
 * @jest-environment @happy-dom/jest-environment
 */
import * as React from 'react';
import { render } from '@testing-library/react';

import {
  ResourceCardTopics,
  ResourceCardTopicsProps,
} from './ResourceCardTopics';

export const DUMMY_RCTO: ResourceCardTopicsProps = {
  items: [{ label: 'rctolabel1', slug: '/rctoslug1' }],
};

describe('ResourceCardTopics', () => {
  it('renders nothing with empty input', () => {
    const { queryByTestId } = render(<ResourceCardTopics items={[]} />);
    expect(queryByTestId('rcto-key')).toBeNull();
  });

  it('renders items', () => {
    const { getByText } = render(<ResourceCardTopics {...DUMMY_RCTO} />);
    const link = getByText('rctolabel1');
    expect(link).toHaveAttribute('href', '/rctoslug1');
  });
});
