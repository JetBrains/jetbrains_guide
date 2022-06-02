/**
 * @jest-environment @happy-dom/jest-environment
 */
import * as React from 'react';
import { render } from '@testing-library/react';

import SubsectionTopic, { SubsectionTopicProps } from './SubsectionTopic';

export const DUMMY_STO: SubsectionTopicProps = {
  title: 'title1',
  subtitle: 'subtitle1',
  href: 'href1',
  accent: 'accent1',
  icon: 'icon1',
};

test('SubsectionTopic', () => {
  const { getByText, getByTestId } = render(<SubsectionTopic {...DUMMY_STO} />);
  expect(getByTestId('sto-href')).toHaveAttribute('href', 'href1');
  expect(getByTestId('sto-accent')).toHaveClass(`has-text-${DUMMY_STO.accent}`);
  expect(getByTestId('sto-icon')).toHaveClass(DUMMY_STO.icon);
  expect(getByText(DUMMY_STO.title)).toBeTruthy();
  if (DUMMY_STO.subtitle) expect(getByText(DUMMY_STO.subtitle)).toBeTruthy();
});
