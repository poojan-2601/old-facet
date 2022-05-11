import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import { MdCheck } from 'react-icons/md';

const CustomModal = (props) => {
    const { show, handleClose, onSubmit } = props;
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.children}
            </Modal.Body>
            <Modal.Footer className='text-end'>
                <Button 
                    variant="secondary" 
                    onClick={handleClose} 
                    className="me-2"
                >
                    Close
                </Button>
                
                <Button 
                    variant="success" 
                    type='submit' 
                    onClick={onSubmit}
                >
                    <MdCheck className='me-2' /> 
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CustomModal;