import React from 'react'
import Hero from '../components/home/Hero'
import Service from '../components/home/Service'
import Trust from '../components/home/Tust'
import Booking from '../components/home/Booking'
import HomeGallery from '../components/home/HomeGallery'
import InfoSection from '../components/home/InfoSection'
import Getintouch from '../components/about/Getintouch'
import CurvedLoop from '../components/about/CurvedLoop'

const Home = () => {
  return (
    <div>
        <Hero/>
        <InfoSection/>
        <Service/>
        <Trust/>
        <HomeGallery/>
        <CurvedLoop
  marqueeText="Be ✦  Haircuts ✦ Beard Grooming ✦ Facials Styling ✦ Hair Color ✦  Scalp Treatments"
  speed={1}
  curveAmount={0}
  direction="left"
  interactive={true}
  className="custom-text-style h-20 "
/>
        <Getintouch/>
        <Booking/>
      
    </div>
  )
}

export default Home
