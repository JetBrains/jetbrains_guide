import * as React from 'react';
import videojs from 'video.js';
import {VideoPlayerPropsInferface} from "./models";


export default class VideoPlayerBase extends React.Component {
    private player?: videojs.Player;
    private videoNode?: HTMLVideoElement;

    constructor(props: VideoPlayerPropsInferface) {
        // Add in some default video props
        super(props);
        this.player = undefined;
        this.videoNode = undefined;
    }

    componentDidMount() {
        if (this.videoNode) {
            this.player = videojs(this.videoNode, this.props);
        }
    }

    componentWillUnmount() {
        if (this.player) {
            this.player.dispose();
        }
    }

    // wrap the player in a div with a `data-vjs-player` attribute
    // so videojs won't create additional wrapper in the DOM s
    // see https://github.com/videojs/video.js/pull/3856
    render() {
        return (
            <div data-testid={`vplayer-wrapper`} className="c-player">
                <div className="c-player__screen" data-vjs-player="true">
                    <video role="player"
                        ref={(node: HTMLVideoElement) => (this.videoNode = node)}
                        className="video-js vjs-default-skin vjs-16-9 vjs-big-play-centered"
                    />
                </div>
            </div>
        );
    }
}
