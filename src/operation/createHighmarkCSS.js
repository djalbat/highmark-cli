"use strict";

import { cssSelectorStrings } from "highmark-client";
import { grammarUtilities, defaultMarkdownStyle } from "highmark-markdown";

import { classNameFromFilePath } from "../utilities/division";
import { readFile, readDirectory } from "../utilities/fileSystem";
import { isFilePathMarkdownStyleFilePath, isFilePathDefaultMarkdownStyleFilePath } from "../utilities/filePath";

const { cssFromMarkdownStyleAndCSSSelectorsString } = grammarUtilities,
      { DIVS_CSS_SELECTORS_STRING, CLIENT_DIVS_CSS_SELECTOR_STRING } = cssSelectorStrings;

export default function createHighmarkCSSOperation(proceed, abort, context) {
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
                              CLIENT_DIVS_CSS_SELECTOR_STRING :
                                DIVS_CSS_SELECTORS_STRING,
        markdownStyle = defaultMarkdownStyle, ///
        css = cssFromMarkdownStyleAndCSSSelectorsString(markdownStyle, cssSelectorString);

  let highmarkCSS = css; ///

  markdownStyleFilePaths.forEach((markdownStyleFilePath) => {
    const cssSelectorString = cssSelectorStringFromMarkdownStyleFilePathAndClient(markdownStyleFilePath, client),
          markdownStyle = markdownStyleFromMarkdownStyleFilePath(markdownStyleFilePath),
          css = cssFromMarkdownStyleAndCSSSelectorsString(markdownStyle, cssSelectorString);  ///

    highmarkCSS = `${highmarkCSS}${css}`;
  });

  Object.assign(context, {
    highmarkCSS
  });

  proceed();
}

function markdownStyleFromMarkdownStyleFilePath(markdownStyleFilePath) {
  const filePath = markdownStyleFilePath, ///
        content = readFile(filePath),
        markdownStyle = content;  ///

  return markdownStyle;
}

function cssSelectorStringFromMarkdownStyleFilePathAndClient(markdownStyleFilePath, client) {
  let cssSelectorString = client ?
                            CLIENT_DIVS_CSS_SELECTOR_STRING :
                              DIVS_CSS_SELECTORS_STRING;

  const filePath = markdownStyleFilePath,  ///
        className = classNameFromFilePath(filePath);

  if (className !== null) {
    cssSelectorString = `${cssSelectorString}.${className}`;
  }

  return cssSelectorString;
}
