import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from '../../../axios';
import CustomCard from '../../CustomCard';

const DataViewComponent = ({ activeDataId }) => {
    let { projSlug, tab } = useParams();
    
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [isEditable, setIsEditable] = useState(false);

    useEffect(() => {
        setLoading(true);
        console.log(tab, activeDataId);
        axios
            .get(`/api/${tab}/${activeDataId}`, {
                params: {
                    "project": projSlug
                }
            })
            .then(res => {
                setData(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err.response.data);
            })
    }, [activeDataId])

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log("submit click");
    }

    const onchange = (e) => {
        setData({...data, [e.target.name]:e.target.value});
    }
    

    return (
        <Form onSubmit={handleOnSubmit}>
            <CustomCard data={data} setIsEditable={setIsEditable} isEditable={isEditable}>
                {Object.keys(data).map(e => {
                    if(e==="_id"){
                        return
                    }
                    return <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={2}>
                                    {e}
                                </Form.Label>
                                <Col sm={10}>
                                    {typeof(data[e])==="object"?(
                                        <Form.Control
                                            type={e} 
                                            as="textarea" 
                                            rows={5} 
                                            name={e}
                                            value={JSON.stringify(data[e], null, 4)} 
                                            onChange={onchange}
                                            disabled={!isEditable}
                                        />
                                    ):(
                                        <Form.Control
                                            type={e}
                                            name={e}
                                            value={data[e]} 
                                            disabled={!isEditable}
                                            onChange={onchange}
                                        />
                                    )}
                                </Col>
                            </Form.Group>;
                })}
            </CustomCard>
        </Form>
    )
}

export default DataViewComponent;