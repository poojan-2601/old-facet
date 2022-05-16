import React, { useState } from "react"
import { Button, Form, FormGroup, FormLabel } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import axios from "../../axios";


const Signup = () => {
    const [formDetails,setFormDetails] = useState({"name": "","email":"","password" : "","confirmpassword":""})
    let navigate = useNavigate();
    const onchange = (e) => {
        setFormDetails({...formDetails,[e.target.name] : e.target.value})
    }
    const onHandleSubmit = async(e) => {
        e.preventDefault();
        if (formDetails.password === formDetails.confirmpassword)
        {
            axios.post('/api/signup',{
                "name" : formDetails.name,
                "email" : formDetails.email,
                "password" : formDetails.password
            })
            .then((res) =>{
                navigate("/",{replace:true});
            })
            .catch((err) =>{
                console.log(err);
            })
        }
        else{
            console.log("Password does not match");
        }
    }

    return(
        <div className="col-md-4 m-auto border p-4  ">
            <h1 className="text-center">Register</h1>
        <Form onSubmit ={onHandleSubmit}>
            <FormGroup className="mb-3" controlId="formBasicName">
                <FormLabel>Name</FormLabel>
                <Form.Control type="name" placeholder="Your name" name = "name" id="name" onChange={onchange} value={formDetails.name}/>
            </FormGroup>
            <FormGroup className="mb-3" controlId="formBasicEmail">
                <FormLabel>Email</FormLabel>
                <Form.Control type="email" placeholder="Enter email" name = "email" id="email" onChange={onchange} value={formDetails.email}/>
            </FormGroup>
            <FormGroup className="mb-3" controlId="formBasicPassword">
                <FormLabel>Password</FormLabel>
                <Form.Control type="password" name="password" id="password" placeholder="Password" onChange={onchange} value={formDetails.password}/>
            </FormGroup>
            <FormGroup className="mb-3" controlId="formBasicPassword">
                <FormLabel>Password</FormLabel>
                <Form.Control type="password" name="confirmpassword" id="confirmpassword" placeholder="confirm Password" onChange={onchange} value={formDetails.confirmpassword}/>
            </FormGroup>
            <Button variant="primary" type="submit">
                Register
            </Button>
        </Form>
        </div>
    )
}

export default Signup