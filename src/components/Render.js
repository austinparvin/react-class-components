import React from "react";
import { initialCounterState } from "../constants";

class Render extends React.Component {
    constructor(props) {
        super(props);

        this.onRenderClick = this.onRenderClick.bind(this);
        this.state = initialCounterState;
    }
    onRenderClick() {
        this.setState({ counter: this.state.counter + 1 });
    }
    onForceClick = () => {
        this.forceUpdate();
    };
    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.counter > 3) {
            return false;
        }
        return nextProps.number < 3 ? true : false;
    }
    render() {
        return (
            <div>
                <h2>Rendered Component Counter</h2>
                <h2>shouldComponentUpdate</h2>
                <h3>Render Counter: {this.state.counter}</h3>
                <button onClick={this.onRenderClick}>Render Add 1</button>
                <h3>App Counter: {this.props.number}</h3>
                <button onClick={this.onForceClick}>Force Update</button>
            </div>
        );
    }
}

export default Render;
