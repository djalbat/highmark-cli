"use strict";

import { copyFiles as copyClientFiles } from "highmark-client";

export default function copyClientFilesOperation(proceed, abort, context) {
  const { client } = context;

  if (client) {
    const { projectDirectoryName } = context,
          targetDirectoryPath = projectDirectoryName; ///

    copyClientFiles(targetDirectoryPath);
  }

  proceed();
}
