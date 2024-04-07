"use strict";

const { readFile } = require("./utilities/fileSystem"),
      { divisionClassNameFromFilePath } = require("./utilities/division"),
      { nodeFromTokens, tokensFromContent } = require("./utilities/markdown");

function importer(filePath, indent, context) {
  let html = null;

  const content = readFile(filePath);

  if (content !== null) {
    const divisionClassName = divisionClassNameFromFilePath(filePath),
          tokens = tokensFromContent(content),
          node = nodeFromTokens(tokens);

    if (node !== null) {
      Object.assign(context, {
        tokens,
        divisionClassName
      });

      html = node.asHTML(indent, context);
    }
  }

  return html;
}

module.exports = importer;
