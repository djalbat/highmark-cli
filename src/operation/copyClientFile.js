"use strict";

import { pathUtilities } from "necessary";
import { clientUtilities } from "highmark-client";

import { copyFile } from "../utilities/fileSystem";

const { concatenatePaths } = pathUtilities,
      { getClientFileName, getSourceDirectoryPath } = clientUtilities;

export default function copyClientFileOperation(proceed, abort, context) {
  const { client } = context;

  if (client) {
    const { projectDirectoryName } = context,
          projectDirectoryPath = projectDirectoryName,  ///
          clientFileName = getClientFileName(),
          fileName = clientFileName,  ///
          sourceDirectoryPath = "/Users/djalbat/Development/highmark-client", ///getSourceDirectoryPath(),
          targetDirectoryPath = projectDirectoryPath; ///

    const sourceFilePath = concatenatePaths(sourceDirectoryPath, fileName),
          targetFilePath = concatenatePaths(targetDirectoryPath, fileName);

    copyFile(sourceFilePath, targetFilePath);
  }

  proceed();
}
