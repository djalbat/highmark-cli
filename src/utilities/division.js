"use strict";

import { pathUtilities, arrayUtilities } from "necessary";

import { DEFAULT_DIVISION_IDENTIFIER } from "../constants";

const { second } = arrayUtilities,
      { isPathName, bottommostNameFromPath } = pathUtilities;

export function classNameFromFilePath(filePath) {
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
