/**
 * @jest-environment @happy-dom/jest-environment
 */
import React from "react"
import { render } from "@testing-library/react"

import Footer, { FooterProps } from "./Footer"

export const DUMMY_FOOTER: FooterProps = {
  copyright: "copyright1",
}

test("Footer", () => {
  const { getByText } = render(<Footer {...DUMMY_FOOTER} />)
  const copyright = getByText(DUMMY_FOOTER.copyright)
  expect(copyright).toBeTruthy()
})
