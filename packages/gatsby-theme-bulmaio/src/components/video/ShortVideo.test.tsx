/**
 * @jest-environment @happy-dom/jest-environment
 */
import * as React from 'react';
import {render, screen} from '@testing-library/react';
import {ShortVideo} from "./ShortVideo";
import {VideoPlayerProps} from "./models";
//
// test('Displays a ShortVideo', () => {
//     const videoPlayerProps: VideoPlayerProps = {
//         video: {
//             posterURL: "poster.png",
//             likeGIF: "foo.png"
//         }
//     }
//     render(<ShortVideo/>);
//     expect(screen.getByTestId('vplayer-wrapper')).toHaveClass('c-player');
// });
