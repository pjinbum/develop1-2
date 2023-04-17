import React from 'react'
import mmoplay from './src/당신이 마주할 대전, 당신에게 대전이란.mp4'

const DejunMovie = () => {
  return (
    <div>
        <video style={{width :'100vw' , height :'100vh' , objectFit :'cover' , position :'relative' }} autoPlay>
            <source src={mmoplay} type="video/mp4" />
        </video>
    </div>
  )
}

export default DejunMovie