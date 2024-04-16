"use strict";

const { readFile } = require("./utilities/fileSystem"),
      { divisionClassNameFromFilePath } = require("./utilities/division"),
      { nodeFromTokens, tokensFromContent } = require("./utilities/markdown");

function importer(filePath, context) {
  const content = readFile(filePath);

  if (content !== null) {
    const divisionClassName = divisionClassNameFromFilePath(filePath),
          tokens = tokensFromContent(content),
          node = nodeFromTokens(tokens);

    if (node !== null) {
      const importedNode = node,  ///
            importedTokens = tokens,  ///
            divisionMarkdownNode = node;  ///

      divisionMarkdownNode.setDivisionClassName(divisionClassName);

      Object.assign(context, {
        importedNode,
        importedTokens
      });
    }
  }
}

module.exports = importer;
