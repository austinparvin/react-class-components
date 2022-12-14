import React from "react";
import { initialComponentDidMountState } from "../constants";

class ComponentDidMount extends React.Component {
    constructor(props) {
        super(props);

        this.state = initialComponentDidMountState;
    }
    componentDidMount() {
        // This will cause the user to see 1, but why not just initialize the state with 1?
        // this.setState({ counter: 1 });

        // use this to interact with the DOM to conditionally change the component
        if (window.innerWidth < 1000) {
            this.setState((prevState) => {
                return { ...prevState, isLessThan1000: true };
            });
        }

        // Main use would be fetching data on component load
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
            .then((response) => response.json())
            .then()
            .then((data) =>
                this.setState((prevState) => {
                    return { ...prevState, data: data[0] };
                })
            );
    }
    render() {
        return (
            <div>
                <h2>ComponentDidMount Counter: {this.state.counter}</h2>
                <h3>
                    isLessThan1000:{" "}
                    {this.state.isLessThan1000 ? "true" : "false"}
                </h3>
                <h4>JSON data request response:</h4>
                <h5>{JSON.stringify(this.state.data)}</h5>
            </div>
        );
    }
}

export default ComponentDidMount;
