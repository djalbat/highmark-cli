"use strict";

const { copyHTML } = require("highmark-client");

function copyHTMLOperation(proceed, abort, context) {
  const { copyClientFiles } = context;

  if (copyClientFiles) {
    proceed();

    return;
  }

  const { markdownHTML, markdownStylesCSS, outputDirectoryPath } = context,
        noClient = true,
        targetDirectoryPath = outputDirectoryPath;  ///

  copyHTML(markdownHTML, markdownStylesCSS, noClient, targetDirectoryPath);

  proceed();
}

module.exports = copyHTMLOperation;
