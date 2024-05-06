"use strict";

const { mediaTypeNames } = require("highmark-markdown"),
      { filePathUtilities } = require("occam-entities"),
      { cssUtilities, defaultMarkdownStyle } = require("highmark-markdown")

const { classNameFromFilePath } = require("../utilities/division"),
      { readFile, readDirectory } = require("../utilities/fileSystem"),
      { DEFAULT_SELECTOR_STRING } = require("../constants"),
      { directoryPathFromFilePath } = require("../utilities/path");

const { WEB_MEDIA_TYPE_NAME } = mediaTypeNames,
      { cssFromMarkdownStyleMediaTypeNameAndSelectorString } = cssUtilities,
      { isFilePathMarkdownStyleFilePath, isFilePathDefaultMarkdownStyleFilePath } = filePathUtilities;

function markdownStylesCSSOperation(proceed, abort, context) {
  const { inputFilePath } = context,
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

  const selectorString = DEFAULT_SELECTOR_STRING,
        markdownStyle = defaultMarkdownStyle, ///
        mediaTypeName = WEB_MEDIA_TYPE_NAME,
        defaultCSS = cssFromMarkdownStyleMediaTypeNameAndSelectorString(markdownStyle, mediaTypeName, selectorString);

  let markdownStylesCSS = defaultCSS; ///

  markdownStyleFilePaths.forEach((markdownStyleFilePath) => {
    const selectorString = selectorStringFromMarkdownStyleFilePath(markdownStyleFilePath),
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

function selectorStringFromMarkdownStyleFilePath(markdownStyleFilePath) {
  const filePath = markdownStyleFilePath,  ///
        className = classNameFromFilePath(filePath),
        selectorString = (className !== null) ?
                          `${DEFAULT_SELECTOR_STRING}.${className}` :
                            `${DEFAULT_SELECTOR_STRING}`;

  return selectorString;
}
