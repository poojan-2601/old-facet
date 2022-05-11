import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { MdCheck, MdEdit } from 'react-icons/md';

const CustomCard = (props) => {
    const { data, setIsEditable, isEditable } = props;
    return (
        <Card>
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <h4 className='py-2 my-auto'>
                    {data.name}
                </h4>
                <>
                    <Button 
                        size="sm" 
                        // onClick={() => setIsEditable(true)}
                        className="d-flex align-items-center"
                        disabled={isEditable}
                    >
                        <MdEdit className='me-2' /> 
                        Edit
                    </Button>
                </>
            </Card.Header>
            <Card.Body>
                {props.children}
            </Card.Body>
            <Card.Footer className='text-end'>
                <Button 
                    variant="success" 
                    type='submit' 
                    disabled={!isEditable}
                >
                    <MdCheck className='me-2' /> 
                    Save
                </Button>
            </Card.Footer>
        </Card>
    )
}

export default CustomCard;