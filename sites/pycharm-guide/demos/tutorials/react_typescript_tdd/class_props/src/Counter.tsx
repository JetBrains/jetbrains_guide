import React, { Component } from "react";

export type CounterProps = { label?: string };

export class Counter extends Component<CounterProps> {
  render() {
    const { label = "Count" } = this.props;
    return (
      <div>
        <label htmlFor="counter">{label}</label>
        <span id="counter" role="counter">
          1
        </span>
      </div>
    );
  }
}
