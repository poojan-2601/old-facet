import React, { useState } from "react";
import { Form,Button } from "react-bootstrap";
import axios from "../../../axios";

const AddPayload = (props) => {
    const { projSlug, tab, handleClose } = props;
    const [formData, setFormData] = useState(
        {
            "name": "",
            "project": projSlug,
            "payload": "",
            "expected_outcome": ""
        }
    );
    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/payload/new', {
                ...formData, 
                "payload":JSON.parse(formData.payload), 
                "expected_outcome": JSON.parse(formData.expected_outcome)
            })
            .then(res => {
                alert(res.data);
            })
            .catch(err => {
                console.log(err.response);
            })
        handleClose();
    }

    const onchange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    return (
        <>
            <Form onSubmit={onSubmit}>
                <Form.Group className='mb-3'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" id="name" value={formData.name} onChange={onchange} />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Payload</Form.Label>
                    <Form.Control as="textarea" rows={5} name="payload" id="payload" value={formData.payload} onChange={onchange} />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Expected Outcome</Form.Label>
                    <Form.Control as="textarea" rows={5} name="expected_outcome" id="expected_outcome" value={formData.expected_outcome} onChange={onchange} />
                </Form.Group>
                <div className="d-flex justify-content-end">
                    <Button variant="secondary" onClick={handleClose} className="me-2">Close</Button>
                    <Button variant="primary" type="submit">Save Changes</Button>
                </div>
            </Form>
        </>
    )
}

export default AddPayload;