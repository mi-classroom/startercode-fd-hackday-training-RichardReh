const header = require('./partials/header.11ty');
const footer = require('./partials/footer.11ty');

exports.render = function (pageData) {

  const data = pageData;

  return `
  <!doctype html>
  <html lang="de">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1.0">
      <title>Cranach Digital Archive | ${data.title}</title>
      <link href="/assets/main.css" rel="stylesheet">
      <link rel="icon" type="image/svg+xml" href="/assets/images/favicon.svg">
    </head>
    <body>
    <div class="page">
      ${header.html}
      ${data.content}
      ${footer.html}
    </div>
    <script src="/assets/js/main.js"></script>
  </body>
  </html>
  `;
}