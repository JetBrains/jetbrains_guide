const remark = require('remark');
const remarkHTML = require('remark-html');

const markdownToHtml = (body: string) => {
  return remark()
    .use(remarkHTML)
    .processSync(body)
    .toString();
};

export default markdownToHtml;
