"use strict";

import { clientUtilities } from "highmark-client";
import { grammarUtilities, defaultMarkdownStyle } from "highmark-markdown";

import { CSS_SELECTORS_STRING } from "../constants";
import { classNameFromFilePath } from "../utilities/division";
import { readFile, readDirectory } from "../utilities/fileSystem";
import { isFilePathMarkdownStyleFilePath, isFilePathDefaultMarkdownStyleFilePath } from "../utilities/filePath";

const { getClientCSSSelectorsString } = clientUtilities,
      { cssFromMarkdownStyleAndCSSSelectorsString } = grammarUtilities;

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

  const cssSelectorString = getCSSSelectorsString(client),
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

function getCSSSelectorsString(client) {
  const cssSelectorString = client ?
                              getClientCSSSelectorsString() :
                                CSS_SELECTORS_STRING;

  return cssSelectorString;
}

function markdownStyleFromMarkdownStyleFilePath(markdownStyleFilePath) {
  const filePath = markdownStyleFilePath, ///
        content = readFile(filePath),
        markdownStyle = content;  ///

  return markdownStyle;
}

function cssSelectorStringFromMarkdownStyleFilePathAndClient(markdownStyleFilePath, client) {
  let cssSelectorString = getCSSSelectorsString(client);

  const filePath = markdownStyleFilePath,  ///
        className = classNameFromFilePath(filePath);

  if (className !== null) {
    cssSelectorString = `${cssSelectorString}.${className}`;
  }

  return cssSelectorString;
}
