"use strict";

const { pathUtilities } = require("necessary"),
      { copyFonts: copyFontsAsync } = require("highmark-client");

const { FONT } = require("../constants");

const { concatenatePaths } = pathUtilities;

function copyFontsOperation(proceed, abort, context) {
  const { copyFonts } = context;

  if (!copyFonts) {
    proceed();

    return;
  }

  const { outputDirectoryPath } = context,
        fontDirectoryPath = concatenatePaths(outputDirectoryPath, FONT);

  copyFontsAsync(fontDirectoryPath);

  proceed();
}

module.exports = copyFontsOperation;
