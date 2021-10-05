import React from "react";
import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

test("should start at zero", () => {
  const { getByTitle } = render(<Counter />);
  const counter = getByTitle("Current Count");
  expect(counter).toHaveTextContent("0");
});

test("should start at another value", () => {
  const { getByTitle } = render(<Counter start={10} />);
  const counter = getByTitle("Current Count");
  expect(counter).toHaveTextContent("10");
});

test("should increment the count by one", () => {
  const { getByTitle } = render(<Counter />);
  const counter = getByTitle("Current Count");
  expect(counter).toHaveTextContent("0");
  fireEvent.click(counter);
  expect(counter).toHaveTextContent("1");
});

test("should increment the count by ten", () => {
  const { getByTitle } = render(<Counter />);
  const counter = getByTitle("Current Count");
  expect(counter).toHaveTextContent("0");
  userEvent.click(counter, { shiftKey: true });
  expect(counter).toHaveTextContent("10");
});
