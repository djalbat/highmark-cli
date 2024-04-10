"use strict";

const { pathUtilities } = require("necessary");

const { isPathName, bottommostNameFromPath, pathWithoutBottommostNameFromPath } = pathUtilities;

function isFilePathFileName(filePath) {
  const path = filePath,  ///
        pathName = isPathName(path),
        filePathFileName = pathName;  ///

  return filePathFileName;
}

function fileNameFromFilePath(filePath) {
  const path = filePath,  ///
        bottommostName = bottommostNameFromPath(path),
        fileName = bottommostName;  ///

  return fileName;
}

function isEntryNameHiddenName(entryName) {
  const nameHiddenName = /^\..+/.test(entryName);

  return nameHiddenName;
}

function directoryPathFromFilePath(filePath) {
  const path = filePath,  ///
        pathWithoutBottommostName = pathWithoutBottommostNameFromPath(path),
        directoryPath = pathWithoutBottommostName;  ///

  return directoryPath;
}

module.exports = {
  isFilePathFileName,
  fileNameFromFilePath,
  isEntryNameHiddenName,
  directoryPathFromFilePath
};
