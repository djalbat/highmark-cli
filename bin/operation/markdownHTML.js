"use strict";

const { pathUtilities } = require("necessary"),
      { processingUtilities } = require("highmark-markdown");

const importer = require("../importer");

const { readFile } = require("../utilities/fileSystem"),
      { retrieveOptions } = require("../configuration"),
      { classNameFromFilePath } = require("../utilities/division"),
      { nodeFromTokens, tokensFromContent } = require("../utilities/markdown"),
      { UNABLE_TO_CONVERT_MARKDOWN_TO_HTML_MESSAGE } = require("../messages");

const { postprocess } = processingUtilities,
      { concatenatePaths } = pathUtilities;

function markdownHTMLOperation(proceed, abort, context) {
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

module.exports = markdownHTMLOperation;
