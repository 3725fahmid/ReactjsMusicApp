import React from 'react'
import APIkit from '../../spotify'

const Library = () => {
  APIkit.get("me/playlists").then(function (response){
    console.log(response.data);
  })
  return (
    <div className='screen-container'>library</div>
  )
}

export default Library;