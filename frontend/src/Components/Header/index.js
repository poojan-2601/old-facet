import React from 'react'
import {
    Button,
    Container,
    Nav,
    Navbar
} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Header = () => {

    let navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token');
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
                        <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
                    </Nav>
                    <>
                        {localStorage.getItem('token')?(
                            <>
                                <Button variant='danger' onClick={logout}>LogOut</Button>
                            </>
                        ):(
                            <>
                                <Link to="/login" className='btn btn-primary me-2'>Login</Link>
                                <Link to="/register" className="btn btn-outline-primary" >SignUp</Link>
                            </>
                        )}
                    </>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header