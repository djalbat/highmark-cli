"use strict";

const { pathUtilities, fileSystemUtilities } = require("necessary");

const { isEntryNameHiddenName } = require("../utilities/name"),
      { UNABLE_TO_READ_FILE_MESSAGE,
        UNABLE_TO_WRITE_FILE_MESSAGE,
        UNABLE_TO_READ_DIRECTORY_MESSAGE,
        UNABLE_TO_CREATE_DIRECTORY_MESSAGE } = require("../messages");

const { concatenatePaths } = pathUtilities,
      { isEntryFile,
        checkEntryExists,
        readFile: readFileAsync,
        writeFile: writeFileAsync,
        readDirectory: readDirectoryAsync,
        createDirectory: createDirectoryAsync } = fileSystemUtilities;

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

function writeFile(filePath, content) {
  try {
    writeFileAsync(filePath, content);

    console.log(`Write file '${filePath}'.`);
  } catch (error) {
    let message;

    message = UNABLE_TO_WRITE_FILE_MESSAGE;

    console.log(message);

    ({ message } = error);

    console.log(message);
  }
}

function readDirectory(directoryPath, callback, recursive = true) {
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
          if (recursive) {
            const directoryPath = entryPath;  ///

            readDirectory(directoryPath, callback, recursive);
          }
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

function createDirectory(directoryPath) {
  const entryPath = directoryPath,  ///
        entryExists = checkEntryExists(entryPath);

  if (entryExists) {
    return;
  }

  try {
    createDirectoryAsync(directoryPath);

    console.log(`Create directory '${directoryPath}'.`);
  } catch (error) {
    let message;

    message = UNABLE_TO_CREATE_DIRECTORY_MESSAGE;

    console.log(message);

    ({ message } = error);

    console.log(message);
  }
}

module.exports = {
  readFile,
  writeFile,
  readDirectory,
  createDirectory
};
