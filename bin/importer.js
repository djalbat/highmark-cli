"use strict";

const { readFile } = require("./utilities/fileSystem"),
      { divisionIdentifierFromFilePath } = require("./utilities/division"),
      { nodeFromTokens, tokensFromContent } = require("./utilities/markdown");

function importer(filePath, indent) {
  let html = null;

  const content = readFile(filePath);

  if (content !== null) {
    const divisionIdentifier = divisionIdentifierFromFilePath(filePath),
          tokens = tokensFromContent(content),
          node = nodeFromTokens(tokens);

    if (node !== null) {
      html = node.asHTML(indent, {  ///
        tokens,
        importer,
        divisionIdentifier
      });
    }
  }

  return html;
}

module.exports = importer;
