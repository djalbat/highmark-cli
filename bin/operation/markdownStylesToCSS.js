"use strict";

const { cssUtilities } = require("highmark-markdown-style"),
      { filePathUtilities } = require("occam-entities");

const { PERIOD } = require("../constants"),
      { readFile, readDirectory } = require("../utilities/fileSystem"),
      { divisionIdentifierFromFilePath } = require("../utilities/division");

const { isFilePathMarkdownStyleFilePath } = filePathUtilities,
      { cssFromMarkdownStyleAndSelectorString } = cssUtilities;

function markdownStylesToCSS(proceed, abort, context) {
  let css = null;

  const directoryPath = PERIOD; ///

  readDirectory(directoryPath, (filePath) => {
    const filePathMarkdownStyleFilePath = isFilePathMarkdownStyleFilePath(filePath);

    if (filePathMarkdownStyleFilePath) {
      const markdownStyleFilePath = filePath, ///
            markdownStyle = markdownStyleFromMarkdownStyleFilePath(markdownStyleFilePath),
            selectorString = selectorStringFromMarkdownStyleFilePath(markdownStyleFilePath);

      css = cssFromMarkdownStyleAndSelectorString(markdownStyle, selectorString, css);  ///
    }
  });

  Object.assign(context, {
    css
  });

  proceed();
}

module.exports = markdownStylesToCSS;

function markdownStyleFromMarkdownStyleFilePath(markdownStyleFilePath) {
  const filePath = markdownStyleFilePath, ///
        content = readFile(filePath),
        markdownStyle = content;  ///

  return markdownStyle;
}

function selectorStringFromMarkdownStyleFilePath(markdownStyleFilePath) {
  const filePath = markdownStyleFilePath,  ///
        divisionIdentifier = divisionIdentifierFromFilePath(filePath),
        selectorString = (divisionIdentifier !== null) ?
                          `div#${divisionIdentifier}` :
                            `div`;

  return selectorString;
}
