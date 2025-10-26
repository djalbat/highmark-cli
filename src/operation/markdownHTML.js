"use strict";

import { pathUtilities } from "necessary";

import importer from "../importer";

import { readFile } from "../utilities/fileSystem";
import { retrieveOptions } from "../configuration";
import { classNameFromFilePath } from "../utilities/division";
import { nodeFromTokens, tokensFromContent } from "../utilities/markdown";
import { UNABLE_TO_CONVERT_MARKDOWN_TO_HTML_MESSAGE } from "../messages";

const { concatenatePaths } = pathUtilities;

export default function markdownHTMLOperation(proceed, abort, context) {
  const { inputFileName, projectDirectoryName } = context,
        inputFilePath = concatenatePaths(projectDirectoryName, inputFileName),
        filePath = inputFilePath, ///
        content = readFile(filePath);

  if (content === null) {
    const message = UNABLE_TO_CONVERT_MARKDOWN_TO_HTML_MESSAGE;

    console.log(message);

    abort();

    return;
  }

  const className = classNameFromFilePath(filePath),
        tokens = tokensFromContent(content),
        node = nodeFromTokens(tokens);

  if (node === null) {
    const message = UNABLE_TO_CONVERT_MARKDOWN_TO_HTML_MESSAGE;

    console.log(message);

    abort();

    return;
  }

  const options = retrieveOptions(),
        { linesPerPage,
          contentsDepth,
          charactersPerLine } = options,
        divisionClassName = className,  ///
        divisionMarkdownNode = node;  ///

  Object.assign(context, {
    tokens,
    importer,
    linesPerPage,
    contentsDepth,
    nodeFromTokens,
    tokensFromContent,
    charactersPerLine,
    divisionClassName
  });

  const markdownNodes = postprocess(divisionMarkdownNode, context),
        markdownHTML = markdownNodes.reduce((markdownHTML, markdownNode) => {
          const markdownNodeHTML = markdownNode.asHTML(context);

          markdownHTML = (markdownHTML === null) ?
                           markdownNodeHTML :  ///
                            `${markdownHTML}${markdownNodeHTML}`;

          return markdownHTML;
        }, null);

  Object.assign(context, {
    markdownHTML
  });

  proceed();
}
