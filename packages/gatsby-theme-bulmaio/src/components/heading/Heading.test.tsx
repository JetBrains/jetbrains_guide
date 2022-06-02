/**
 * @jest-environment @happy-dom/jest-environment
 */
import React from "react"
import { render } from "@testing-library/react"

import Heading, { HeadingProps } from "./Heading"

export const DUMMY_HEADING: HeadingProps = {
  title: "title1",
  subtitle: "subtitle1",
}

test("Heading", () => {
  const { getByText } = render(<Heading {...DUMMY_HEADING} />)
  const title = getByText(DUMMY_HEADING.title)
  expect(title).toBeTruthy()
  if (DUMMY_HEADING.subtitle) {
    const subtitle = getByText(DUMMY_HEADING.subtitle)
    expect(subtitle).toBeTruthy()
  }
})
