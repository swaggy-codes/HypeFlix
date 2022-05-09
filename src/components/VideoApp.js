import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
// import ReactPlayer from 'react-player/lazy';

class VideoApp extends Component {
    player = {}
    state = {
        video: {
            src: "/videos/bao.mp4",
            poster: "/images/bao_1.jpg"
        }
    }

    onPlayerReady(player) {
        this.player = player;
    }

    render() {
        return (
            <div>
                {/* <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /> */}
                <hr></hr>
                <VideoPlayer
                    controls={true}
                    src={this.state.video.src}
                    poster={this.state.video.poster}
                    width="400"
                    height="200"
                    onReady={this.onPlayerReady.bind(this)}
                />
            </div>
        );
    }
}
export default VideoApp;