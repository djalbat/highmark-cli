"use strict";

const { fileSystemUtilities } = require("necessary");

const { INPUT_FILE_PATH_MISSING_MESSAGE, UNABLE_TO_READ_INPUT_FILE_MESSAGE } = require("../messages");

const { readFile } = fileSystemUtilities;

function readInputFileOperation(proceed, abort, context) {
  const { inputFilePath } = context;

  let inputFileContent;

  try {
    inputFileContent = readFile(inputFilePath);

    console.log(`Read input file '${inputFilePath}'.`);
  } catch (error) {
    let message;

    message = UNABLE_TO_READ_INPUT_FILE_MESSAGE;

    console.log(message);

    ({ message } = error);

    console.log(message);

    abort();
  }

  Object.assign(context, {
    inputFileContent
  });

  proceed();
}

module.exports = readInputFileOperation;
