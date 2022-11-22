import React from 'react'
import videofile from '../assets/media/Square-Reflections.mp4'

function Video() {
  return (
    <div className='h-screen'>
        <video autoPlay loop >
            <source src={videofile} type="video/mp4" />
        </video>
    </div>
  )
}

export default Video