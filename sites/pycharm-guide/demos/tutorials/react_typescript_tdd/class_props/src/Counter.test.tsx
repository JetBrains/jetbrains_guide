import React from "react";
import { render } from "@testing-library/react";
import { Counter } from "./Counter";

test("should render a label and counter", () => {
  const { getByLabelText, getByRole } = render(<Counter />);
  const label = getByLabelText("Count");
  expect(label).toBeInTheDocument();
  const counter = getByRole("counter");
  expect(counter).toBeInTheDocument();
});

test("should render a counter with custom label", () => {
  const { getByLabelText } = render(<Counter label={`Current`} />);
  const label = getByLabelText("Current");
  expect(label).toBeInTheDocument();
});
