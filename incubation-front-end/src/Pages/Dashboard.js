import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../AdminComponents/Header/Header';
import Footer from '../AdminComponents/Footer/Footer';
import Dashboard from '../AdminComponents/Dashboard/Dashboard';
function DashBoard(props) {
  return (
    <div className="">
        <Header/>
        <Dashboard/>
        <Footer/>
    </div>
  );
}

export default DashBoard
 
