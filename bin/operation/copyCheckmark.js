"use strict";

const { pathUtilities, packageUtilities } = require("necessary");

const { copyFile } = require("../utilities/fileSystem"),
      { CHECKMARK_FILE_NAME } = require("../constants"),
      { directoryPathFromFilePath } = require("../utilities/path");

const { getPackagePath } = packageUtilities,
      { concatenatePaths } = pathUtilities;

function copyCheckmarkOperation(proceed, abort, context) {
  const { copyClient } = context;

  if (!copyClient) {
    proceed();

    return;
  }

  const { outputFilePath } = context,
        packagePath = getPackagePath(),
        outputDirectoryPath = directoryPathFromFilePath(outputFilePath),
        sourceFilePath = concatenatePaths(packagePath, CHECKMARK_FILE_NAME),  ///
        targetFilePath = concatenatePaths(outputDirectoryPath, CHECKMARK_FILE_NAME);  ///

  copyFile(sourceFilePath, targetFilePath);

  proceed();
}

module.exports = copyCheckmarkOperation;
