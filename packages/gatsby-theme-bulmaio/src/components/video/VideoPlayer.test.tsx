/**
 * @jest-environment @happy-dom/jest-environment
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import VideoPlayerBase from './VideoPlayerBase';

test('Displays a video player', () => {
  const { getByTestId } = render(<VideoPlayerBase />);
  expect(getByTestId('vplayer-wrapper')).toHaveClass('c-player');
});
