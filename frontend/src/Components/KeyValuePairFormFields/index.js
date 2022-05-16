import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { MdAdd, MdDeleteForever } from 'react-icons/md';

const KeyValuePairFormFields = ({ data, setData }) => {
    const [inputFields, setInputFields] = useState([{"key": "", "value": ""}]);

    useEffect(() => {
        let properties = {};
        inputFields.map(e => {
            properties[e.key] = e.value
        });
        setData(properties);
    }, [inputFields])
    

    const onchange = (e, index) => {
        const values = [...inputFields]
        values[index][e.target.name] = e.target.value;
        setInputFields(values);
    }

    const onAddField = () => {
        setInputFields([...inputFields, {"key": "", "value": ""}])
    }

    const removeField = (index) => {
        let values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
    }
    return (
        <div>
            {inputFields.map((e, index) => {
                return <Row key={index} className="mb-3">
                            <Col md={5}>
                                <Form.Control 
                                    name="key" 
                                    onChange={(event) => onchange(event, index)} 
                                    value={e.key} 
                                    placeholder="Key"
                                />
                            </Col>
                            <Col md={5}>
                                <Form.Control 
                                    name="value" 
                                    value={e.value} 
                                    placeholder="Value" 
                                    onChange={(event) => onchange(event, index)} 
                                />
                            </Col>
                            <Col md={2}>
                                <Button variant='danger' className='m-0 py-2 px-1 d-flex justify-content-between align-items-center' onClick={() => removeField(index)}>
                                    <MdDeleteForever 
                                        size={20}
                                    />
                                </Button>
                            </Col>
                        </Row>
            })}
            <div className='text-center'>
                <Button 
                    variant='success' 
                    onClick={onAddField}
                    size="sm"
                >
                    <MdAdd />
                    Add New
                </Button>
            </div>
        </div>
    )
}

export default KeyValuePairFormFields;