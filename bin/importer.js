"use strict";

const { pathUtilities } = require("necessary");

const { readFile } = require("./utilities/fileSystem"),
      { classNameFromFilePath } = require("./utilities/division"),
      { nodeFromTokens, tokensFromContent } = require("./utilities/markdown");

const { concatenatePaths } = pathUtilities;

function importer(filePath, context) {
  const { projectDirectoryName } = context;

  filePath = concatenatePaths(projectDirectoryName, filePath);  ///

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
