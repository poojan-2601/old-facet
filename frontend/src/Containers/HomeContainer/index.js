import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import axios from '../../axios';
import AddProject from '../../Components/HomePage/AddProject';
import ProjectBox from '../../Components/HomePage/ProjectBox';

const HomeContainer = () => {
    const [show, setShow] = useState(false);
    const [projects, setProjects] = useState([]);

    const handleClose = () => {
        setShow(false);
    }

    useEffect(() => {
        axios.get(`/api/projects`)
            .then((res) => {
                setProjects(res.data.projects);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    
    return (
        <Container className='py-4'>
            <AddProject show={show} handleClose={handleClose} />
            <div className='d-flex justify-content-between align-items-center'>
                <h2>My Projects</h2>
                <Button variant='success' onClick={() => setShow(true)}>Add New Project</Button>
            </div>
            <hr/>
            
            <Row>
                {projects.map(e => {
                    return <Col key={e._id} md={4}>
                            <ProjectBox data={e} />
                        </Col>
                })}
                
            </Row>
        </Container>
    )
}

export default HomeContainer;