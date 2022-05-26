/**
 * @jest-environment @happy-dom/jest-environment
 */
import * as React from 'react';
import { render } from '@testing-library/react';

import SidebarPlaylists, { SidebarPlaylistsProps } from './SidebarPlaylists';

export const DUMMY_PROPS: SidebarPlaylistsProps = {
  playlists: [{ title: 'title1', href: '/href1' }],
};

test('SidebarPlaylists', () => {
  if (DUMMY_PROPS.playlists) {
    const first = DUMMY_PROPS.playlists[0];
    const { getByText } = render(<SidebarPlaylists {...DUMMY_PROPS} />);
    expect(getByText(first.title)).toHaveAttribute('href', first.href);
  }
});
