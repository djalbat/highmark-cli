"use strict";

const { copyFiles } = require("highmark-client");

function copyClientFilesOperation(proceed, abort, context) {
  const { copyClientFiles } = context;

  if (copyClientFiles) {
    const { projectDirectoryName } = context,
          targetDirectoryPath = projectDirectoryName; ///

    copyFiles(targetDirectoryPath);
  }

  proceed();
}

module.exports = copyClientFilesOperation;
