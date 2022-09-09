/**
 * @jest-environment @happy-dom/jest-environment
 */
import * as React from 'react';
import {render, RenderResult, screen} from '@testing-library/react';
import {ShortVideo} from "./ShortVideo";
import {VideoDetailsProps, VideoPlayerProps} from "./models";
import {extractVideoDetails} from "./index";

let documentResult: RenderResult;
const thisFile = 'refactor-rename';

it('displays a ShortVideo', () => {
    const videoPlayerProps: VideoPlayerProps = {
        slug: `/tips/${thisFile}/`,
        authorLabel: "pe",
        posterURL: "poster.png",
        videoURL: "video.m3u8",
    }
    documentResult = render(<ShortVideo {...videoPlayerProps}/>);
    const base = documentResult.baseElement;
    expect(screen.getByTestId('vplayer-wrapper')).toHaveClass('c-player');
    expect(base.getElementsByClassName("vjs-poster")[0].getAttribute("style")).toEqual("background-image: url(\"poster.png\");");
});

it('discovers a YouTube video with one URL', () => {
    const props: VideoDetailsProps = {
        slug: `/tips/${thisFile}/`,
        authorLabel: "pe",
        videoURL: "https://www.youtube.com/1",
        posterNumber: undefined,
        posterURL: "poster.png",
    }
    const result = extractVideoDetails(props);
    expect(result.poster).toEqual(props.posterURL);
    expect(result.sources[0].src).toEqual(props.videoURL);
    expect(result.sources[0].type).toEqual("video/youtube");
})

it('discovers AWS Video with explicit poster URL', () => {
    const props: VideoDetailsProps = {
        slug: `/tips/${thisFile}/`,
        authorLabel: "pe",
        videoURL: "http://myplace.com/1",
        posterNumber: 3,
        posterURL: "poster.png",
    }
    const result = extractVideoDetails(props);
    expect(result.poster).toEqual(props.posterURL);
    expect(result.sources[0].src).toEqual(props.videoURL);
    expect(result.sources[0].type).toBeUndefined();
});

it('discovers AWS Video without explicit poster URL', () => {
    const props: VideoDetailsProps = {
        slug: `/tips/${thisFile}/`,
        authorLabel: "pe",
        videoURL: "http://myplace.com/1",
        posterNumber: 3,
    }
    const result = extractVideoDetails(props);
    expect(result.poster).toContain('refactor-rename.0000003.jpg');
});

it('discovers AWS Video with an explicit video URL', () => {
    const props: VideoDetailsProps = {
        slug: `/tips/${thisFile}/`,
        authorLabel: "pe",
        videoURL: "http://myplace.com/1",
        posterNumber: 3,
    }
    const result = extractVideoDetails(props);
    expect(result.sources[0].src).toEqual(props.videoURL);
    expect(result.sources[0].type).toBeUndefined();
});

it('discovers AWS Video with no video URL', () => {
    // Infers from authorLabel and slug
    const props: VideoDetailsProps = {
        slug: `/tips/${thisFile}/`,
        authorLabel: "pwe",
        posterNumber: 3,
    }
    const result = extractVideoDetails(props);
    const thisEnd = `${props.authorLabel}/${thisFile}/HLS/${thisFile}.m3u8`;
    expect(result.sources[0].src.endsWith(thisEnd)).toBeTruthy();
    expect(result.sources[0].type).toBeUndefined();
});

it('discovers more nested AWS Video with no video URL', () => {
    // Infers from authorLabel and slug
    const parents = 'f1/f2';
    const props: VideoDetailsProps = {
        slug: `/tips/${parents}/${thisFile}/`,
        authorLabel: "pwe",
        posterNumber: 3,
    }
    const result = extractVideoDetails(props);
    const thisEnd = `${props.authorLabel}/${parents}/${thisFile}/HLS/${thisFile}.m3u8`;
    expect(result.sources[0].src.endsWith(thisEnd)).toBeTruthy();
    expect(result.sources[0].type).toBeUndefined();
});
