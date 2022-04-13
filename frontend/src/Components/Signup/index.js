// import React, { useState } from "react"
// import { Button, Form, FormGroup, FormLabel } from "react-bootstrap"
// import {Link, useNavigate } from "react-router-dom"
// import axios from "../../axios";


// const Signup = () => {
//     const [formDetails,setFormDetails] = useState({"name": ",","email":"","password" : "","confirmpassword":""})
//     let navigate = useNavigate();
//     const onchange = (e) => {
//         setFormDetails({...formDetails,[e.target.name] : e.target.value})
//     }
//     const onHandleSubmit = async(e) => {
//         e.preventDefault();
//         axios.post('/api/login',{
//             "name" : formDetails.name,
//             "email" : formDetails.email,
//             "password" : formDetails.password
//         })
//         .then((res) =>{
//             console.log(res);
//             navigate("/",{replace:true});
//         })
//         .catch((err) =>{
//             console.log(err);
//         })
//     }

//     return(
//         <div className="col-md-4 m-auto border p-4  ">
//         <Form onSubmit ={onHandleSubmit}>
//             <FormGroup className="mb-3" controlId="formBasicName">
//                 <FormLabel>Email</FormLabel>
//                 <Form.Control type="email" placeholder="Enter email" name = "email" id="email" onChange={onchange} value={formDetails.email}/>
//             </FormGroup>
//             <FormGroup className="mb-3" controlId="formBasicEmail">
//                 <FormLabel>Email</FormLabel>
//                 <Form.Control type="email" placeholder="Enter email" name = "email" id="email" onChange={onchange} value={formDetails.email}/>
//             </FormGroup>
//             <FormGroup className="mb-3" controlId="formBasicPassword">
//                 <FormLabel>Password</FormLabel>
//                 <Form.Control type="password" name="password" id="password" placeholder="Password" onChange={onchange} value={formDetails.password}/>
//             </FormGroup>
//             <Button variant="primary" type="submit">
//                 Login
//             </Button>
//         </Form>
//         </div>
//     )
// }

// export default Signup