"use strict";

const { filePathUtilities } = require("occam-entities");

const { PERIOD } = require("../constants"),
      { readFile, readDirectory } = require("../utilities/fileSystem");

const { isFilePathMarkdownStyleFilePath } = filePathUtilities;

function markdownStylesToCSS(proceed, abort, context) {
  const directoryPath = PERIOD; ///

  readDirectory(directoryPath, (filePath) => {
    const filePathMarkdownStyleFilePath = isFilePathMarkdownStyleFilePath(filePath);

    if (filePathMarkdownStyleFilePath) {
      const markdownStyleFilePath = filePath, ///
            markdownStyleContent = readFile(markdownStyleFilePath);

      debugger
    }
  });

  proceed();
}

module.exports = markdownStylesToCSS;
