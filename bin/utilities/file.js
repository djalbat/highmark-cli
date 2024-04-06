"use strict";

const { fileSystemUtilities } = require("necessary");

const { UNABLE_TO_READ_INPUT_FILE_MESSAGE } = require("../messages");

const { readFile: readFileAsync } = fileSystemUtilities;

function readFile(filePath) {
  let content = null;

  try {
    content = readFileAsync(filePath);

    console.log(`Read file '${filePath}'.`);
  } catch (error) {
    let message;

    message = UNABLE_TO_READ_INPUT_FILE_MESSAGE;

    console.log(message);

    ({ message } = error);

    console.log(message);
  }

  return content;
}

module.exports = {
  readFile
};
