import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Counter } from "./Counter";
import userEvent from "@testing-library/user-event";

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

test("should start at zero", () => {
  const { getByRole } = render(<Counter />);
  const counter = getByRole("counter");
  expect(counter).toHaveTextContent("0");
});

test("should start at another value", () => {
  const { getByRole } = render(<Counter start={10} />);
  const counter = getByRole("counter");
  expect(counter).toHaveTextContent("10");
});

test("should increment the count by one", () => {
  const { getByRole } = render(<Counter />);
  const counter = getByRole("counter");
  expect(counter).toHaveTextContent("0");
  fireEvent.click(counter);
  expect(counter).toHaveTextContent("1");
});

test("should increment the count by ten", () => {
  const { getByRole } = render(<Counter />);
  const counter = getByRole("counter");
  expect(counter).toHaveTextContent("0");
  userEvent.click(counter, { shiftKey: true });
  expect(counter).toHaveTextContent("10");
});
