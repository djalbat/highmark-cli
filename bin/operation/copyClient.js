"use strict";

const { watch: watchFile } = require("lively-cli"),
      { pathUtilities, packageUtilities } = require("necessary");

const { copyFile } = require("../utilities/fileSystem"),
      { directoryPathFromFilePath } = require("../utilities/path"),
      { DEFER_DELAY, CLIENT_FILE_NAME } = require("../constants");

const { getPackagePath } = packageUtilities,
      { concatenatePaths } = pathUtilities;

function copyClientOperation(proceed, abort, context) {
  const { copyClient } = context;

  if (!copyClient) {
    proceed();

    return;
  }

  const { outputFilePath } = context,
        packagePath = getPackagePath(),
        outputDirectoryPath = directoryPathFromFilePath(outputFilePath),
        sourceFilePath = concatenatePaths(packagePath, CLIENT_FILE_NAME),
        targetFilePath = concatenatePaths(outputDirectoryPath, CLIENT_FILE_NAME);

  copyFile(sourceFilePath, targetFilePath);

  const { watch } = context;

  if (!watch) {
    proceed();

    return;
  }

  const watchPattern = sourceFilePath,  ///
        registerHandler = watchFile(watchPattern);

  registerHandler(copyClientFile);

  proceed();

  function copyClientFile() {
    copyFile(sourceFilePath, targetFilePath);

    defer(() => {
      registerHandler(copyClientFile);
    });
  }
}

module.exports = copyClientOperation;

function defer(func) {
  const delay = DEFER_DELAY;

  setTimeout(func, delay);
}
