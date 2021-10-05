import React from "react";
import { render } from "@testing-library/react";
import { Counter } from "./Counter";

test("should render a label and counter", () => {
  const { getByTitle } = render(<Counter />);
  const label = getByTitle("Count Label");
  expect(label).toBeInTheDocument();
  const count = getByTitle("Current Count");
  expect(count).toBeInTheDocument();
});

test("should render a counter with custom label", () => {
  const { getByTitle } = render(<Counter label={`Current`} />);
  const label = getByTitle("Current Count");
  expect(label).toBeInTheDocument();
});
