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
        <Container>
            <div>Click Me!</div>
            <div>{countIsLoading ? <Spinner animation="border" /> : count}</div>
            <div>Today's Click Count</div>
            <Form onSubmit={handleSubmit}>
                <Button
                    type="submit"
                    disabled={
                        countIsLoading || submitHandleIsLoading ? true : false
                    }
                >
                    {countIsLoading || submitHandleIsLoading
                        ? "Loading.."
                        : "Click Me!"}
                </Button>
            </Form>
        </Container>
    );
}

export default App;

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
