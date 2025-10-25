"use strict";

import { copyFonts } from "highmark-client";
import { pathUtilities } from "necessary";

import { FONT_DIRECTORY_NAME } from "../constants";

const { concatenatePaths } = pathUtilities;

export default function copyFontsOperation(proceed, abort, context) {
  const { fonts } = context;

  if (!fonts) {
    proceed();

    return;
  }

  const { projectDirectoryPath } = context,
        fontDirectoryPath = concatenatePaths(projectDirectoryPath, FONT_DIRECTORY_NAME);

  copyFonts(fontDirectoryPath);

  proceed();
}
