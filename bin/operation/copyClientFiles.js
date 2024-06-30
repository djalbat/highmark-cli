"use strict";

const { copyFiles: copyClientFiles } = require("highmark-client");

function copyClientFilesOperation(proceed, abort, context) {
  const { client } = context;

  if (client) {
    const { projectDirectoryName } = context,
          targetDirectoryPath = projectDirectoryName; ///

    copyClientFiles(targetDirectoryPath);
  }

  proceed();
}

module.exports = copyClientFilesOperation;
