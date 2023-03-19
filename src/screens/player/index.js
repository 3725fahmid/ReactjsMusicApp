import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './player.css'
import apiPlay from '../../spotify'
import SongCard from '../../components/SongCard'
import Queue from '../../components/queue'

const Player = () => {

  const location =  useLocation();
  const playlist_id = location.state?.id;
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] =useState(0);

  useEffect(() => {
    if(location.state){
      apiPlay.get(`playlists/${playlist_id}/tracks`)
      .then((res) => {
        setTracks(res.data.items);
        setCurrentTrack(res.data.items[0].track)
      });
    }
  },[location.state])

  return (
    <div className='screen-container flex'>
      <div className="left-player-body"></div>
      <div className="right-player-body">
        <SongCard album={currentTrack.album}/>
        <Queue/>
      </div>
    </div>
  )
}

export default Player