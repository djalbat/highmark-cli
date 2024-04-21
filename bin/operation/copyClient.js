"use strict";

const { watch: watchFile } = require("lively-cli"),
      { pathUtilities, packageUtilities } = require("necessary");

const { copyFile } = require("../utilities/fileSystem"),
      { CLIENT_FILE_NAME } = require("../constants"),
      { directoryPathFromFilePath } = require("../utilities/path"),
      { WATCHING_CLIENT_FILE_MESSAGE } = require("../messages");

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
        sourceClientFilePath = concatenatePaths(packagePath, CLIENT_FILE_NAME),
        targetClientFilePath = concatenatePaths(outputDirectoryPath, CLIENT_FILE_NAME);

  copyFile(sourceClientFilePath, targetClientFilePath);

  const { watch } = context;

  if (!watch) {
    proceed();

    return;
  }

  const message = WATCHING_CLIENT_FILE_MESSAGE,
        watchPattern = sourceClientFilePath,  ///
        registerHandler = watchFile(watchPattern);

  console.log(message);

  registerHandler(copyClientFile);

  proceed();

  function copyClientFile() {
    copyFile(sourceClientFilePath, targetClientFilePath);

    defer(() => {
      registerHandler(copyClientFile);
    });
  }
}

module.exports = copyClientOperation;

function defer(func) {
  setTimeout(func, 0);
}
