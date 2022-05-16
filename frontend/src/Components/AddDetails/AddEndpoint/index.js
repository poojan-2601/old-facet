import React , { useState }  from "react";
import { Form,Button } from "react-bootstrap";
import axios from "../../../axios";


const AddEndpoint = (props) => {
    const { projSlug, handleClose } = props;
    const [formData, setFormData] = useState({"project" : projSlug, "name" : "", "endpoint" : ""})

    const onSubmit = (e) => {
        e.preventDefault();
        handleClose();
        axios.post('/api/endpoints/new', formData)
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
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" id="name" value={formData.name} onChange={onchange} />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Endpoint</Form.Label>
                    <Form.Control type="url" name="endpoint" id="endpoint" value={formData.endpoint} onChange={onchange} />
                </Form.Group>
                <div className="d-flex justify-content-end">
                    <Button variant="secondary" onClick={handleClose} className="me-2">Close</Button>
                    <Button variant="primary" type="submit">Save Changes</Button>
                </div>
            </Form>
        </>
    )
}

export default AddEndpoint;