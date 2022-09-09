/**
 * @jest-environment @happy-dom/jest-environment
 */
import * as React from 'react';
import {render, RenderResult, screen} from '@testing-library/react';
import {ShortVideo} from "./ShortVideo";
import {VideoPlayerProps} from "./models";


it('displays a ShortVideo', () => {
    const videoPlayerProps: VideoPlayerProps = {
        slug: "some/path/index.md",
        authorLabel: "pe",
        posterURL: "poster.png",
        videoURL: "video.m3u8",
    }
    const documentResult: RenderResult = render(<ShortVideo {...videoPlayerProps}/>);
    const base = documentResult.baseElement;
    expect(screen.getByTestId('vplayer-wrapper')).toHaveClass('c-player');
    expect(base.getElementsByClassName("vjs-poster")[0].getAttribute("style")).toEqual("background-image: url(\"poster.png\");");
});
