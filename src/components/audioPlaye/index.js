import React from 'react'
import './audioplayer.css'
import Controls from './control';
import ProgressCircle from './ProgressCircle'
import WaveAnimation from './waveanimation';

const AudioPlaye = ({ currentTrack, isPalaying }) => {
  const artists = [];
  currentTrack?.album?.artists.forEach((artist) => {
    artists.push(artist.name)
  })
  return (
    <div className='player-body'>
        <div className="player-left-body">
            <ProgressCircle
                percentage={75}
                isPalaying={true}
                image={currentTrack?.album?.images[0]?.url}
                size={300}
                color="#C96850"
            />
        </div>
        <div className="player-right-body">
          <p className="song-title">{currentTrack?.name}</p>
          <p className="song-artist">{artists.join(" | ")}</p>
          <div className="player-right-bottom">
            <div className="song-duration">
              <p className="duration">0.01</p>
                <WaveAnimation isPalaying={isPalaying}/>
              <p className='duration'>0.30</p>
            </div>
            <Controls
              // isPalaying={isPalaying}
              // setIsPlaying={setIsPlaying}
              // handlePrev={handlePrev}
              // handleNext={handleNext}
              // total={total}
            />
          </div>
        </div>
    </div>
  )
}

export default AudioPlaye