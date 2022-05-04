import React from 'react'
import {
    Container,
    Nav,
    Navbar,
    NavDropdown
} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    let navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        navigate('/login');
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>
                    <img 
                        src={logo}
                        width={100}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="facet-navbar-nav" />
                <Navbar.Collapse id="facet-navbar-nav">
                    <Nav className='me-auto'>
                        <Nav.Link onClick={() => navigate('/dashboard')}>Home</Nav.Link>
                    </Nav>
                    <>
                        {localStorage.getItem('token')?(
                            <Nav>
                                <NavDropdown title={<><FaUserCircle size={25} /> Welcome, {localStorage.getItem('username')}</>} style={{color: "#fff !important"}}>
                                    <NavDropdown.Item>
                                        My profile
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item style={{color:"red"}} onClick={logout}>
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        ):(
                            <Nav>
                                <Link to="/login" className='btn btn-primary me-2'>Login</Link>
                                <Link to="/register" className="btn btn-outline-primary" >SignUp</Link>
                            </Nav>
                        )}
                    </>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header