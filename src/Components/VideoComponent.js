import React, { useState } from 'react';
import './Video.css';
import { useRef } from 'react';
import VideoFooterComponent from './VideoFooterComponent';
import VideoSideBarComponent from './VideoSideBarComponent';

function VideoComponent({url,channel,description,song,likes,messages,share}) {

    const [play, setPlay] = useState(false);
    // useRef in hook
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if (play) {
            videoRef.current.pause();
            setPlay(false)
        } else {
            videoRef.current.play();
            setPlay(true)
        }

    }

    return (
        <div className="video">
            <video 
            className="video__player"
            loop
            onClick={onVideoPress}
            ref={videoRef} 
            src={url}></video>
            <VideoFooterComponent channel={channel} description={description} song={song} />
            <VideoSideBarComponent likes={likes} messages={messages} share={share} />
        </div>
    )
}

export default VideoComponent;
