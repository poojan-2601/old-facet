import React from "react";
import { Form,Button } from "react-bootstrap";
import axios from "../../../axios";

const AddTestsuite = (props) => {
    const { projSlug } = props
    const { tab } = props
    const { handleClose } = props
    const onSubmit = (e) => {
        handleClose();
        e.preventDefault();
        console.log('submit working well');
        console.log(projSlug)
    }
    return (
        <>
            <Form onSubmit={onSubmit}>
                <Form.Group className='mb-3'>
                    <Form.Label>Testsuite Name</Form.Label>
                    <Form.Control type="text" name="name" id="name" />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" name="name" id="name" />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Testcases</Form.Label>
                    <Form.Control type="text" name="name" id="name" />
                </Form.Group>
                <div className = "border-top">
                <Button variant="secondary" onClick={handleClose} className = "m-3"> Close</Button>
                <Button variant="primary" type = "submit" className = "m-3">Save changes</Button>
                </div>
            </Form>
        </>
    )
}

export default AddTestsuite