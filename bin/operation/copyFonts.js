"use strict";

const { pathUtilities } = require("necessary"),
      { getFontDirectoryPath } = require("highmark-fonts");

const { FONT, PERIOD } = require("../constants"),
      { concatenatePaths } = pathUtilities,
      { readFile, writeFile, readDirectory, createDirectory } = require("../utilities/fileSystem"),
      { isFilePathFileName, fileNameFromFilePath, directoryPathFromFilePath } = require("../utilities/name");

function copyFontsOperation(proceed, abort, context) {
  const { copyFonts } = context;

  if (!copyFonts) {
    proceed();

    return;
  }

  let directoryPath,
      fontDirectoryPath;

  const { outputFilePath } = context,
        outputDirectoryPath = outputDirectoryPathFromOutputFilePath(outputFilePath);

  fontDirectoryPath = concatenatePaths(outputDirectoryPath, FONT);

  directoryPath = fontDirectoryPath;  ///

  createDirectory(directoryPath);

  fontDirectoryPath = getFontDirectoryPath();

  directoryPath = fontDirectoryPath; ///

  const recursive = false;

  readDirectory(directoryPath, (filePath) => {
    const content = readFile(filePath),
          fileName = fileNameFromFilePath(filePath),
          directoryPath = concatenatePaths(outputDirectoryPath, FONT);

    filePath = concatenatePaths(directoryPath, fileName); ///

    writeFile(filePath, content);
  }, recursive);

  proceed();
}

module.exports = copyFontsOperation;

function outputDirectoryPathFromOutputFilePath(outputFilePath) {
  const outputFilePathOutputFilename = isFilePathFileName(outputFilePath),
        outputDirectoryPath = (outputFilePathOutputFilename) ?
                                PERIOD : ///
                                  directoryPathFromFilePath(outputFilePath);

  return outputDirectoryPath;
}
