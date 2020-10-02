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

  render() {
    const { label = "Count" } = this.props;
    return (
      <div>
        <label htmlFor="counter">{label}</label>
        <span id="counter" role="counter">
          {this.state.count}
        </span>
      </div>
    );
  }
}
