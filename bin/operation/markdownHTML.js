"use strict";

const { pathUtilities } = require("necessary");
const { markdownUtilities } = require("highmark-markdown");

const importer = require("../importer");

const { readFile } = require("../utilities/fileSystem"),
      { classNameFromFilePath } = require("../utilities/division"),
      { nodeFromTokens, tokensFromContent } = require("../utilities/markdown"),
      { UNABLE_TO_CONVERT_MARKDOWN_TO_HTML_MESSAGE } = require("../messages"),
      { getLinesPerPage, getContentsDepth, getCharactersPerLine } = require("../configuration");

const { postprocess } = markdownUtilities,
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

  const linesPerPage = getLinesPerPage(),
        contentsDepth = getContentsDepth(),
        charactersPerLine = getCharactersPerLine(),
        divisionClassName = className,  ///
        divisionMarkdownNode = node;  ///

  Object.assign(context, {
    tokens,
    importer,
    linesPerPage,
    contentsDepth,
    charactersPerLine,
    divisionClassName
  });

  const divisionMarkdownNodes = postprocess(divisionMarkdownNode, context),
        markdownHTML = divisionMarkdownNodes.reduce((markdownHTML, divisionMarkdownNode) => {
          const html = divisionMarkdownNode.asHTML(context);

          markdownHTML = (markdownHTML === null) ?
                           html :  ///
                            `${markdownHTML}${html}`;

          return markdownHTML;
        }, null);

  Object.assign(context, {
    markdownHTML
  });

  proceed();
}

module.exports = markdownHTMLOperation;
