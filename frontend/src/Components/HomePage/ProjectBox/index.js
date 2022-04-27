import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './style.css';

const ProjectBox = ({data}) => {
  let navigate = useNavigate();

  const openProject = (e) => {
    navigate(`/project/${data.name}/testsuites`)
  }
  return (
    <div>
      <Card className='p-3 my-3 projectBox' onClick={openProject}>
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>{data.description? data.description.substring(0, 100): ""}</Card.Text>
          <Card.Text className='text-muted'>Created on: {data.created_at}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ProjectBox