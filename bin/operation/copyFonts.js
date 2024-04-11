"use strict";

const { pathUtilities } = require("necessary"),
      { getFontDirectoryPath } = require("highmark-fonts");

const { FONT } = require("../constants"),
      { fileNameFromFilePath, directoryPathFromFilePath } = require("../utilities/path"),
      { readFile, writeFile, readDirectory, createDirectory } = require("../utilities/fileSystem");

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

  const recursive = false;

  readDirectory(fontDirectoryPath, (filePath) => {
    const content = readFile(filePath),
          fileName = fileNameFromFilePath(filePath),
          directoryPath = concatenatePaths(outputDirectoryPath, FONT);

    filePath = concatenatePaths(directoryPath, fileName); ///

    writeFile(filePath, content);
  }, recursive);

  proceed();
}

module.exports = copyFontsOperation;
