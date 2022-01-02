import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../AdminComponents/Header/Header';
import Footer from '../AdminComponents/Footer/Footer';
import Recordlist from '../AdminComponents/Recordlist/Recordlist';
function RecordList(props) {
  return (
    <div className="">
        <Header/>
        <Recordlist/>
        <Footer/>
    </div>
  );
}

export default RecordList
 
