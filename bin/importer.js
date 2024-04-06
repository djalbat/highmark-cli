"use strict";

const { readFile } = require("./utilities/file");
const { nodeFromTokens, tokensFromContent } = require("./utilities/markdown");

function importer(filePath, indent, context) {
  let html = null;

  const content = readFile(filePath);

  if (content !== null) {
    const tokens = tokensFromContent(content),
          node = nodeFromTokens(tokens);

    let { indent } = context;

    if (node !== null) {
      html = node.asHTML({
        tokens,
        importer
      });
    }
  }

  return html;
}

module.exports = importer;