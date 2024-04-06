"use strict";

const markdownHTMLOperation = require("../operation/markdownHTML"),
      markdownStylesCSSOperation = require("../operation/markdownStylesCSS");

const { executeOperations } = require("../utilities/operation"),
      { SUCCESSFUL_PUBLISH_MESSAGE, FAILED_PUBLISH_MESSAGE } = require("../messages");

function publishAction(inputFilePath, outputFilePath) {
  const markdownFilePath = inputFilePath, ///
        htmlFilePath = outputFilePath,  ///
        operations = [
          markdownHTMLOperation,
          markdownStylesCSSOperation
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
