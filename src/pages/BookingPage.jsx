import React from 'react'
import BookingB from '../components/bookingpage/BookingB'
import HeadBooking from '../components/bookingpage/HeadBooking'
import CurvedLoopedit from '../components/about/CurvedLoopedit'
import Timinginfo from '../components/home/Timinginfo'

const BookingPage = () => {
  return (
    <div>
      <HeadBooking/>
      <CurvedLoopedit/>
      <BookingB/>
      <Timinginfo/>
    </div>
  )
}

export default BookingPage
