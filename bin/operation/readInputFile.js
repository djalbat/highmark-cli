"use strict";

const { readFile } = require("../utilities/file");

function readInputFileOperation(proceed, abort, context) {
  const { inputFilePath } = context,
        inputFileContent = readFile(inputFilePath);

  if (inputFileContent === null) {
    abort();
  }

  Object.assign(context, {
    inputFileContent
  });

  proceed();
}

module.exports = readInputFileOperation;
