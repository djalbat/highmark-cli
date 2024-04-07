"use strict";

const { writeFile } = require("../utilities/fileSystem");

function htmlOperation(proceed, abort, context) {
  const { links, title, markdownHTML, outputFilePath, markdownStylesCSS } = context,
        filePath = outputFilePath,  ///
        content = `<!DOCTYPE html>
<html>
  <head>
    <title>${title}</title>
    
    <meta charset="utf-8" />

    ${links}
    
    <style>

      *,
      *::after,
      *::before {
        border: 0;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
    
    </style>
    <style>

${markdownStylesCSS}

    </style>
  </head>
  <body>

${markdownHTML}

  </body>
</html>
`;

  writeFile(filePath, content);

  proceed();
}

module.exports = htmlOperation;
