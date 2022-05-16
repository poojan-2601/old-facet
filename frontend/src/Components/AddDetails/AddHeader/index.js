import React, { useState } from "react";
import { Form,Button } from "react-bootstrap";
import axios from "../../../axios";
import KeyValuePairFormFields from "../../KeyValuePairFormFields";

const AddHeader = (props) => {
    const { projSlug, tab, handleClose } = props;
    const [formData,setFormData] = useState({"project" : projSlug,"name" : "", "header" : {"":""}});

    const onSubmit = (e) => {
        handleClose();
        e.preventDefault();
        axios.post('/api/headers/new', formData)
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

    const onHeaderFieldsChange = (result) => {
        setFormData({...formData, "header": result});
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
                    {/* key value form */}
                    <KeyValuePairFormFields 
                        data={formData.header}
                        setData={onHeaderFieldsChange}
                    />
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