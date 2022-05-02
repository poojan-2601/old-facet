import React, { useState } from "react";
import { Form,Button } from "react-bootstrap";
import axios from "../../../axios";

const AddHeader = (props) => {
    const { projSlug, tab, handleClose } = props;
    const [formData,setFormData] = useState({"project" : projSlug,"name" : "", "header" : ""});

    const onSubmit = (e) => {
        handleClose();
        e.preventDefault();
        axios.post('/api/headers/new', {...formData, "header": JSON.parse(formData.header)})
        .then(res => {
            alert(res.data.success);
            handleClose();
        })
        .catch(err => {
            console.log(err.response);
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
                    <Form.Control type="object" as="textarea" rows={5} name="header" id="header" value={JSON.parse(JSON.stringify(formData.header, null, 4))} onChange={onchange}/>
                </Form.Group>
                <div className="d-flex justify-content-end">
                    <Button variant="secondary" onClick={handleClose} className="me-2">Close</Button>
                    <Button variant="primary" type="submit">Save Changes</Button>
                </div>
            </Form>
        </>
    )
}

export default AddHeader;