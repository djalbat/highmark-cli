"use strict";

const { createHTML: createClientHTML } = require("highmark-client");

function createClientHTMLOperation(proceed, abort, context) {
  const { markdownHTML, markdownStylesCSS, projectDirectoryName } = context,
        targetDirectoryPath = projectDirectoryName,  ///
        noClient = true;

  createClientHTML(markdownHTML, markdownStylesCSS, targetDirectoryPath, noClient);

  proceed();
}

module.exports = createClientHTMLOperation;
