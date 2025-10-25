"use strict";

import { pathUtilities, fileSystemUtilities } from "necessary";

import { isEntryNameHiddenName } from "../utilities/path";
import { UNABLE_TO_COPY_FILE_MESSAGE,
        UNABLE_TO_READ_FILE_MESSAGE,
        UNABLE_TO_WRITE_FILE_MESSAGE,
        UNABLE_TO_READ_DIRECTORY_MESSAGE,
        UNABLE_TO_CREATE_DIRECTORY_MESSAGE } from "../messages";

const { concatenatePaths } = pathUtilities,
      { isEntryFile,
        checkEntryExists,
        copyFile: copyFileAsync,
        readFile: readFileAsync,
        writeFile: writeFileAsync,
        readDirectory: readDirectoryAsync,
        createDirectory: createDirectoryAsync } = fileSystemUtilities;

export function copyFile(sourceFilePath, targetFilePath) {
  let content = null;

  try {
    content = copyFileAsync(sourceFilePath, targetFilePath);

    console.log(`Copy file '${sourceFilePath}' to '${targetFilePath}'.`);
  } catch (error) {
    let message;

    message = UNABLE_TO_COPY_FILE_MESSAGE;

    console.log(message);

    ({ message } = error);

    console.log(message);
  }

  return content;
}

export function readFile(filePath) {
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

export function writeFile(filePath, content) {
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

export function readDirectory(directoryPath, callback, recursive = true) {
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

export function createDirectory(directoryPath) {
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
