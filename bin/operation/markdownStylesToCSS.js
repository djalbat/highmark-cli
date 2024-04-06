"use strict";

const { filePathUtilities } = require("occam-entities"),
      { cssUtilities, defaultMarkdownStyle } = require("highmark-markdown-style")

const { readFile, readDirectory } = require("../utilities/fileSystem"),
      { divisionIdentifierFromFilePath } = require("../utilities/division"),
      { PERIOD, DEFAULT_SELECTOR_STRING } = require("../constants");

const { isFilePathMarkdownStyleFilePath } = filePathUtilities,
      { divisionCSSFromMarkdownStyleAndSelectorString } = cssUtilities;

function markdownStylesToCSS(proceed, abort, context) {
  const selectorString = DEFAULT_SELECTOR_STRING,
        markdownStyle = defaultMarkdownStyle, ///
        directoryPath = PERIOD, ///
        divisionCSS = divisionCSSFromMarkdownStyleAndSelectorString(markdownStyle, selectorString);

  let css = divisionCSS; ///

  readDirectory(directoryPath, (filePath) => {
    const filePathMarkdownStyleFilePath = isFilePathMarkdownStyleFilePath(filePath);

    if (filePathMarkdownStyleFilePath) {
      const markdownStyleFilePath = filePath, ///
            selectorString = selectorStringFromMarkdownStyleFilePath(markdownStyleFilePath),
            markdownStyle = markdownStyleFromMarkdownStyleFilePath(markdownStyleFilePath),
            divisionCSS = divisionCSSFromMarkdownStyleAndSelectorString(markdownStyle, selectorString, css);  ///

      css = `${css}${divisionCSS}`;
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
