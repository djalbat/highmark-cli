"use strict";

const htmlOperation = require("../operation/html"),
      copyFontsOperation = require("../operation/copyFonts"),
      markdownHTMLOperation = require("../operation/markdownHTML"),
      markdownStylesCSSOperation = require("../operation/markdownStylesCSS");

const { executeOperations } = require("../utilities/operation"),
      { SUCCESSFUL_PUBLISH_MESSAGE, FAILED_PUBLISH_MESSAGE } = require("../messages");

function publishAction(copyFonts, inputFilePath, outputFilePath) {
  const operations = [
          copyFontsOperation,
          markdownStylesCSSOperation,
          markdownHTMLOperation,
          htmlOperation
        ],
        context = {
          copyFonts,
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
