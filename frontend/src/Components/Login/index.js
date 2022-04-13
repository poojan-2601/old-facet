import React, { useState } from "react"
import { Button, Form, FormGroup, FormLabel } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import axios from "../../axios";


const Login = () => {
    const [formDetails,setFormDetails] = useState({"email":"","password":""})
    let navigate = useNavigate();
    const onchange = (e) => {
        setFormDetails({...formDetails,[e.target.name] : e.target.value})
    }
    const onHandleSubmit = async(e) => {
        e.preventDefault();
        axios.post('/api/login',{
            "email" : formDetails.email,
            "password" : formDetails.password
        })
        .then((res) =>{
            // res = res.json()
            localStorage.setItem('token',res.data.token)
            console.log(res);
            navigate("/",{replace:true});
        })
        .catch((err) =>{
            console.log(err);
        })
    }

    return(
        <div className="col-md-4 m-auto border p-4  ">
        <Form onSubmit ={onHandleSubmit}>
            <FormGroup className="mb-3">
                <FormLabel>Email</FormLabel>
                <Form.Control type="email" placeholder="Enter email" name = "email" id="email" onChange={onchange} value={formDetails.email}/>
            </FormGroup>
            <FormGroup className="mb-3">
                <FormLabel>Password</FormLabel>
                <Form.Control type="password" name="password" id="password" placeholder="Password" onChange={onchange} value={formDetails.password}/>
            </FormGroup>
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
        </div>
    )
}

export default Login