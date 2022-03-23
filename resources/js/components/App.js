import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import ReactDOM from "react-dom";

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch("/api/clicks")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setCount(data.data.count);
            });
    });

    return (
        <Container>
            <div>Click Me!</div>
            <div>
                <span>{count}</span> Today's Click Count
            </div>
            <Button>Click Me!</Button>
        </Container>
    );
}

export default App;

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
