import React, {Component} from 'react';

interface ICounterProps {
    label?: string;
    start?: number;
}

interface ICounterState {
    count: number;
}

class Counter extends Component<ICounterProps, ICounterState> {
    static defaultProps = {
        label: 'Count',
        start: 0
    };

    constructor (props: ICounterProps) {
        super(props);
        const count: number = props.start ? props.start : 0;
        this.state = {
            count: count
        }
    }

    render() {
        return (
            <div className="counter">
                <label>{this.props.label}</label>
                <span>{this.state.count}</span>
            </div>
        );
    }
}

export default Counter;
