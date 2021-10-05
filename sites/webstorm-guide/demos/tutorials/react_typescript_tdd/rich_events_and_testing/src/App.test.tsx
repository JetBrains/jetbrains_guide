import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders hello react", () => {
  const { getByTitle, getByText } = render(<App />);
  const linkElement = getByText(/hello react/i);
  expect(linkElement).toBeInTheDocument();
  const label = getByTitle("Count Label");
  expect(label).toBeInTheDocument();
  const counter = getByTitle("Current Count");
  expect(counter).toHaveTextContent("0");
});
