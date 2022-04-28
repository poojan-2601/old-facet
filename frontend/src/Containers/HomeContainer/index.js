import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import axios from '../../axios';
import AddProject from '../../Components/HomePage/AddProject';
import ProjectBox from '../../Components/HomePage/ProjectBox';
import SearchBox from '../../Components/SearchBox';

const HomeContainer = () => {
    const [show, setShow] = useState(false);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    const handleClose = () => {
        setShow(false);
    }

    useEffect(() => {
        setLoading(true);
        axios.get(`/api/projects?q=${searchQuery}`)
            .then((res) => {
                setProjects(res.data.projects);
                setLoading(false);
            })
            .catch(err => {
                console.log(err)
            })
    }, [searchQuery])
    
    return (
        <Container className='py-4'>
            <AddProject show={show} handleClose={handleClose} />
            <Row>
                <Col>
                    <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                </Col>
                <Col md={2}>
                    <Button variant='success' onClick={() => setShow(true)}>Add New Project</Button>
                </Col>
            </Row>
            <hr/>
            
            {loading?(
                <Spinner animation='border' />
            ):(
                <Row>
                    {projects.map(e => {
                        return <Col key={e._id} md={4}>
                                <ProjectBox data={e} />
                            </Col>
                    })}
                    
                </Row>
            )}
        </Container>
    )
}

export default HomeContainer;