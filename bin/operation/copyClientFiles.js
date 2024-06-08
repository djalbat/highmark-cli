"use strict";

const { copyFiles: copyClientFilesAsync } = require("highmark-client");

function copyClientFilesOperation(proceed, abort, context) {
  const { copyClientFiles } = context;

  if (copyClientFiles) {
    const { projectDirectoryName } = context,
          targetDirectoryPath = projectDirectoryName; ///

    copyClientFilesAsync(targetDirectoryPath);
  }

  proceed();
}

module.exports = copyClientFilesOperation;
