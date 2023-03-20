import React from 'react'
import './audioplayer.css'
import ProgressCircle from './ProgressCircle'

const AudioPlaye = ({ currentTrack }) => {
  return (
    <div className='player-body'>
        <div className="player-left-body">
            <ProgressCircle
                percentage={75}
                isPalaying={true}
                image={currentTrack?.preview_url}
                size={300}
                color="#C9685e"
            />
        </div>
        <div className="player-right-body">{ currentTrack?.name}</div>
    </div>
  )
}

export default AudioPlaye