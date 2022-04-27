import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import axios from "../../axios";

const TestsuiteComponent = (props) => {
    const {instance} = props;
    const [result, setResult] = useState([]);

    const executeTestsuite = (e) => {
        axios.post(`/api/tests`, {
            "testsuite" : instance._id
        })
        .then((res) => {
            setResult(res.data)
        })
        .catch(err => {
            alert("something went wrong");
        })
    }
    return(
        <div>
            <div className="border-bottom border-dark py-2 d-flex justify-content-between align-items-center">
                {instance.name}
                <Button variant="success" onClick={executeTestsuite}>
                    Execute
                </Button>
            </div>
            <div>
                {instance.testcases && instance.testcases.map((e) => {
                    let resultInstance = result.filter(res => res.name===e.name)[0] || {};
                    return <Card 
                                className={`my-2 ${resultInstance.status==='passed'?(
                                                    'border-success text-success'
                                                ):(
                                                    resultInstance.status==='failed'?(
                                                        'border-danger text-danger'
                                                    ):''
                                                )}`
                                            } 
                                key={e._id}
                            >
                                <Card.Body>{e.name}</Card.Body>
                            </Card>
                }) 

                }
            </div>
            <Button variant="success" onClick={executeTestsuite}>
                    Execute
            </Button>
        </div>
    )
}

export default TestsuiteComponent