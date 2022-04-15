import React, { useEffect, useState } from "react";
import { Tab, Nav, Col, Row, Container, NavLink } from "react-bootstrap"
import { useParams } from "react-router-dom";
import axios from "../../axios";
import SearchBox from '../SearchBox';
import './style.css'

const Sidebar = () => {
    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(true);
    let { projSlug, tab } = useParams();
    
    useEffect(()=>{
        setLoading(true);
        axios.get(`/api/${tab}`, {params:{"project":projSlug}})
            .then((details) =>{
                setData(details.data[tab]);
                setLoading(false);
            })
            .catch((err) =>{
                console.log('something',err);
            })
    },[tab])

    return (
        <Container className="py-3">
            {loading?"Loading...":(                    
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3} className="sidebar-container">
                            <div className="p-2">
                                <SearchBox className="border-bottom mb-2" />
                                <Nav variant="pills" className="flex-column my-2">
                                    {data.map((e) => {
                                        return <Nav.Item key={e._id}>
                                                <NavLink to="#" className="text-dark" eventKey={e.name}>{e.name}</NavLink>
                                            </Nav.Item>
                                    })}
                                </Nav>
                            </div>
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