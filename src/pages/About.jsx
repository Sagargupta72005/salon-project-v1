import React from 'react'
import First from '../components/about/first'
import CurvedLoopedit from '../components/about/CurvedLoopedit'
import HeadingAbout from '../components/about/HeadingAbout'
import ContactMapForm from '../components/conteact/ContactMapForm'
import ContactInfo from '../components/conteact/ContactInfo'

const About = () => {
  return (
    <div>
      <HeadingAbout/>
        <First/>
        <CurvedLoopedit/>
        <ContactInfo/>
        <ContactMapForm/>

        
      
    </div>
  )
}

export default About
