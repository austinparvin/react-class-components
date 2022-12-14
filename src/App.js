import "./App.css";
import { useState } from "react";
import Constructor from "./components/Constructor";
import Render from "./components/Render";
import ComponentDidMount from "./components/ComponentDidMount";

function App() {
    const [counter, setCounter] = useState(0);
    return (
        <div className="App">
            <header className="App-header">
                <ComponentDidMount />
                <hr />
                <Render number={counter} />
                <button onClick={() => setCounter(counter + 1)}>
                    App add 1
                </button>
                <hr />
                <Constructor name={"constructor()"} />
            </header>
        </div>
    );
}

export default App;
