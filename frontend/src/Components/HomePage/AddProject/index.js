import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from '../../../axios';
import { useDispatch } from 'react-redux';
import { setAlert } from '../../../store/actions';

const AddProject = ({ show, handleClose }) => {
    let dispatch = useDispatch();
    const [formData, setFormData] = useState({"name":"", "description":""});

    const onsubmit = (e) => {
        e.preventDefault();
        axios.post('/api/projects/new', formData)
            .then(res => {
                handleClose();
                dispatch(setAlert({
                    "type": "success", 
                    "message": res.data.success
                }));
            })
            .catch(err => {
                handleClose();
                dispatch(setAlert({
                    "type": "danger", 
                    "message": err.response.data.errors
                }));
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