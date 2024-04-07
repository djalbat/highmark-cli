"use strict";

const importer = require("../importer");

const { DOUBLE_SPACE } = require("../constants"),
      { UNABLE_TO_CONVERT_MARKDOWN_TO_HTML_MESSAGE } = require("../messages");

function markdownHTMLOperation(proceed, abort, context) {
  const { inputFilePath } = context,
        filePath = inputFilePath, ///
        indent = DOUBLE_SPACE,
        title = null;

  Object.assign(context, {
    title,
    importer
  });

  const html = importer(filePath, indent, context);

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
