/**
 * @jest-environment @happy-dom/jest-environment
 */
import * as React from 'react';
import { render } from '@testing-library/react';

import { ResourceCardMedia, ResourceCardMediaProps } from './ResourceCardMedia';

export const DUMMY_RCM: ResourceCardMediaProps = {
  href: '/href1',
  title: 'rcmtitle1',
};

export const DUMMY_RCM2: ResourceCardMediaProps = {
  href: '/href1',
  title: 'rcmtitle1',
  subtitle: 'subrcmtitle1',
};

describe('ResourceCardMedia', () => {
  it('renders with no subtitle', () => {
    const { getByText, queryByTestId } = render(
      <ResourceCardMedia {...DUMMY_RCM} />
    );
    expect(queryByTestId('rcm-href')).toHaveAttribute('href', DUMMY_RCM.href);
    expect(getByText(DUMMY_RCM.title)).toBeTruthy();
    expect(queryByTestId('rcm-subtitle')).toBeNull();
  });

  it('renders with subtitle', () => {
    const { getByText } = render(<ResourceCardMedia {...DUMMY_RCM2} />);
    if (DUMMY_RCM2.subtitle) {
      expect(getByText(DUMMY_RCM2.subtitle)).toBeTruthy();
    }
  });
});
