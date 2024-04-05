"use strict";

const readInputFileOperation = require("../operation/readInputFile"),
      inputFileContentToHTMLOperation = require("../operation/inputFileContentToHTML");

const { executeOperations } = require("../utilities/operation"),
      { SUCCESSFUL_PUBLISH_MESSAGE, FAILED_PUBLISH_MESSAGE } = require("../messages");

function publishAction(inputFilePath, outputFilePath) {
  const operations = [
          readInputFileOperation,
          inputFileContentToHTMLOperation
        ],
        context = {
          inputFilePath,
          outputFilePath
        };

  executeOperations(operations, (completed) => {
    const success = completed,  ///
          message = success ?
                      SUCCESSFUL_PUBLISH_MESSAGE :
                        FAILED_PUBLISH_MESSAGE;

    console.log(message);

    process.exit();
  }, context);
}

module.exports = publishAction;
