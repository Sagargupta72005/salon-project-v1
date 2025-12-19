import React from 'react'
import Womenlist from '../components/service/Womenlist'
import Boylist from '../components/service/Boylist'
import CurvedLoopedit from '../components/about/CurvedLoopedit'
import Hservice from '../components/service/Hservice'


const ServicePage = () => {
  return (
    <div>
      <Hservice/>
        <Womenlist/>
        <CurvedLoopedit/>
        <Boylist/>
      
    </div>
  )
}

export default ServicePage
