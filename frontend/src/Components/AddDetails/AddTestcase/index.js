import React, { useEffect, useState } from "react";
import { Form,Button } from "react-bootstrap";
import axios from "../../../axios";
import Select from 'react-select';

const AddTestcase = (props) => {
    const { projSlug, handleClose } = props;
    
    const [formData, setFormData] = useState(
        {
            "name": "",
            "method": "",
            "project": projSlug,
            "endpoint_id": "",
            "payload_id": "",
            "header_id": ""
        }   
    )
    const [options, setOptions] = useState(
        {
            "headers": [],
            "endpoints": [],
            "payloads": []
        }
    );

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/testcases/new', formData)
        .then(res => {
            alert(res.data.success);
        })
        .catch(err => {
            console.log(err.response.data);
        })
        handleClose();
    }
        
        
    useEffect(() => {
        let headers = [];
        let payloads = [];
        let endpoints = [];
        axios.get('/api/headers', { params: { "project": projSlug }})
        .then((res) => {
            const data = res.data.headers;
            data.forEach(ele => {
                headers.push({value: ele['_id'], label: ele['name']})
            })
        })
        
        axios.get('/api/payloads', { params: { "project": projSlug }})
        .then((res) => {
            const data = res.data.payloads;
            data.forEach(ele => {
                payloads.push({value: ele['_id'], label: ele['name']})
            })
        })
        
        axios.get('/api/endpoints', { params: { "project": projSlug }})
        .then((res) => {
            const data = res.data.endpoints;
            data.forEach(ele => {
                endpoints.push({value: ele['_id'], label: ele['name']})
            })
        })
        
        setOptions({...options, "endpoints":endpoints, "headers": headers, "payloads": payloads});
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
                    <Form.Label>Method</Form.Label>
                    <Form.Select name="method" id="method" value={formData.method} onChange={onchange}>
                        <option value="" selected disabled>Select</option>
                        <option value="GET">GET</option>
                        <option value="POST">POST</option>
                        <option value="PUT">PUT</option>
                        <option value="DELETE">DELETE</option>
                        <option value="PATCH">PATCH</option>
                        <option value="HEAD">HEAD</option>
                        <option value="OPTIONS">OPTIONS</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Endpoint</Form.Label>
                    <Select 
                        options={options.endpoints}
                        onChange={(e) => setFormData({...formData, "endpoint_id": e.value})}
                        name="endpoint_id"    
                    />
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Headers</Form.Label>
                    <Select 
                        options={options.headers}
                        onChange={(e) => setFormData({...formData, "header_id": e.value})}
                        name="header_id"    
                    />
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Payloads</Form.Label>
                    <Select 
                        options={options.payloads}
                        onChange={(e) => setFormData({...formData, "payload_id": e.value})}
                        name="payload_id"    
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

export default AddTestcase;