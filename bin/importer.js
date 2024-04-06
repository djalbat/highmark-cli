"use strict";

const { readFile } = require("./utilities/fileSystem");
const { nodeFromTokens, tokensFromContent } = require("./utilities/markdown");

function importer(filePath, indent) {
  let html = null;

  const content = readFile(filePath);

  if (content !== null) {
    const tokens = tokensFromContent(content),
          node = nodeFromTokens(tokens);

    if (node !== null) {
      html = node.asHTML(indent, {  ///
        tokens,
        importer
      });
    }
  }

  return html;
}

module.exports = importer;