"use strict";

const { pathUtilities } = require("necessary");

const { PERIOD } = require("../constants");

const { isPathName, pathWithoutBottommostNameFromPath } = pathUtilities;

function isEntryNameHiddenName(entryName) {
  const nameHiddenName = /^\..+/.test(entryName);

  return nameHiddenName;
}

function directoryPathFromFilePath(filePath) {
  let directoryPath;

  const path = filePath,  ///
        pathName = isPathName(path);

  if (pathName) {
    directoryPath = PERIOD;
  } else {
    const pathWithoutBottommostName = pathWithoutBottommostNameFromPath(path);

    directoryPath = pathWithoutBottommostName;  ///
  }

  return directoryPath;
}

module.exports = {
  isEntryNameHiddenName,
  directoryPathFromFilePath
};
