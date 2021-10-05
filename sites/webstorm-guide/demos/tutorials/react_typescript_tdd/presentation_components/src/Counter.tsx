import React, { FC } from "react";

export type CounterProps = {
  label?: string;
  count: number;
  onCounterIncrease: (isShift: boolean) => void;
};

export const Counter: FC<CounterProps> = ({
  label = "Count",
  count,
  onCounterIncrease,
}: CounterProps) => {
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    onCounterIncrease(event.shiftKey);
  };
  return (
    <div className="counter" onClick={handleClick}>
      <span title="Count Label">{label}</span>
      <span id="counter" title="Current Count">
        {count}
      </span>
    </div>
  );
};
