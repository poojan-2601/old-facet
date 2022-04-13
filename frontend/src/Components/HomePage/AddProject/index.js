import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from '../../../axios';

const AddProject = ({ show, handleClose }) => {
    const [formData, setFormData] = useState({"name":"", "description":""});

    const onsubmit = (e) => {
        e.preventDefault();
        axios.post('/api/create-projects', formData)
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
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Project</Modal.Title>
            </Modal.Header>
            <Form onSubmit={onsubmit}>
                <Modal.Body>
                        <Form.Group className='mb-3'>
                            <Form.Label>Project Name:</Form.Label>
                            <Form.Control type="text" name="name" id="name" value={formData.name} onChange={onchange} />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Description: </Form.Label>
                            <Form.Control as="textarea" name="description" id="description" value={formData.description} onChange={onchange} />
                        </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button type='submit'>Add Project</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default AddProject;