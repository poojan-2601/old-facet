import React, { useEffect, useState } from "react";
import { Accordion, Container, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "../../axios";

const ExecuteTestSuite = () => {
  let { testsuite, projSlug } = useParams();
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    {
      fetch_data();
    }
  }, []);
  const fetch_data = () => {
    axios
      .post(`/api/tests`, {
        testsuite: testsuite,
        project: projSlug,
      })
      .then((res) => {
        setResult(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        alert("something went wrong");
      });
  };
  return (
    <>
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <>
          <h3 className="m-3">TestSuite Results for {testsuite}</h3>
          {result.map((e) => {
            let resultInstance =
              result.filter((res) => res.name === e.name)[0] || {};
            console.log(resultInstance["response"][0]);
            return (
              <Container>
                <Accordion>
                  <Accordion.Item
                    className={`my-2 ${
                      resultInstance["response"][0].status === "passed"
                        ? "border-success text-success"
                        : resultInstance["response"][0].status === "failed"
                        ? "border-danger text-danger"
                        : ""
                    }`}
                    eventKey={e.name}
                  >
                    <Accordion.Header
                      variant="danger"
                      className="text-danger"
                      style={{ color: "red !important" }}
                    >
                      {e.name}
                    </Accordion.Header>
                    <Accordion.Body>
                      <div>
                        {resultInstance["response"][0].status ? (
                          resultInstance["response"][0].status === "passed" ? (
                            <>status : {resultInstance["response"][0].status}</>
                          ) : (
                            <pre>
                              {JSON.stringify(
                                resultInstance["response"][0].response,
                                null,
                                2
                              )}
                            </pre>
                          )
                        ) : (
                          <>status : Yet to be executed</>
                        )}
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Container>
            );
          })}
        </>
      )}
    </>
  );
};

export default ExecuteTestSuite;
