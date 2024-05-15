"use strict";

const { copyFonts: copyFontsAsync } = require("highmark-client");

const { FONT } = require("../constants"),
      { directoryPathFromFilePath } = require("../utilities/path");

const { concatenatePaths } = pathUtilities;

function copyFontsOperation(proceed, abort, context) {
  const { copyFonts } = context;

  if (!copyFonts) {
    proceed();

    return;
  }

  const { outputFilePath } = context,
        outputDirectoryPath = directoryPathFromFilePath(outputFilePath),
        fontDirectoryPath = concatenatePaths(outputDirectoryPath, FONT);

  copyFontsAsync(fontDirectoryPath);

  proceed();
}

module.exports = copyFontsOperation;
