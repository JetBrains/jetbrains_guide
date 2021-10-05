import React, { Component } from "react";

export type CounterProps = { label?: string };

export class Counter extends Component<CounterProps> {
  render() {
    const { label = "Count" } = this.props;
    return (
      <div>
        <span title="Count Label">{label}</span>
        <span id="counter" title="Current Count">
          1
        </span>
      </div>
    );
  }
}
