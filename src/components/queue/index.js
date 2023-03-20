import React from 'react'
import './queue.css'

const Queue = ({tracks, setCurrentIndex}) => {
  return (
    <>
      <div className="queue-container">
        <div className="queue">
        <p className='upnext'>Up next</p>
        <div className="queue-items">
          {tracks?.map((track,index) => {
            return(
              <div className="tracks" onClick={() => setCurrentIndex(index)}>
                <p className='track-name'>{track?.track?.name}</p>
                <p className="duration">0.15</p>
              </div>
            )
          })}
        </div>
        </div>
      </div>
    </>
  )
}

export default Queue;