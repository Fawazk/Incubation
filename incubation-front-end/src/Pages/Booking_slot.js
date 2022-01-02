import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../AdminComponents/Header/Header';
import Footer from '../AdminComponents/Footer/Footer';
import Booking_slot from '../AdminComponents/Booking_slot/Booking_slot'
function booking_slot(props) {
  return (
    <div className="">
        <Header/>
        <Booking_slot/>
        <Footer/>
    </div>
  );
}

export default booking_slot
 
