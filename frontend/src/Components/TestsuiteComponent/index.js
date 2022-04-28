import React, { useState } from "react";
import { Accordion, Button, Card } from "react-bootstrap";
import axios from "../../axios";

const TestsuiteComponent = (props) => {
    const { instance } = props;
    const [result, setResult] = useState([]);

    const executeTestsuite = (e) => {
        console.log(instance._id)
        axios.post(`/api/tests`, {
            "testsuite": instance._id
        })
            .then((res) => {
                setResult(res.data)
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
                alert("something went wrong");
            })
    }
    return (
        <div>
            <div className="border-bottom border-dark py-2 d-flex justify-content-between align-items-center">
                {instance.name}
                <Button variant="success" onClick={executeTestsuite}>
                    Execute
                </Button>
            </div>
            <div>
                {instance.testcases && instance.testcases.map((e) => {
                    let resultInstance = result.filter(res => res.name === e.name)[0] || {};
                    return <Accordion>
                                <Accordion.Item className={`my-2 ${resultInstance.status === 'passed' ? (
                                    'border-success text-success'
                                ) : (
                                    resultInstance.status === 'failed' ? (
                                        'border-danger text-danger'
                                    ) : ''
                                )}`
                                } eventKey={e.name}>
                                    <Accordion.Header variant="danger" className="text-danger" style={{color: "red !important"}} >{e.name}</Accordion.Header>
                                    <Accordion.Body>
                                        <div>
                                            {resultInstance.status ?
                                                (resultInstance.status === 'passed' ?
                                                    (<>status : {resultInstance.status}</>)
                                                    : (
                                                        <pre>
                                                            {JSON.stringify(resultInstance.response, null, 2)}
                                                        </pre>
                                                        ))
                                                : (<>status : Yet to be executed
                                                </>)
                                            }
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

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