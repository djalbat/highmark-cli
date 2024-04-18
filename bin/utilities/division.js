"use strict";

const { pathUtilities, arrayUtilities } = require("necessary");

const { DEFAULT_DIVISION_IDENTIFIER } = require("../constants");

const { second } = arrayUtilities,
      { isPathName, bottommostNameFromPath } = pathUtilities;

function classNameFromFilePath(filePath) {
  let className = null;

  const path = filePath,
        pathName = isPathName(path),
        name = pathName ?
                 path :
                   bottommostNameFromPath(path),
        matches = name.match(/^([^.]+)\..+$/),
        secondMatch = second(matches);

  if (secondMatch !== DEFAULT_DIVISION_IDENTIFIER) {
    className = secondMatch; ///
  }

  return className;
}

module.exports = {
  classNameFromFilePath
}
