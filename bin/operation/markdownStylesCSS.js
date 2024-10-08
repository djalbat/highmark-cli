"use strict";

const { constants } = require("highmark-client"),
      { cssUtilities, defaultMarkdownStyle } = require("highmark-markdown")

const { DIVS_SELECTOR_STRING } = require("../constants"),
      { classNameFromFilePath } = require("../utilities/division"),
      { readFile, readDirectory } = require("../utilities/fileSystem"),
      { isFilePathMarkdownStyleFilePath, isFilePathDefaultMarkdownStyleFilePath } = require("../utilities/filePath");

const { DIVS_SELECTOR_STRING: CLIENT_DIVS_SELECTOR_STRING } = constants,
      { cssFromMarkdownStyleAndSelectorString } = cssUtilities;

function markdownStylesCSSOperation(proceed, abort, context) {
  const { client, projectDirectoryName } = context,
        projectDirectoryPath = projectDirectoryName,  ///
        markdownStyleFilePaths = [];

  readDirectory(projectDirectoryPath, (filePath) => {
    const filePathMarkdownStyleFilePath = isFilePathMarkdownStyleFilePath(filePath);

    if (filePathMarkdownStyleFilePath) {
      const markdownStyleFilePath = filePath,
            filePathDefaultMarkdownStyleFilePath = isFilePathDefaultMarkdownStyleFilePath(filePath);

      filePathDefaultMarkdownStyleFilePath ?
        markdownStyleFilePaths.unshift(markdownStyleFilePath) :
          markdownStyleFilePaths.push(markdownStyleFilePath);
    }
  });

  const selectorString = client ?
                           CLIENT_DIVS_SELECTOR_STRING :
                             DIVS_SELECTOR_STRING,
        markdownStyle = defaultMarkdownStyle, ///
        defaultCSS = cssFromMarkdownStyleAndSelectorString(markdownStyle, selectorString);

  let markdownStylesCSS = defaultCSS; ///

  markdownStyleFilePaths.forEach((markdownStyleFilePath) => {
    const selectorString = selectorStringFromMarkdownStyleFilePathAndClient(markdownStyleFilePath, client),
          markdownStyle = markdownStyleFromMarkdownStyleFilePath(markdownStyleFilePath),
          css = cssFromMarkdownStyleAndSelectorString(markdownStyle, selectorString, markdownStylesCSS);  ///

    markdownStylesCSS = `${markdownStylesCSS}${css}`;
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

function selectorStringFromMarkdownStyleFilePathAndClient(markdownStyleFilePath, client) {
  let selectorString = client ?
                         CLIENT_DIVS_SELECTOR_STRING :
                           DIVS_SELECTOR_STRING;

  const filePath = markdownStyleFilePath,  ///
        className = classNameFromFilePath(filePath);

  if (className !== null) {
    selectorString = `${selectorString}.${className}`;
  }

  return selectorString;
}
