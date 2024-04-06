"use strict";

const { cssUtilities } = require("highmark-markdown-style"),
      { filePathUtilities } = require("occam-entities");

const { PERIOD } = require("../constants"),
      { readFile, readDirectory } = require("../utilities/fileSystem");

const { isFilePathMarkdownStyleFilePath } = filePathUtilities,
      { cssFromMarkdownStyleAndSelectorsList } = cssUtilities;

function markdownStylesToCSS(proceed, abort, context) {
  const directoryPath = PERIOD; ///

  readDirectory(directoryPath, (filePath) => {
    const filePathMarkdownStyleFilePath = isFilePathMarkdownStyleFilePath(filePath);

    if (filePathMarkdownStyleFilePath) {
      const content = readFile(filePath),
            markdownStyle = content,  ///


      debugger
    }
  });

  proceed();
}

module.exports = markdownStylesToCSS;
