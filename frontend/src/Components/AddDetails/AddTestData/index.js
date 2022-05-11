import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import axios from '../../../axios';
import CustomModal from '../../CustomComponent/CustomModal';

const AddTestData = (props) => {
    let { show, handleClose, data } = props;
    data = {"testcase_id": data._id,"name": "", "payload": data.payload.payload || {}, "expected_outcome": data.payload.expected_outcome || {}}
    const [formData, setFormData] = useState(data);

    const onchange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value});
    }
    const onPayloadChange = (e) => {
        setFormData({...formData, "payload": {...formData.payload, [e.target.name]:e.target.value}})
    }
    const onExpOutcomeChange = (e) => {
        setFormData({...formData, "expected_outcome": {...formData.expected_outcome, [e.target.name]:e.target.value}})
    }
    
    const getDiff = (previousValue, updatedValue) => {
        let newValue = {}
        Object.entries(updatedValue).map(([key, value]) => {
            if(typeof(value)==='object'){
                newValue[key] = {}
                Object.entries(value).map(([childKey, childValue]) => {
                    if (childValue===previousValue[childKey]) {
                        return
                    }
                    newValue[key][childKey] = childValue;
                })
            } else {
                newValue[key] = value;
            }
        })
        return newValue;
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const updatedData = getDiff(data, formData);
        axios
            .post(`/api/testdata/new`, updatedData)
            .then(res => {
                alert(res)
            })
            .catch(err => {
                console.log(err.response);
            })
    }
    
    return (
        <Form onSubmit={handleOnSubmit}>
            <CustomModal show={show} handleClose={handleClose} onSubmit={handleOnSubmit}>
                <Form.Group className='mb-3'>
                    <Form.Label style={{fontWeight: "bolder"}}>
                        Name
                    </Form.Label>
                    <Form.Control 
                        type='text'
                        name='name'
                        onChange={onchange}
                        value={formData.name}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label style={{fontWeight: "bolder"}}>
                        Payload
                    </Form.Label>
                    {Object.entries(formData.payload).map(([key, value]) => {
                        return <Form.Group as={Row} key={key} className="mb-3">
                                    <Form.Label column sm={4}>
                                        {key}
                                    </Form.Label>
                                    <Col sm={8}>
                                        {typeof(value)==='object'?(
                                            <Form.Control 
                                                type={key}
                                                as="textarea"
                                                rows={5}
                                                name={key}
                                                value={JSON.stringify(value, null, 4)}
                                                onChange={onPayloadChange}
                                            />
                                        ):(
                                            <Form.Control 
                                                type={key}
                                                name={key}
                                                value={value}
                                                onChange={onPayloadChange}
                                            />
                                        )}
                                    </Col>
                                </Form.Group>
                    })}
                </Form.Group>

                <Form.Group>
                    <Form.Label style={{fontWeight: "bolder"}}>
                        Expected Outcome
                    </Form.Label>
                    {Object.entries(formData.expected_outcome).map(([key, value]) => {
                        return <Form.Group as={Row} key={key} className="mb-3">
                                    <Form.Label column sm={4}>
                                        {key}
                                    </Form.Label>
                                    <Col sm={8}>
                                        {typeof(value)==='object'?(
                                            <Form.Control 
                                                type={key}
                                                as="textarea"
                                                rows={5}
                                                name={key}
                                                value={JSON.stringify(value, null, 4)}
                                                onChange={onExpOutcomeChange}
                                            />
                                        ):(
                                            <Form.Control 
                                                type={key}
                                                name={key}
                                                value={value}
                                                onChange={onExpOutcomeChange}
                                            />
                                        )}
                                    </Col>
                                </Form.Group>
                    })}
                </Form.Group>
            </CustomModal>
        </Form>
    )
}

export default AddTestData;