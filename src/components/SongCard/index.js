import React from 'react'
import './songcard.css'
import AlbumImage from './albumImage'
import AlbumInfo from './albumInfo'

const Songcard = ({album}) => {
  return (
    <>
      <div className="song-card-body">
        <AlbumImage url={album?.images[0]?.url}/>
        <AlbumInfo album={album}/>
      </div>
    </>
  )
}

export default Songcard;