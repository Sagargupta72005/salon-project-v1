import React from 'react'
import WaterButton from './WaterButton'

const Btnuse = () => {
  return (
    <div>
         <div className="flex gap-4">

      <WaterButton
        text="View Services"
        href="/services"
        circleSize={100}
      />
    </div>
      
    </div>
  )
}

export default Btnuse
