"use strict";

const { writeFile } = require("../utilities/fileSystem"),
      { NO_OUTPUT_FILE_PATH_MESSAGE } = require("../messages");

function htmlOperation(proceed, abort, context) {
  const { outputFilePath } = context;

  if (outputFilePath === null) {
    const message = NO_OUTPUT_FILE_PATH_MESSAGE;

    console.log(message);

    abort();

    return;
  }

  const { markdownHTML, markdownStylesCSS } = context,
        filePath = outputFilePath,  ///
        content = `<!DOCTYPE html>
<html>
  <head>
    <title>The Foundations of Symbolic Reasoning</title>
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
