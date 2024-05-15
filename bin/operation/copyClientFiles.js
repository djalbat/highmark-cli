"use strict";

const { copyClientFiles: copyClientFilesAsync } = require("highmark-client");

function copyClientFilesOperation(proceed, abort, context) {
  const { copyClientFiles } = context;

  if (copyClientFiles) {
    const { markdownHTML, markdownStylesCSS, outputDirectoryPath } = context,
          targetDirectoryPath = outputDirectoryPath; ///

    copyClientFilesAsync(markdownHTML, markdownStylesCSS, targetDirectoryPath);
  }

  proceed();
}

module.exports = copyClientFilesOperation;
