"use strict";

const importer = require("../importer");

const { UNABLE_TO_CONVERT_MARKDOWN_TO_HTML_MESSAGE } = require("../messages");

function markdownHTMLOperation(proceed, abort, context) {
  const { inputFilePath } = context,
        filePath = inputFilePath; ///

  Object.assign(context, {
    importer
  });

  importer(filePath, context);

  const { importedNode = null, importedTokens = null } = context;

  if (importedNode === null) {
    const message = UNABLE_TO_CONVERT_MARKDOWN_TO_HTML_MESSAGE;

    console.log(message);

    abort();

    return;
  }

  delete context.importedNode;
  delete context.importedTokens;

  const node = importedNode,  ///
        tokens = importedTokens,  ///
        parentNode = null,
        divisionMarkdownNode = node;  ///

  Object.assign(context, {
    tokens
  });

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
