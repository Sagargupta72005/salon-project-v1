import React from 'react'
import Gallery from '../components/albums/Gallery'
import Gahead from '../components/albums/Gahead'
import { Helmet } from 'react-helmet-async'

const Gallerypage = () => {
  return (
    <div>
       <Helmet>
              <title>My Salon| Gallery</title>
              <meta name="description" content="Official website for My React Website." />
              <meta name="author" content="Your Name or Company" />
              <meta name="keywords" content="react, web app, product name" />
            </Helmet>
      <Gahead/>
      <Gallery/>
      
    </div>
  )
}

export default Gallerypage
