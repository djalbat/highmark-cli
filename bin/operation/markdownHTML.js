"use strict";

const importer = require("../importer");

const { readFile } = require("../utilities/fileSystem"),
      { classNameFromFilePath } = require("../utilities/division"),
      { nodeFromTokens, tokensFromContent } = require("../utilities/markdown"),
      { UNABLE_TO_CONVERT_MARKDOWN_TO_HTML_MESSAGE } = require("../messages");

function markdownHTMLOperation(proceed, abort, context) {
  const { inputFilePath } = context,
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

  Object.assign(context, {
    tokens,
    importer
  });

  const parentNode = null,
        divisionClassName = className,  ///
        divisionMarkdownNode = node;  ///

  divisionMarkdownNode.setDivisionClassName(divisionClassName);

  divisionMarkdownNode.resolveImports(parentNode, context);

  divisionMarkdownNode.createContents(context);

  divisionMarkdownNode.createFootnotes(context);

  const html = divisionMarkdownNode.asHTML(context),
        markdownHTML = html;  ///

  Object.assign(context, {
    markdownHTML
  });

  proceed();
}

module.exports = markdownHTMLOperation;
