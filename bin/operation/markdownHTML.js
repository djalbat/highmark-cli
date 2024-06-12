"use strict";

const { pathUtilities } = require("necessary");

const importer = require("../importer");

const { readFile } = require("../utilities/fileSystem"),
      { getContentsDepth } = require("../configuration"),
      { classNameFromFilePath } = require("../utilities/division"),
      { nodeFromTokens, tokensFromContent } = require("../utilities/markdown"),
      { UNABLE_TO_CONVERT_MARKDOWN_TO_HTML_MESSAGE } = require("../messages");

const { concatenatePaths } = pathUtilities;

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

  const contentsDepth = getContentsDepth(),
        divisionClassName = className,  ///
        divisionMarkdownNode = node,  ///
        divisionMarkdownNodes = [];

  Object.assign(context, {
    tokens,
    importer,
    contentsDepth,
    divisionMarkdownNodes
  });

  const ignored = divisionMarkdownNode.isIgnored();

  if (!ignored) {
    divisionMarkdownNodes.push(divisionMarkdownNode);
  }

  divisionMarkdownNode.setDivisionClassName(divisionClassName);

  divisionMarkdownNode.resolveIncludes(context);

  divisionMarkdownNodes.forEach((divisionMarkdownNode) => {
    divisionMarkdownNode.resolveEmbeddings(context);

    divisionMarkdownNode.createFootnotes(context);
  });

  divisionMarkdownNodes.some((divisionMarkdownNode) => {
    const contentsCreated = divisionMarkdownNode.createContents(context);

    if (contentsCreated) {
      return true;
    }
  });

  const markdownHTML = divisionMarkdownNodes.reduce((markdownHTML, divisionMarkdownNode, index) => {
    const pageNumber = index + 1;

    Object.assign(context, {
      pageNumber
    });

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
