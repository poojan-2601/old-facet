import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink, useNavigate} from 'react-router-dom';
import './style.css'

const ProjectsMenu = ({data}) => {
    let navigate = useNavigate();
    const links = [
        "testsuites",
        "testcases",
        "headers",
        "endpoints",
        "testdata",
        "payloads"
    ]
    return(
        <>
            <Navbar bg="light" variant="light" className="border">
                <Container>
                    <Nav>
                        {links.map(e => {
                            return <Nav.Link key={e}>
                                    <NavLink
                                        to={`/project/${data.projSlug}/${e}`}
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