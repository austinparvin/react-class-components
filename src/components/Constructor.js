import React from "react";
import { initialCounterState } from "../constants";

class Constructor extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialCounterState;

        // A: required bind
        this.onClick = this.onClick.bind(this);
    }

    // A: bind required to reference "this"
    onClick() {
        this.setState({ counter: this.state.counter + 1 });
    }

    // B: ES6 syntax
    es6OnClick = () => {
        this.setState({ counter: this.state.counter + 1 });
    };
    render() {
        return (
            <div>
                <h1>Method: {this.props.name}</h1>
                <h2>Counter: {this.state.counter}</h2>
                {/* A: */}
                <button onClick={this.onClick}>Bind Required Add 1</button>
                {/* B: */}
                <button onClick={this.es6OnClick}>ES6 Add 1</button>
            </div>
        );
    }
}

export default Constructor;
