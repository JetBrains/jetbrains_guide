import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import SidebarReferenceGroup, { SidebarReferencesGroupProps } from './SidebarReferencesGroup';

export const DUMMY_PROPS: SidebarReferencesGroupProps = {
  reftype: 'reftype1',
  accent: 'accent1',
  references: ['ref1', 'ref2']
};

test('SidebarReferenceGroup', () => {
  const { reftype, accent, references } = DUMMY_PROPS;
  const { getByText, getByTestId } = render(<SidebarReferenceGroup {...DUMMY_PROPS}/>);
  expect(getByText(reftype)).toBeTruthy();
  expect(getByTestId('srg-link')).toHaveAttribute('href', `/reftype1/${references[0]}`);
  expect(getByText(references[0])).toHaveClass(`has-text-${accent}`);
});
