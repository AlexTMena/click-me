import React from "react";
import { Button, Container } from "react-bootstrap";
import ReactDOM from "react-dom";

function App() {
    return (
        <Container>
            <div>Click Me!</div>
            <div>
                <span>0</span> Today's Click Count
            </div>
            <Button>Click Me!</Button>
        </Container>
    );
}

export default App;

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
