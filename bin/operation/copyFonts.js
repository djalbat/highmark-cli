"use strict";

const { copyFonts } = require("highmark-client"),
      { pathUtilities } = require("necessary");

const { FONT_DIRECTORY_NAME } = require("../constants");

const { concatenatePaths } = pathUtilities;

function copyFontsOperation(proceed, abort, context) {
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

module.exports = copyFontsOperation;
