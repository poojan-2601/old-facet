import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, useNavigate} from 'react-router-dom';

const ProjectsMenu = ({data}) => {
    let navigate = useNavigate();
    return(
        <>
            <Navbar bg = "light" variant="light">
                <Container>
                    <Nav>
                    <Nav.Link onClick={() => {navigate(`/project/${data.projSlug}/testsuite`)}}>Testsuite</Nav.Link>
                    <Nav.Link onClick={() => {navigate(`/project/${data.projSlug}/headers`)}}>Headers</Nav.Link>
                    <Nav.Link onClick={() => {navigate(`/project/${data.projSlug}/endpoints`)}}>Endpoints</Nav.Link>
                    <Nav.Link onClick={() => {navigate(`/project/${data.projSlug}/testcases`)}}>Testcases</Nav.Link>
                    <Nav.Link onClick={() => {navigate(`/project/${data.projSlug}/testdata`)}}>Testdata</Nav.Link>
                    <Nav.Link onClick={() => {navigate(`/project/${data.projSlug}/payload`)}}>Payload</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default ProjectsMenu;