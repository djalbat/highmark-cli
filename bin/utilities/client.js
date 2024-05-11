"use strict";

const { pathUtilities, packageUtilities } = require("necessary");

const { copyFile } = require("../utilities/fileSystem"),
      { CLIENT_FILE_NAME } = require("../constants"),
      { directoryPathFromFilePath } = require("../utilities/path");

const { getPackagePath } = packageUtilities,
      { concatenatePaths } = pathUtilities;

function copyClientFile(context) {
  const clientTargetFilePath = getClientTargetFilePath(context),
        clientSSourceFilePath = getClientSourceFilePath(context);

  copyFile(clientSSourceFilePath, clientTargetFilePath);
}

function getClientTargetFilePath(context) {
  const { outputFilePath } = context,
        outputDirectoryPath = directoryPathFromFilePath(outputFilePath),
        clientTargetFilePath = concatenatePaths(outputDirectoryPath, CLIENT_FILE_NAME);

  return clientTargetFilePath;
}

function getClientSourceFilePath(context) {
  const packagePath = getPackagePath(),
        clientSSourceFilePath = concatenatePaths(packagePath, CLIENT_FILE_NAME);

  return clientSSourceFilePath;
}

module.exports = {
  copyClientFile,
  getClientTargetFilePath,
  getClientSourceFilePath
};
