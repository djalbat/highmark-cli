"use strict";

const { copyFonts } = require("highmark-client"),
      { pathUtilities } = require("necessary");

const { FONT } = require("../constants");

const { concatenatePaths } = pathUtilities;

function copyFontsOperation(proceed, abort, context) {
  const { fonts } = context;

  if (!fonts) {
    proceed();

    return;
  }

  const { projectDirectoryPath } = context,
        fontDirectoryPath = concatenatePaths(projectDirectoryPath, FONT);

  copyFonts(fontDirectoryPath);

  proceed();
}

module.exports = copyFontsOperation;
