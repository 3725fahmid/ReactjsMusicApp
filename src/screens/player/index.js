import React, { useEffect, useState } from 'react'
import './player.css'
import { useLocation } from 'react-router-dom'
import apiPlay from '../../spotify'
import SongCard from '../../components/SongCard'
import Queue from '../../components/queue'
import AudioPlaye from '../../components/audioPlaye'

const Player = () => {

  const location =  useLocation();
  // const playlist_id = location.state?.id;
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] =useState(0);

  useEffect(() => {
    if(location.state){
      apiPlay.get("playlists/" + location.state?.id + "/tracks")
      .then((res) => {
        setTracks(res.data.items);
        setCurrentTrack(res.data?.items[0]?.track)
      });
    }
  },[location.state]);

  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track);
  },[currentIndex, tracks ])

  return (
    <div className='screen-container flex'>
      <div className="left-player-body">
        <AudioPlaye currentTrack={currentTrack} 
        total={tracks}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        />
      </div>
      <div className="right-player-body">
        <SongCard album={currentTrack?.album}/>
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex}/>
      </div>
    </div>
  )
}

export default Player