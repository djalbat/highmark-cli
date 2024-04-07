"use strict";

const { pathUtilities, arrayUtilities } = require("necessary");

const { DEFAULT_DIVISION_IDENTIFIER } = require("../constants");

const { second } = arrayUtilities,
      { isPathName, bottommostNameFromPath } = pathUtilities;

function divisionClassNameFromFilePath(filePath) {
  let divisionClassName = null;

  const path = filePath,
        pathName = isPathName(path),
        name = pathName ?
                 path :
                   bottommostNameFromPath(path),
        matches = name.match(/^([^.]+)\..+$/),
        secondMatch = second(matches);

  if (secondMatch !== DEFAULT_DIVISION_IDENTIFIER) {
    divisionClassName = secondMatch; ///
  }

  return divisionClassName;
}

module.exports = {
  divisionClassNameFromFilePath
}
