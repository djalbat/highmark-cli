"use strict";

const { readFile } = require("./utilities/fileSystem"),
      { classNameFromFilePath } = require("./utilities/division"),
      { nodeFromTokens, tokensFromContent } = require("./utilities/markdown");

function importer(filePath, context) {
  const content = readFile(filePath);

  if (content !== null) {
    const className = classNameFromFilePath(filePath),
          tokens = tokensFromContent(content),
          node = nodeFromTokens(tokens),
          importedNode = node,  ///
          importedTokens = tokens,  ///
          importedClassName = className;  ///

    if (node !== null) {
      Object.assign(context, {
        importedNode,
        importedTokens,
        importedClassName
      });
    }
  }
}

module.exports = importer;
