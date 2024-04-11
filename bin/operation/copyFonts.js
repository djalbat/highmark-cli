"use strict";

const { pathUtilities } = require("necessary"),
      { getFontDirectoryPath } = require("highmark-fonts");

const { FONT } = require("../constants"),
      { copyFile, readDirectory, createDirectory } = require("../utilities/fileSystem"),
      { fileNameFromFilePath, directoryPathFromFilePath } = require("../utilities/path");

const { concatenatePaths } = pathUtilities;

function copyFontsOperation(proceed, abort, context) {
  const { copyFonts } = context;

  if (!copyFonts) {
    proceed();

    return;
  }

  let fontDirectoryPath;

  const { outputFilePath } = context,
        outputDirectoryPath = directoryPathFromFilePath(outputFilePath);

  fontDirectoryPath = concatenatePaths(outputDirectoryPath, FONT);

  createDirectory(fontDirectoryPath);

  fontDirectoryPath = getFontDirectoryPath();

  const recursive = false,
        targetDirectoryPath = concatenatePaths(outputDirectoryPath, FONT);

  readDirectory(fontDirectoryPath, (filePath) => {
    const fileName = fileNameFromFilePath(filePath),
          sourceFilePath = filePath,  ///
          targetFilePath = concatenatePaths(targetDirectoryPath, fileName); ///

    copyFile(sourceFilePath, targetFilePath);
  }, recursive);

  proceed();
}

module.exports = copyFontsOperation;
