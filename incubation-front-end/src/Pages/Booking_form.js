import React from 'react';
import Header from '../AdminComponents/Header/Header';
import Footer from '../AdminComponents/Footer/Footer';
import Booking_form from '../Components/Booking/Booking_form';

function Booking_formpage() {
  return (
    <div>
        <Header/>
        <Booking_form />
        <Footer/>
    </div>
  );
}

export default Booking_formpage;
