import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink, useParams} from 'react-router-dom';
import './style.css'

const ProjectsMenu = ({data}) => {
    let { projSlug } = useParams();

    const links = [
        "testsuites",
        "testcases",
        "headers",
        "environments",
        "endpoints",
        "payloads"
    ]
    return(
        <>
            <Navbar bg="light" variant="light" className="border">
                <Container>
                    <Navbar.Brand style={{fontSize: "28px"}}>
                        {projSlug}
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        {links.map(e => {
                            return <Nav.Link key={e}>
                                    <NavLink
                                        to={`/project/${data}/${e}`}
                                        className={({ isActive }) => {
                                            return isActive?("navlink active"):("navlink")
                                        }}
                                    >
                                        {e}
                                    </NavLink>
                                </Nav.Link>
                        })}
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default ProjectsMenu;