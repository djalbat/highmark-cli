"use strict";

const { pathUtilities, arrayUtilities } = require("necessary");

const { DEFAULT } = require("../constants");

const { second } = arrayUtilities,
      { isPathName, bottommostNameFromPath } = pathUtilities;

function divisionIdentifierFromFilePath(filePath) {
  let divisionIdentifier = null;

  const path = filePath,
        pathName = isPathName(path),
        name = pathName ?
                 path :
                   bottommostNameFromPath(path),
        matches = name.match(/^([^.]+)\..+$/),
        secondMatch = second(matches);

  if (secondMatch !== DEFAULT) {
    divisionIdentifier = secondMatch; ///
  }

  return divisionIdentifier;
}

module.exports = {
  divisionIdentifierFromFilePath
}
