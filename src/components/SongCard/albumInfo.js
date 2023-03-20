import React from 'react'
import './albumInfo.css'


const albumInfo = ({ album }) => {

  const artists = [];
  album?.artists?.forEach((elm) => {
    artists.push(elm.name)
  });

  return (
    <>
      <div className='albumInfo-card'>
        <div className="albumName-container">
          <div className="marque">
            <p>{album?.name + " - " + artists?.join(",")}</p>
          </div>
        </div>
        <div className="album-info">
          <p>{`${album?.name} is an ${album?.album_type} by ${artists?.join(",")} with ${album?.total_tracks} tracks`}</p>
        </div>
        <div className="album-release">
          <p>Release Date: {album?.release_date}</p>
        </div>
      </div>
    </>
  )
}

export default albumInfo