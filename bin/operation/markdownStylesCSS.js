"use strict";

const { filePathUtilities } = require("occam-entities"),
      { cssUtilities, defaultMarkdownStyle } = require("highmark-markdown-style")

const { readFile, readDirectory } = require("../utilities/fileSystem"),
      { DEFAULT_SELECTOR_STRING } = require("../constants"),
      { directoryPathFromFilePath } = require("../utilities/path"),
      { divisionClassNameFromFilePath } = require("../utilities/division");

const { isFilePathMarkdownStyleFilePath } = filePathUtilities,
      { cssFromMarkdownStyleAndSelectorString } = cssUtilities;

function markdownStylesCSSOperation(proceed, abort, context) {
  const { inputFilePath } = context,
        defaultCSS = cssFromMarkdownStyleAndSelectorString(defaultMarkdownStyle, DEFAULT_SELECTOR_STRING),
        inputDirectoryPath = directoryPathFromFilePath(inputFilePath);

  let markdownStylesCSS = defaultCSS; ///

  readDirectory(inputDirectoryPath, (filePath) => {
    const filePathMarkdownStyleFilePath = isFilePathMarkdownStyleFilePath(filePath);

    if (filePathMarkdownStyleFilePath) {
      const markdownStyleFilePath = filePath, ///
            selectorString = selectorStringFromMarkdownStyleFilePath(markdownStyleFilePath),
            markdownStyle = markdownStyleFromMarkdownStyleFilePath(markdownStyleFilePath),
            css = cssFromMarkdownStyleAndSelectorString(markdownStyle, selectorString, markdownStylesCSS);  ///

      markdownStylesCSS = `${markdownStylesCSS}${css}`;
    }
  });

  Object.assign(context, {
    markdownStylesCSS
  });

  proceed();
}

module.exports = markdownStylesCSSOperation;

function markdownStyleFromMarkdownStyleFilePath(markdownStyleFilePath) {
  const filePath = markdownStyleFilePath, ///
        content = readFile(filePath),
        markdownStyle = content;  ///

  return markdownStyle;
}

function selectorStringFromMarkdownStyleFilePath(markdownStyleFilePath) {
  const filePath = markdownStyleFilePath,  ///
        divisionClassName = divisionClassNameFromFilePath(filePath),
        selectorString = (divisionClassName !== null) ?
                          `div.${divisionClassName}` :
                            `div`;

  return selectorString;
}
