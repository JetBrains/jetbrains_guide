import React from "react";

export type CounterProps = {
  label?: string;
  count: number;
  onCounterIncrease: (isShift: boolean) => void;
};

export const Counter = ({
  label = "Count",
  count,
  onCounterIncrease,
}: CounterProps) => {
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    onCounterIncrease(event.shiftKey);
  };
  return (
    <div className="counter">
      <label htmlFor="counter">{label}</label>
      <span id="counter" role="counter" onClick={handleClick}>
        {count}
      </span>
    </div>
  );
};
//
// const initialState = { count: 0 };
// export type CounterState = Readonly<typeof initialState>;
//
// export class Counter2 extends Component<CounterProps, CounterState> {
//   readonly state: CounterState = initialState;
//
//   componentDidMount() {
//     if (this.props.start) {
//       this.setState({
//         count: this.props.start,
//       });
//     }
//   }
//
//   incrementCounter = (event: React.MouseEvent<HTMLElement>) => {
//     const inc: number = event.shiftKey ? 10 : 1;
//     this.setState({ count: this.state.count + inc });
//   };
//
//   render() {
//     const { label = "Count" } = this.props;
//     return (
//       <div>
//         <label htmlFor="counter">{label}</label>
//         <span id="counter" role="counter" onClick={this.incrementCounter}>
//           {this.state.count}
//         </span>
//       </div>
//     );
//   }
// }
