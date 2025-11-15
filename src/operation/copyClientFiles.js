"use strict";

import { pathUtilities } from "necessary";
import { packageUtilities } from "highmark-client";

import { copyFile } from "../utilities/fileSystem";

const { concatenatePaths } = pathUtilities,
      { getFileNames, getSourceDirectoryPath } = packageUtilities;

export default function copyClientFilesOperation(proceed, abort, context) {
  const { client } = context;

  if (client) {
    const { projectDirectoryName } = context,
          projectDirectoryPath = projectDirectoryName,  ///
          fileNames = getFileNames(),
          sourceDirectoryPath = "/Users/djalbat/Development/highmark-client", ///getSourceDirectoryPath(),
          targetDirectoryPath = projectDirectoryPath; ///

    fileNames.forEach((fileName) => {
      const sourceFilePath = concatenatePaths(sourceDirectoryPath, fileName),
            targetFilePath = concatenatePaths(targetDirectoryPath, fileName);

      copyFile(sourceFilePath, targetFilePath);
    });
  }

  proceed();
}
