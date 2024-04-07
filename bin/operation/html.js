"use strict";

const { writeFile } = require("../utilities/fileSystem");

const { EMPTY_STRING } = require("../constants");

function htmlOperation(proceed, abort, context) {
  const { title, markdownHTML, outputFilePath, markdownStylesCSS } = context,
        titleHTML = titleHTMLFromTitle(title),
        filePath = outputFilePath,  ///
        content = `<!DOCTYPE html>
<html>
  <head>
  
    ${titleHTML}
    
    <meta charset="utf-8" />

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

function titleHTMLFromTitle(title) {
  const titleHTML = (title === null) ?
                      EMPTY_STRING :
                        `<title>${title}</title>`;

  return titleHTML;
}
