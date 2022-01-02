import React, { useState, useContext } from 'react';
import './Booking_form.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';


export default function Booking_form() {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state,setState] = useState('');
    const [email,setEmail] = useState('');
    const [phonenumber,setPhonenumber] = useState('');
    const [companyname,setCompanyName] = useState('');
    const [companylogo,setCompanylogo] = useState('');
    const [descriptionofteam,setDescriptionofteam] = useState('');
    const [descriptionofcompany,setDescriptionofcompany] = useState('');
    const [uniqueabout,setUniqueabout] = useState('');
    const [value_proportion_for_customer,setValue_proportion_for_customer] = useState('');
    const [alerts,setAlert] = useState('');

    const handleBooking_form = (event)=>{
        event.preventDefault();
        if (name===''){
            setAlert('name is required')
            console.log(alerts)
 
        }
        else if (address===''){
            setAlert('Address is required')
            console.log(alerts)
        }
        const data = {
            name : name,
            Address : address,
            city : city,
            state : state,
            email : email,
            phone : phonenumber,
            companyname : companyname,
            companylogo:companylogo,
            describtion_on_team:descriptionofteam,
            describtion_on_company:descriptionofcompany,
            unique_about_solution:uniqueabout,
            value_proportion_for_customer:value_proportion_for_customer,
        }
        console.log(data);
        const access = localStorage.getItem('access')
        const refresh = localStorage.getItem('refresh')
        console.log("access :"+access)
        axios.post("http://127.0.0.1:8000/application/",data,{headers:{"Authorization":`Bearer  ${access}`}}).then((res)=>{
            console.log("resdata :"+res.data)
            // navigate('/Booking_form')}).catch((error)=>{console.log(error)
        })
        }
    return (
        <div>
            <section className="h-120 bg-dark">
                <div className="container py-5 h-120 bg-dark">
                    <div className="row d-flex justify-content-center align-items-center h-120 bg-dark">
                        <div className="col bg-dark">
                            <div className="card card-registration my-4 bg-dark">
                                <div className="row d-flex justify-content-center">

                                    <div className="col-xl-8">
                                        <div className="card-body p-md-5 text-black container  bg-white">
                                            <h3 className="mb-5 text-uppercase text-center">Application form</h3>

                                            <form onSubmit={handleBooking_form}>
                                            {alerts ? <Alert className="mb-3" severity="error">{alerts}</Alert> : ''}
                                                <div className="row d-flex justify-content-center">
                                                    <div className="col-md-12 mb-4">
                                                        <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth value={name} onChange={(e) => setName(e.target.value)} />
                                                    </div>
                                                    <div className="col-md-12 mb-4">
                                                        <div className="form-outline">
                                                            <TextField id="outlined-basic" label="Address" variant="outlined" fullWidth value={address} onChange={(e) => setAddress(e.target.value)} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-outline">
                                                            <TextField id="outlined-basic" label="City" variant="outlined" fullWidth value={city} onChange={(e) => setCity(e.target.value)} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-outline">
                                                            <TextField id="outlined-basic" label="State" variant="outlined" fullWidth value={state} onChange={(e) => setState(e.target.value)} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-outline">
                                                            <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-outline">
                                                            <TextField id="outlined-basic" label="Phone Number" variant="outlined" fullWidth value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-outline">
                                                            <TextField id="outlined-basic" label="Company Name" variant="outlined" fullWidth value={companyname} onChange={(e) => setCompanyName(e.target.value)} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-outline">
                                                            <TextField type="file" fullWidth value={companylogo} onChange={(e) => setCompanylogo(e.target.value)} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-4">
                                                        <div className="form-outline">
                                                            <TextField id="outlined-basic" label="Describe Your Team and Background" variant="outlined" fullWidth value={descriptionofteam} onChange={(e) => setDescriptionofteam(e.target.value)} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-4">
                                                        <div className="form-outline">
                                                            <TextField id="outlined-basic" label="Describe Your Company and Product" variant="outlined" fullWidth value={descriptionofcompany} onChange={(e) => setDescriptionofcompany(e.target.value)} />
                                                        </div>
                                                    </div>
                                                    {/* <div className="col-md-12 mb-4">
                                                        <div className="form-outline">
                                                            <TextField id="outlined-basic" label="Describe Your problem your are trying to solve" variant="outlined" fullWidth value={} onChange={(e) => setPassword(e.target.value)} />
                                                        </div>
                                                    </div> */}
                                                    <div className="col-md-12 mb-4">
                                                        <div className="form-outline">
                                                            <TextField id="outlined-basic" label="What is unique about your solution" variant="outlined" fullWidth value={uniqueabout} onChange={(e) => setUniqueabout(e.target.value)} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-4">
                                                        <div className="form-outline">
                                                            <TextField id="outlined-basic" label="What is your value proposition for the customer?" variant="outlined" fullWidth value={value_proportion_for_customer} onChange={(e) => setValue_proportion_for_customer(e.target.value)} />
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="d-flex justify-content-center pt-3">
                                                        <button className="btn btn-outline-success btn-lg ms-2">Submit</button>
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
