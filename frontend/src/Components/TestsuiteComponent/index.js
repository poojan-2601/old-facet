import React from "react";
import { Button, Card } from "react-bootstrap";
import axios from "../../axios";

const TestsuiteComponent = (props) => {
    const {instance} = props;

    const executeTestsuite = (e) => {
        axios.post(`/api/tests`, 
        {
            "testsuite" : instance._id
        })
        .then((res) => {
            console.log("---------------",res);
        })
    }
    return(
        <div>
            <div className="border-bottom border-dark py-2 d-flex justify-content-between align-items-center">
                {instance.name}
                <Button variant="success" onClick={executeTestsuite}>
                    execute
                </Button>
            </div>
            <div>
                { instance.testcases.map((e) => {
                    return <Card className="my-2 border-danger text-success">
                        <Card.Body>{e.name}</Card.Body>
                    </Card>
                }) 

                }
            </div>
            <Button variant="success" onClick={executeTestsuite}>
                    execute
                </Button>
        </div>
    )
}

export default TestsuiteComponent