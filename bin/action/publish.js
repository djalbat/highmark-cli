"use strict";

const markdownToHTMLOperation = require("../operation/markdownToHTML"),
      markdownStylesToCSSOperation = require("../operation/markdownStylesToCSS");

const { executeOperations } = require("../utilities/operation"),
      { SUCCESSFUL_PUBLISH_MESSAGE, FAILED_PUBLISH_MESSAGE } = require("../messages");

function publishAction(inputFilePath, outputFilePath) {
  const markdownFilePath = inputFilePath, ///
        htmlFilePath = outputFilePath,  ///
        operations = [
          markdownToHTMLOperation,
          markdownStylesToCSSOperation
        ],
        context = {
          htmlFilePath,
          markdownFilePath
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
