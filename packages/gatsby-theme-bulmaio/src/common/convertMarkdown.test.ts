import markdownToHtml from "./convertMarkdown"

test("markdownToHtml", () => {
  const input = "*hello* world"
  const output = markdownToHtml(input)
  expect(output).toEqual("<p><em>hello</em> world</p>\n")
})
