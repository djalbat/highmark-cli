"use strict";

const { pathUtilities, fileSystemUtilities } = require("necessary");

const { isEntryNameHiddenName } = require("../utilities/name"),
      { UNABLE_TO_READ_FILE_MESSAGE, UNABLE_TO_READ_DIRECTORY_MESSAGE } = require("../messages");

const { concatenatePaths } = pathUtilities,
      { isEntryFile, readFile: readFileAsync, readDirectory: readDirectoryAsync  } = fileSystemUtilities;

function readFile(filePath) {
  let content = null;

  try {
    content = readFileAsync(filePath);

    console.log(`Read file '${filePath}'.`);
  } catch (error) {
    let message;

    message = UNABLE_TO_READ_FILE_MESSAGE;

    console.log(message);

    ({ message } = error);

    console.log(message);
  }

  return content;
}

function readDirectory(directoryPath, callback) {
  try {
    const entryNames = readDirectoryAsync(directoryPath);

    entryNames.forEach((entryName) => {
      const entryNameHiddenName = isEntryNameHiddenName(entryName);

      if (!entryNameHiddenName) {
        const entryPath = concatenatePaths(directoryPath, entryName), ///
              entryFile = isEntryFile(entryPath);

        if (entryFile) {
          const filePath = entryPath; ///

          callback(filePath);
        } else {
          const directoryPath = entryPath;  ///

          readDirectory(directoryPath);
        }
      }
    });
  } catch (error) {
    let message;

    message = UNABLE_TO_READ_DIRECTORY_MESSAGE;

    console.log(message);

    ({ message } = error);

    console.log(message);
  }
}

module.exports = {
  readFile,
  readDirectory
};
