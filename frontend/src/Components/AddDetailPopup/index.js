import React from "react";
import { useParams } from "react-router-dom";
import { Modal } from "react-bootstrap"
import AddTestsuite from "../AddDetails/AddTestsuite";
import AddHeader from "../AddDetails/AddHeader";
import AddTestcase from "../AddDetails/AddTestcase";
import AddPayload from "../AddDetails/AddPayload";
import AddEndpoint from "../AddDetails/AddEndpoint";

const AdddetailPopup = (props) => {
    const { show, handleClose } = props;
    let { projSlug, tab } = useParams();

    const SwitchCase = () => {
        switch (tab) {
            case 'testsuites':
                return <AddTestsuite handleClose={handleClose} projSlug={projSlug} tab={tab} />
            case 'headers':
                return <AddHeader handleClose={handleClose} projSlug={projSlug} tab={tab} />
            case 'testcases':
                return <AddTestcase handleClose={handleClose} projSlug={projSlug} tab={tab} />
            case 'payloads':
                return <AddPayload handleClose={handleClose} projSlug={projSlug} tab={tab} />
            case 'endpoints':
                return <AddEndpoint handleClose={handleClose} projSlug={projSlug} tab={tab} />
        }
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add {tab}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {SwitchCase()}
                </Modal.Body>
            </Modal>
        </>
    )
}

export default AdddetailPopup;