"use strict";

import { packageUtilities } from "highmark-client";

const { getClientJSFilePath, getCheckmarkSVGFilepath } = packageUtilities;

export default function copyClientFilesOperation(proceed, abort, context) {
  const { client } = context;

  if (client) {
    const filePath = concatenatePaths(projectDirectoryName, INDEX_HTML_FILE_NAME);

    const { projectDirectoryName } = context,
          targetDirectoryPath = projectDirectoryName; ///

    copyClientFiles(targetDirectoryPath);
  }

  proceed();
}
