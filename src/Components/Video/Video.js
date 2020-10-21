import React, {useRef, useState} from 'react';
import './Video.scss'
import Footer from "./Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";


const Video = ({url, channel, description, song, likes, comments, shares}) => {
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null)
    const onVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false)
        } else {
            videoRef.current.play();
            setPlaying(true)
        }
    }

    return (
        <div className='video'>
            <video
                className='video__player'
                loop
                ref={videoRef}
                onClick={onVideoPress}
                src={url}>
            </video>
            <Sidebar likes={likes} comments={comments} shares={shares}/>
            <Footer channel={channel} description={description}
                    song={song}/>
        </div>
    );
};

export default Video;
