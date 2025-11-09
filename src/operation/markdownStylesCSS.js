"use strict";

import { constants } from "highmark-client";
import { grammarUtilities, defaultMarkdownStyle } from "highmark-markdown";

import { classNameFromFilePath } from "../utilities/division";
import { readFile, readDirectory } from "../utilities/fileSystem";
import { DIVS_CSS_SELECTORS_STRING } from "../constants";
import { isFilePathMarkdownStyleFilePath, isFilePathDefaultMarkdownStyleFilePath } from "../utilities/filePath";

const { DIVS_CSS_SELECTORS_STRING: CLIENT_DIVS_CSS_SELECTORS_STRING } = constants,
      { cssFromMarkdownStyleAndCSSSelectorsString } = grammarUtilities;

export default function markdownStylesCSSOperation(proceed, abort, context) {
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

  const cssSelectorString = client ?
                           CLIENT_DIVS_CSS_SELECTORS_STRING :
                             DIVS_CSS_SELECTORS_STRING,
        markdownStyle = defaultMarkdownStyle, ///
        css = cssFromMarkdownStyleAndCSSSelectorsString(markdownStyle, cssSelectorString);

  let markdownStylesCSS = css; ///

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

function markdownStyleFromMarkdownStyleFilePath(markdownStyleFilePath) {
  const filePath = markdownStyleFilePath, ///
        content = readFile(filePath),
        markdownStyle = content;  ///

  return markdownStyle;
}

function selectorStringFromMarkdownStyleFilePathAndClient(markdownStyleFilePath, client) {
  let selectorString = client ?
                         CLIENT_DIVS_CSS_SELECTORS_STRING :
                           DIVS_CSS_SELECTORS_STRING;

  const filePath = markdownStyleFilePath,  ///
        className = classNameFromFilePath(filePath);

  if (className !== null) {
    selectorString = `${selectorString}.${className}`;
  }

  return selectorString;
}
