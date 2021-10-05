import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { Heading } from "./Heading";

test("renders heading", () => {
  const { getByText } = render(<Heading />);
  const linkElement = getByText(/hello react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders heading with argument", () => {
  const { getByText } = render(<Heading name={`World`} />);
  const linkElement = getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
});
