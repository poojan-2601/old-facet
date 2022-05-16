import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "../../../axios";
import Select from 'react-select';

const AddTestsuite = (props) => {
    const { projSlug, handleClose } = props;

    const [formData, setFormData] = useState(
        {
            "project": projSlug,
            "name": "",
            "description": "",
            "testcases": []
        }
    )
    const [testcaseOptions, setTestcaseOptions] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/testsuite/new', formData)
            .then(res => {
                alert(res.data.success);
            })
            .catch(err => {
                console.log(err.response.data)
            })
        handleClose();
    }

    useEffect(() => {
        axios.get('/api/testcases', { params: { "project": projSlug }})
            .then(res => {
                const data = res.data.testcases;
                let testcases = [];
                data.forEach(ele => {
                    testcases.push({value: ele['_id'], label: ele['name']})
                })
                setTestcaseOptions(testcases);
            })
    }, [])
    
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
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} name="description" id="description" value={formData.description} onChange={onchange} />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Testcases</Form.Label>
                    <Select 
                        isMulti={true}
                        options={testcaseOptions}
                        onChange={(e) => setFormData({...formData, "testcases": e.map(data => data.value)})}
                        name="testcases"    
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

export default AddTestsuite