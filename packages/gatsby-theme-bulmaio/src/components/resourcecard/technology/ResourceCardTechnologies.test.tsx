/**
 * @jest-environment @happy-dom/jest-environment
 */
import * as React from 'react';
import { render } from '@testing-library/react';

import {
  ResourceCardTechnologies,
  ResourceCardTechnologiesProps,
} from './ResourceCardTechnologies';

export const DUMMY_RCTE: ResourceCardTechnologiesProps = {
  items: [{ label: 'rctelabel1', slug: '/rcteslug1' }],
};

describe('ResourceCardTechnologies', () => {
  it('renders nothing with empty input', () => {
    const { queryByTestId } = render(<ResourceCardTechnologies items={[]} />);
    expect(queryByTestId('rcte-key')).toBeNull();
  });

  it('renders items', () => {
    const { getByText } = render(<ResourceCardTechnologies {...DUMMY_RCTE} />);
    const link = getByText('rctelabel1');
    expect(link).toHaveAttribute('href', '/rcteslug1');
  });
});
