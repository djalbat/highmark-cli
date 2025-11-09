"use strict";

import { pathUtilities, packageUtilities } from "necessary";

import { copyFiles } from "../utilities/fileSystem";
import { FONT_DIRECTORY_NAME } from "../constants";

const { getPackagePath } = packageUtilities,
      { concatenatePaths } = pathUtilities;

export default function copyFontsOperation(proceed, abort, context) {
  const { fonts } = context;

  if (!fonts) {
    proceed();

    return;
  }

  const { projectDirectoryName } = context,
        currentWorkingDirectoryPath = process.cwd(), ///
        packagePath = getPackagePath(),
        projectFontDirectoryPath = concatenatePaths(currentWorkingDirectoryPath, projectDirectoryName, FONT_DIRECTORY_NAME),
        packageFontDirectoryPath = concatenatePaths(packagePath, FONT_DIRECTORY_NAME),
        sourceDirectoryPath = packageFontDirectoryPath, ///
        targetDirectoryPath = projectFontDirectoryPath;  ///

  copyFiles(sourceDirectoryPath, targetDirectoryPath);

  proceed();
}
