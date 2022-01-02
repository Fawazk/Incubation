import React from 'react';
import Header from '../AdminComponents/Header/Header';
import Footer from '../AdminComponents/Footer/Footer';
import Home from '../Components/Home/Home';
import { useNavigate } from 'react-router-dom';

function HomePage(props) {
    const navigate = useNavigate()
  return (
    <div className="homeParentDiv">
        <Header/>
        <Home/>
        <Footer/>
    </div>
  );
}

export default HomePage
 
