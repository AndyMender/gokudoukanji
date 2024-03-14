import { Component } from 'react';

const dateOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
};

const timeOptions = {
    hour: "2-digit",
    minute: "2-digit"
};

export default class Clock extends Component {
    constructor(props) {
        // NOTE: this is a mandatory step to initialize the parent Component!
        super(props);
        // Will be changed via 'useState'
        this.state = { date: new Date() };
    }

    // Runs after the component is rendered
    componentDidMount() {
        // Set timer () and get the interval
        this.timerID = setInterval(
            () => this.tick(),
            60000                       // update once per min
        );
    }

    // Runs when the component is destroyed (for instance, when the rendered template changes)
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        // Uses 'setState' to enforce a change of component's state and re-rendering
        // NOTE: 'state' Objects are merged so only the currently updated field needs to be passed
        this.setState((state, props) => (
            { date: new Date() }
        ));
    }

    render() {
        return (
            <div>
                {this.state.date.toLocaleDateString(undefined, dateOptions)}, 
                {this.state.date.toLocaleTimeString(undefined, timeOptions)}
            </div>
        );
    }
}
