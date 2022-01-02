import React from 'react';
import Header from '../AdminComponents/Header/Header';
import Footer from '../AdminComponents/Footer/Footer';
import Login from '../Components/Login/Login';

function LoginPage() {
  return (
    <div>
        <Header/>
      <Login />
      <Footer/>
    </div>
  );
}

export default LoginPage;
