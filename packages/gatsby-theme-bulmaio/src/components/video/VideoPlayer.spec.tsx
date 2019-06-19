import React from 'react';
import { render } from 'react-testing-library';
import VideoPlayerBase from './VideoPlayerBase';

import 'jest-dom/extend-expect';

test('Displays a video player', () => {
  const { getByTestId } = render(<VideoPlayerBase />);
  expect(getByTestId('vplayer-wrapper')).toHaveClass('c-player');
});
