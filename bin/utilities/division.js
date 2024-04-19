"use strict";

const { pathUtilities, arrayUtilities } = require("necessary");

const { DEFAULT_DIVISION_IDENTIFIER } = require("../constants");

const { second } = arrayUtilities,
      { isPathName, bottommostNameFromPath } = pathUtilities;

function classNameFromFilePath(filePath) {
  const path = filePath,
        pathName = isPathName(path),
        name = pathName ?
                 path :
                   bottommostNameFromPath(path),
        matches = name.match(/^([^.]+)\..+$/),
        secondMatch = second(matches),
        className = (secondMatch !== DEFAULT_DIVISION_IDENTIFIER) ?
                      secondMatch : ///
                        null;

  return className;
}

module.exports = {
  classNameFromFilePath
}
