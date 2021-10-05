import React, { Component } from "react";

export type CounterProps = {
  label?: string;
  start?: number;
};
const initialState = { count: 0 };
export type CounterState = Readonly<typeof initialState>;

export class Counter extends Component<CounterProps, CounterState> {
  readonly state: CounterState = initialState;

  componentDidMount() {
    if (this.props.start) {
      this.setState({
        count: this.props.start,
      });
    }
  }

  incrementCounter = (event: React.MouseEvent<HTMLElement>) => {
    const inc: number = event.shiftKey ? 10 : 1;
    this.setState({ count: this.state.count + inc });
  };

  render() {
    const { label = "Count" } = this.props;
    return (
      <div>
        <span title="Count Label">{label}</span>
        <span
          id="counter"
          title="Current Count"
          onClick={this.incrementCounter}
        >
          {this.state.count}
        </span>
      </div>
    );
  }
}
