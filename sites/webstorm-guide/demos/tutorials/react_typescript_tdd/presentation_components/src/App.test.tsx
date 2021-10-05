import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("renders hello react", () => {
  const { getByTitle, getByText } = render(<App />);
  const linkElement = getByText(/hello react/i);
  expect(linkElement).toBeInTheDocument();
  const label = getByTitle("Count Label");
  expect(label).toBeInTheDocument();
  const counter = getByTitle("Current Count");
  expect(counter).toHaveTextContent("0");
});

test("updates state when increment is called without shift", () => {
  const { getByTitle } = render(<App />);
  const counter = getByTitle("Current Count");
  expect(counter).toHaveTextContent("0");
  userEvent.click(counter);
  expect(counter).toHaveTextContent("1");
});

test("updates state when increment is called with shift", () => {
  const { getByTitle } = render(<App />);
  const counter = getByTitle("Current Count");
  expect(counter).toHaveTextContent("0");
  userEvent.click(counter, { shiftKey: true });
  expect(counter).toHaveTextContent("10");
});
