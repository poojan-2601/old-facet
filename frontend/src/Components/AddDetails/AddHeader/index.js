import React, { useState } from "react";
import { Form,Button } from "react-bootstrap";
import axios from "../../../axios";

const AddHeader = (props) => {
    const { projSlug } = props
    const { tab } = props
    const { handleClose } = props
    const [formData,setFormData] = useState({"project" : projSlug,"name" : "", "header" : ""})
    const onSubmit = (e) => {
        handleClose();
        e.preventDefault();
        console.log('------------',formData);
        axios.post('/api/create-headers', formData)
        .then(res => {
            alert(res.data.success);
            handleClose();
        })
        .catch(err => {
            alert(err.response.data.errors);
        })
    }
    const onchange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value});
    }
    return (
        <>
            <Form onSubmit={onSubmit}>
                <Form.Group className='mb-3'>
                    <Form.Label>Header Name</Form.Label>
                    <Form.Control type="text" name="name" id="name" value={formData.name} onChange={onchange} />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Header</Form.Label>
                    <Form.Control type = "object" as="textarea" rows = {5} name="header" id="header" value = {formData.header} onChange = {onchange}/>
                </Form.Group>
                <div className="border-top">
                    <Button variant="secondary" onClick={handleClose} className="m-3"> Close</Button>
                    <Button variant="primary" type="submit" className="m-3">Save changes</Button>
                </div>
            </Form>
        </>
    )
}

export default AddHeader;