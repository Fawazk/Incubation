import React, { useState, useContext } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
// import { TokenContext } from '../../store/context';

export default function Login() {
const [username,setUsername] = useState('');
const [password,setPassword] = useState('');
const [alerts,setAlert] = useState('');
// const {token,setToken} = useContext(TokenContext)
const navigate = useNavigate()
const handleLogin = (event)=>{
    event.preventDefault();
    if (username===''){
        setAlert('username is required')
        console.log(alerts)
    }
    else if (password===''){
        setAlert('password is required')
        console.log(alerts)
    }
    else {
        console.log('success')
        const data = {
            username : username,
            password : password,
        }
        axios.post("http://127.0.0.1:8000/api/token/",data).then((res)=>{
            console.log(res.data)
            localStorage.setItem('access',res.data['access']);
            localStorage.setItem('refresh',res.data['refresh']);
            navigate('/')})
        }
    }
    return (
        <div>
            <section className="h-100 bg-dark p-4">
                <div className="container py-5 h-100 bg-dark">
                    <div className="row d-flex justify-content-center align-items-center h-100 bg-dark">
                        <div className="col bg-dark">
                            <div className="card card-registration my-4 bg-dark">
                                <div className="row d-flex justify-content-center">

                                    <div className="col-md-6">
                                        <div className="card-body p-md-5 text-black container  bg-white">
                                            <h3 className="mb-5 text-uppercase text-center">login form</h3>

                                            <form onSubmit={handleLogin}>
                                            {alerts ? <Alert className="mb-3" severity="error">{alerts}</Alert> : ''}

                                                <div className="row d-flex justify-content-center">

                                                    <div className="col-md-10 mb-4">
                                                        <TextField id="outlined-basic" label="Username" variant="outlined" fullWidth value={username} onChange={(e) =>{setUsername(e.target.value);setAlert('')} } />
                                                    </div>
                                                    <div className="col-md-10 mb-4">
                                                            <TextField id="outlined-basic" type="password" label="Password" variant="outlined" fullWidth value={password} onChange={(e) => {setPassword(e.target.value);setAlert('')}} />
                                                    </div>
                                                    <div className="d-flex justify-content-center pt-3">
                                                        <button className="btn btn-outline-success btn-lg ms-2">Register</button>
                                                    </div>
                                                </div>

                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>


    );
}
