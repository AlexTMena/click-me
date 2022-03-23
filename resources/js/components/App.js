import React, { useEffect, useState } from "react";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import ReactDOM from "react-dom";

function App() {
    const [count, setCount] = useState(0);
    const [countIsLoading, setCountIsLoading] = useState(false);
    const [submitHandleIsLoading, setSubmitHandleIsLoading] = useState(false);

    useEffect(() => {
        setCountIsLoading(true);
        fetch("/api/clicks")
            .then((res) => {
                setCountIsLoading(false);
                return res.json();
            })
            .then((data) => {
                setCount(data.data.count);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitHandleIsLoading(true);

        fetch("/api/clicks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                count: 1,
            }),
        })
            .then((res) => {
                setSubmitHandleIsLoading(false);
                return res.json();
            })
            .then((data) => {
                setCount(data.data.count);
            });
    };

    return (
        <Container className="wrapper">
            <div className="body">
                <h1 className="body__header">Click Me!</h1>
                <div className="body__content">
                    <div className="body__content__count">
                        {countIsLoading ? (
                            <Spinner animation="border" />
                        ) : (
                            count
                        )}
                    </div>
                    <div className="body__content__text">
                        Today's Click Count
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <Button
                            type="submit"
                            disabled={
                                countIsLoading || submitHandleIsLoading
                                    ? true
                                    : false
                            }
                        >
                            {countIsLoading || submitHandleIsLoading
                                ? "Loading.."
                                : "Click Me!"}
                        </Button>
                    </Form>
                </div>
            </div>
        </Container>
    );
}

export default App;

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
