import React, {Component} from 'react';

interface ICounterProps {
    label?: string;
}

class Counter extends Component<ICounterProps> {
    static defaultProps = {
        label: 'Count'
    };

    render() {
        return (
            <div className="counter">
                <label>{this.props.label}</label>
                <span>1</span>
            </div>
        );
    }
}

export default Counter;
