import React, { useEffect, useState } from 'react'
import { IconContext } from 'react-icons';
import { AiFillPlayCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import APIkit from '../../spotify'
import "./library.css"

const Library = () => {

  const [playlists, setPlaylists] =  useState(null);

  useEffect(() => {
    APIkit.get("me/playlists").then(function (response){
      setPlaylists(response.data.items);
    })
  },[]);

  const navigate =  useNavigate();

  const playerPlay = (id) => {
    navigate("/player", {state: { id: id }})
  }

  return (
    <>
    <div className='screen-container'>
      {/* There is ? symbol after playlists means if playlists is not present  */}
      <div className="library-body">
      {playlists?.map((playlists) => {
        return(        
              <div key={playlists.id} className="playlist-card" onClick={() => playerPlay(playlists.id) }>
                <img src={playlists.images[0].url} alt="playlist-art"  className='playlist-image'/>
                 <p className='playlist-title'>{playlists.name}</p>
                 <p className='playlist-subtitle'>{playlists.tracks.total} Songs</p>
                 <div className="playlist-fade">
                  <IconContext.Provider value={{size:"50px",color:"#E99D72"}}>
                    <AiFillPlayCircle/>
                  </IconContext.Provider>
                 </div>
              </div>
        )
      })}
      </div>
    </div>
    </>
  )
}

export default Library;