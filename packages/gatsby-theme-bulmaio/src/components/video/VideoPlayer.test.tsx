/**
 * @jest-environment @happy-dom/jest-environment
 */
import * as React from 'react';
import {render, screen} from '@testing-library/react';
import VideoPlayerBase from './VideoPlayerBase';

test('Displays a video player', () => {
    render(<VideoPlayerBase/>);
    expect(screen.getByTestId('vplayer-wrapper')).toHaveClass('c-player');
});
