import React, {useEffect, useState} from 'react';
import './App.css';
import Video from "./Components/Video/Video";
import db from "./firebase";

function App() {
    const [videos,setVideos] = useState([])

    useEffect(()=>{
        db.collection('videos').onSnapshot(snapshot => setVideos(snapshot.docs.map(doc =>doc.data())))
    },[])

    console.log(videos)
    return (
        <div className="app">
            <div className="app__videos">
                {videos.map(({url,channel,description,song,likes,comments,shares})=>(
                    <Video
                        url={url}
                        channel={channel}
                        description={description}
                        song={song}
                        likes={likes}
                        comments={comments}
                        shares={shares}/>
                ))}
            </div>
        </div>
    );
}

export default App;
