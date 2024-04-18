"use strict";

const { readFile } = require("./utilities/fileSystem"),
      { classNameFromFilePath } = require("./utilities/division"),
      { nodeFromTokens, tokensFromContent } = require("./utilities/markdown");

function importer(filePath, context) {
  const content = readFile(filePath);

  if (content !== null) {
    const className = classNameFromFilePath(filePath),
          tokens = tokensFromContent(content),
          node = nodeFromTokens(tokens);

    if (node !== null) {
      Object.assign(context, {
        node,
        tokens,
        className
      });
    }
  }
}

module.exports = importer;
