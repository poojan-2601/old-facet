import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "../../axios";
import DataViewComponent from "../../Components/Projects/DataViewComponent";
import ProjectsMenu from "../../Components/Projects/ProjectsMenu";
import Sidebar from "../../Components/Projects/Sidebar";

const ProjectsContainer = () => {
    let { projSlug, tab }= useParams();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeDataId, setActiveDataId] = useState("");

    useEffect(() => {
        setLoading(true);
        setActiveDataId("");
        axios
            .get(`/api/${tab}`, {
                params: {
                    "project": projSlug
                }
            })
            .then(res => {
                setData(res.data[tab]);
                setLoading(false);
            })
            .catch(err => {
                console.log(err.response);
            })
    }, [tab])
    
    return(
        <div>
            <ProjectsMenu data={projSlug}/>
            {loading?<Spinner animation="border" className="text-center" />:(
                <Container fluid className="py-3">
                    <Row>
                        <Col md={3}>
                            <Sidebar data={data} activeDataId={activeDataId} setActiveDataId={setActiveDataId} />
                        </Col>
                        <Col md={9}>
                            <DataViewComponent activeDataId={activeDataId} />
                        </Col>
                    </Row>

                </Container>
            )}
        </div>
    )
}

export default ProjectsContainer;