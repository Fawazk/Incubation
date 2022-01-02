import React, { useContext,us } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate()
    return (
        <div className="headerParentDiv">
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
                <div className="container container-fluid col-10">


                    <strong className="navbar-brand jus">INCUBATION</strong>



                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>



                    <div className="d-flex">
                        <div className="mr-3">
                            <b className="mr-3" onClick={() => {
                                navigate('/login')}}>Login&nbsp;|</b>
                        </div>
                        <div className="">
                            <b className=""onClick={() => {
                                navigate('/register')}}>&nbsp;Register</b>
                        </div>
                    </div>
                </div>

            </nav>
        </div>

    );
}

export default Header;
