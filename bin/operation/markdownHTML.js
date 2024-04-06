"use strict";

const importer = require("../importer");

const { DOUBLE_SPACE } = require("../constants"),
      { UNABLE_TO_CONVERT_MARKDOWN_TO_HTML_MESSAGE } = require("../messages");

function markdownHTMLOperation(proceed, abort, context) {
  const { markdownFilePath } = context,
        filePath = markdownFilePath, ///
        indent = DOUBLE_SPACE,
        html = importer(filePath, indent);

  if (html === null) {
    const message = UNABLE_TO_CONVERT_MARKDOWN_TO_HTML_MESSAGE;

    console.log(message);

    abort();

    return;
  }

  const markdownHTML = html;  ///

  Object.assign(context, {
    markdownHTML
  });

  proceed();
}

module.exports = markdownHTMLOperation;
