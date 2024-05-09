"use strict";

const { mediaTypeNames } = require("highmark-markdown"),
      { filePathUtilities } = require("occam-entities"),
      { cssUtilities, defaultMarkdownStyle } = require("highmark-markdown")

const { classNameFromFilePath } = require("../utilities/division"),
      { readFile, readDirectory } = require("../utilities/fileSystem"),
      { directoryPathFromFilePath } = require("../utilities/path"),
      { CLIENT_SELECTOR_STRING, RAW_HTML_SELECTOR_STRING } = require("../constants");

const { WEB_MEDIA_TYPE_NAME } = mediaTypeNames,
      { cssFromMarkdownStyleMediaTypeNameAndSelectorString } = cssUtilities,
      { isFilePathMarkdownStyleFilePath, isFilePathDefaultMarkdownStyleFilePath } = filePathUtilities;

function markdownStylesCSSOperation(proceed, abort, context) {
  const { copyClient, inputFilePath } = context,
        inputDirectoryPath = directoryPathFromFilePath(inputFilePath),
        markdownStyleFilePaths = [];

  readDirectory(inputDirectoryPath, (filePath) => {
    const filePathMarkdownStyleFilePath = isFilePathMarkdownStyleFilePath(filePath);

    if (filePathMarkdownStyleFilePath) {
      const markdownStyleFilePath = filePath,
            filePathDefaultMarkdownStyleFilePath = isFilePathDefaultMarkdownStyleFilePath(filePath);

      filePathDefaultMarkdownStyleFilePath ?
        markdownStyleFilePaths.unshift(markdownStyleFilePath) :
          markdownStyleFilePaths.push(markdownStyleFilePath);
    }
  });

  const selectorString = copyClient ?
                           CLIENT_SELECTOR_STRING :
                             RAW_HTML_SELECTOR_STRING,
        markdownStyle = defaultMarkdownStyle, ///
        mediaTypeName = WEB_MEDIA_TYPE_NAME,
        defaultCSS = cssFromMarkdownStyleMediaTypeNameAndSelectorString(markdownStyle, mediaTypeName, selectorString);

  let markdownStylesCSS = defaultCSS; ///

  markdownStyleFilePaths.forEach((markdownStyleFilePath) => {
    const selectorString = selectorStringFromMarkdownStyleFilePathAndCopyClient(markdownStyleFilePath, copyClient),
          markdownStyle = markdownStyleFromMarkdownStyleFilePath(markdownStyleFilePath),
          css = cssFromMarkdownStyleMediaTypeNameAndSelectorString(markdownStyle, mediaTypeName, selectorString, markdownStylesCSS);  ///

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

function selectorStringFromMarkdownStyleFilePathAndCopyClient(markdownStyleFilePath, copyClient) {
  let selectorString = copyClient ?
                         CLIENT_SELECTOR_STRING :
                           RAW_HTML_SELECTOR_STRING;

  const filePath = markdownStyleFilePath,  ///
        className = classNameFromFilePath(filePath);

  if (className !== null) {
    selectorString = `${selectorString}.${className}`;
  }

  return selectorString;
}
