/*

Moved the guts to a separate module because Jest/react-testing-library
and TS couldn't handle importing videojs-youtube

 */
import 'video.js/dist/video-js.css';
import VideoPlayerBase from './VideoPlayerBase';

require('videojs-youtube');

export default class VideoPlayer extends VideoPlayerBase {}
