"use strict";

const { filePathUtilities } = require("occam-entities"),
      { cssUtilities, defaultMarkdownStyle } = require("highmark-markdown-style")

const { readFile, readDirectory } = require("../utilities/fileSystem"),
      { divisionClassNameFromFilePath } = require("../utilities/division"),
      { PERIOD, DEFAULT_SELECTOR_STRING } = require("../constants"),
      { isFilePathFileName, directoryPathFromFilePath } = require("../utilities/name");

const { isFilePathMarkdownStyleFilePath } = filePathUtilities,
      { cssFromMarkdownStyleAndSelectorString } = cssUtilities;

function markdownStylesCSSOperation(proceed, abort, context) {
  const { inputFilePath } = context,
        directoryPath = directoryPathFromInputFilePath(inputFilePath),
        markdownStyle = defaultMarkdownStyle, ///
        selectorString = DEFAULT_SELECTOR_STRING,
        css = cssFromMarkdownStyleAndSelectorString(markdownStyle, selectorString);

  let markdownStylesCSS = css; ///

  readDirectory(directoryPath, (filePath) => {
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

function directoryPathFromInputFilePath(inputFilePath) {
  const filePath = inputFilePath, ///
        filePathFileName = isFilePathFileName(filePath),
        directoryPath = (filePathFileName) ?
                          PERIOD : ///
                            directoryPathFromFilePath(filePath);

  return directoryPath;
}

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
