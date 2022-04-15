import React, { useEffect, useState } from "react";
import { Tab, Nav, Col, Row, Container } from "react-bootstrap"
import { useParams } from "react-router-dom";
import axios from "../../axios";

const Sidebar = () => {
    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(true);
    let { projSlug, tab } = useParams();
    
    useEffect(()=>{
        setLoading(true);
        axios.get(`/api/${tab}`, {params:{"projName":projSlug}})
            .then((details) =>{
                setData(details.data.endpoints);
                setLoading(false);
            })
            .catch((err) =>{
                console.log('something',err);
            })
    },[tab])

    return (
        <Container>
            {loading?"Loading...":(                    
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                {data.map((e) => {
                                    return <Nav.Item key={e._id}>
                                            <Nav.Link className="text-dark" eventKey={e.name}>{e.name}Hi</Nav.Link>
                                        </Nav.Item>
                                })}
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                {data.map((e) => {
                                    return <Tab.Pane key={e.name} eventKey={e.name}>
                                            {e.name}
                                        </Tab.Pane>
                                })}
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            )}
        </Container>
    )
}

export default Sidebar;