"use strict";

const { copyClientFiles: copyClientFilesAsync } = require("highmark-client");

function copyClientFilesOperation(proceed, abort, context) {
  const { copyClientFiles } = context;

  if (copyClientFiles) {
    const { markdownHTML, markdownStylesCSS, outputDirectoryPath } = context,
          targetDirectoryPath = outputDirectoryPath, ///
          includeFonts = false;

    copyClientFilesAsync(markdownHTML, markdownStylesCSS, targetDirectoryPath, includeFonts);
  }

  proceed();
}

module.exports = copyClientFilesOperation;
