import React, { useEffect, useState } from "react";
import { Tab, Nav, Col, Row } from "react-bootstrap"
import { useParams } from "react-router-dom";
import axios from "../../axios";

const Sidebar = () => {
    const [data,setData] = useState([])
    let projSlug= useParams();
    let page = projSlug.tab.toString();
    console.log(projSlug);
    console.log(`/api/${page}`);
    useEffect(()=>{
      axios.get(`/api/${page}`)
      .then((details) =>{setData(details.data);console.log("dasdadadads",details.data);})
      .catch((err) =>{
        console.log('something',err);
    })
    },[])
    return (
        <>
            {data.map((pageData) => (
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey={pageData.name}>{pageData.name}Hi</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey={pageData.name}>
                                 hi
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
            ))}
        </>
    )
}

export default Sidebar;