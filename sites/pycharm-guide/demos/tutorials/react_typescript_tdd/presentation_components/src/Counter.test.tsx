import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Counter } from "./Counter";

test("should render a label and counter", () => {
  const handler = jest.fn();
  const { getByLabelText, getByRole } = render(
    <Counter count={0} onCounterIncrease={handler} />
  );
  const label = getByLabelText("Count");
  expect(label).toBeInTheDocument();
  const counter = getByRole("counter");
  expect(counter).toBeInTheDocument();
});

test("should render a counter with custom label", () => {
  const handler = jest.fn();
  const { getByLabelText } = render(
    <Counter label={`Current`} count={0} onCounterIncrease={handler} />
  );
  const label = getByLabelText("Current");
  expect(label).toBeInTheDocument();
});

test("should call the incrementer function", () => {
  const handler = jest.fn();
  const { getByRole } = render(
    <Counter count={0} onCounterIncrease={handler} />
  );
  const counter = getByRole("counter");
  fireEvent.click(counter);
  expect(handler).toBeCalledWith(false);
});
