const React = require("react")
// eslint-disable-next-line no-undef
const gatsby = jest.requireActual("gatsby")

// Mocking importing of images leaves an ugly console.warn
global.console = {
  warn: jest.fn(),
}

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(
    // these props are invalid for an `a` tag
    ({
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      activeClassName,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      activeStyle,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      getProps,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      innerRef,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      partiallyActive,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ref,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      replace,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      to,
      ...rest
    }) =>
      React.createElement("a", {
        ...rest,
        href: to,
      })
  ),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn(),
}

beforeEach(() => {
  jest.clearAllMocks()
})
