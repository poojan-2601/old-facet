import React , { useState }  from "react";
import { Form, Button } from "react-bootstrap";
import axios from "../../../axios";
import { useDispatch } from 'react-redux';
import { setAlert } from '../../../store/actions';


const AddEnvironment = (props) => {
    let dispatch = useDispatch();

    const { projSlug, handleClose } = props;
    const [formData, setFormData] = useState({"project" : projSlug, "name" : "", "url" : ""})

    const onSubmit = (e) => {
        e.preventDefault();
        handleClose();
        axios.post('/api/environments/new', formData)
        .then(res => {
            handleClose();
            dispatch(setAlert({
                "type": "success",
                "message": res.data.success
            }));
        })
        .catch(err => {
            dispatch(setAlert({
                "type":"danger",
                "message": err.response.data.errors
            }));
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
                    <Form.Label>URL</Form.Label>
                    <Form.Control type="url" name="url" id="url" value={formData.url} onChange={onchange} />
                </Form.Group>
                <div className="d-flex justify-content-end">
                    <Button variant="secondary" onClick={handleClose} className="me-2">Close</Button>
                    <Button variant="primary" type="submit">Save Changes</Button>
                </div>
            </Form>
        </>
    )
}

export default AddEnvironment;