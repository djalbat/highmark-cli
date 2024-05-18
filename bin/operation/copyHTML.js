"use strict";

const { copyHTML } = require("highmark-client");

function copyHTMLOperation(proceed, abort, context) {
  const { copyClientFiles } = context;

  if (copyClientFiles) {
    proceed();

    return;
  }

  const { markdownHTML, markdownStylesCSS, outputDirectoryPath } = context,
        targetDirectoryPath = outputDirectoryPath,  ///
        noClient = true;

  copyHTML(markdownHTML, markdownStylesCSS, targetDirectoryPath, noClient);

  proceed();
}

module.exports = copyHTMLOperation;
