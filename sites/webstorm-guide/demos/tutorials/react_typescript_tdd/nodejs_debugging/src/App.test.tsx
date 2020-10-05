import React from "react";
import { render } from "@testing-library/react";
import App, { label } from "./App";

test("renders hello react", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/hello react/i);
  expect(linkElement).toBeInTheDocument();
});

test("generates a label", () => {
  const result = label("React");
  expect(result).toEqual("Hello REACT");
});
