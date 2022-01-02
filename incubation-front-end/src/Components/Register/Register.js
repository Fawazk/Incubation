import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
// import Logo from '../../olx-logo.png';
import './Register.css';
import axios from 'axios'
// import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';

function Register() {



// const navigate = useNavigate()
const [username,setUsername] = useState('');
const [email,setEmail] = useState('');
const [phonenumber,setPhonenumber] = useState('');
const [password,setPassword] = useState('');
const navigate = useNavigate()
const [alerts,setAlert] = useState('');

//   const {firebase} = useContext(FirebaseContext)

const handleRegister = (event)=>{
    event.preventDefault();
    if (username===''){
        setAlert('username is required')
        console.log(alerts)
    }
    else if (password===''){
        setAlert('password is required')
        console.log(alerts)
    }
    const data = {
        username : username,
        email : email,
        password : password,
    }
    axios.post("http://127.0.0.1:8000/register/",data).then(()=>{
        navigate('/login')})
    return('')
}
    return (
        <div>
            <section className="h-100 bg-dark">
                <div className="container py-5 h-100 bg-dark">
                    <div className="row d-flex justify-content-center align-items-center h-100 bg-dark">
                        <div className="col bg-dark">
                            <div className="card card-registration my-4 bg-dark">
                                <div className="row d-flex justify-content-center">
                                    
                                    <div className="col-xl-8">
                                        <div className="card-body p-md-5 text-black container  bg-white">
                                            <h3 className="mb-5 text-uppercase">Student registration form</h3>

                                            <form onSubmit={handleRegister}>
                                            {alerts ? <Alert className="mb-3" severity="error">{alerts}</Alert> : ''}
                                            <div className="row ">
                                                <div className="col-xl-12 mb-4">
                                                    <TextField id="outlined-basic" label="Username" variant="outlined" fullWidth value={username} onChange={(e)=>setUsername(e.target.value)}/>
                                                </div>
                                                
                                            </div>

                                          

                                            <div className="form-outline mb-4 ">
                                            <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth value={email} onChange={(e)=>setEmail(e.target.value)} />
                                            </div>
                                            <div className="form-outline mb-4">
                                            <TextField id="outlined-basic" label="Phone Number" variant="outlined" fullWidth value={phonenumber} onChange={(e)=>setPhonenumber(e.target.value)} />
                                            </div>
                                            {/* <select className="form-select form-select-lg mb-3" aria-label="Default select example" value={phonenumber} onChange={(e)=>setPhonenumber(e.target.value)} >
                                                <option selected>Genter</option>
                                                <option value="1">Male</option>
                                                <option value="2">Female</option>
                                                <option value="3">Other</option>
                                            </select> */}
                                            <div className="form-outline mb-4">
                                            <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                            </div>

                                            <div className="form-outline mb-4">
                                            <TextField id="outlined-basic" label="Confirm Password" variant="outlined" fullWidth />
                                            </div>

                                            <div className="d-flex justify-content-end pt-3">
                                                <button className="btn btn-success btn-lg ms-2">Register</button>
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
export default Register
