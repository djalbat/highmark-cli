"use strict";

const htmlOperation = require("../operation/html"),
      serverOperation = require("../operation/server"),
      copyFontsOperation = require("../operation/copyFonts"),
      markdownHTMLOperation = require("../operation/markdownHTML"),
      markdownStylesCSSOperation = require("../operation/markdownStylesCSS");

const { executeOperations } = require("../utilities/operation"),
      { SUCCESSFUL_PUBLISH_MESSAGE, FAILED_PUBLISH_MESSAGE } = require("../messages");

function publishAction(port, server, copyFonts, inputFilePath, outputFilePath) {
  const operations = [
          markdownStylesCSSOperation,
          markdownHTMLOperation,
          copyFontsOperation,
          htmlOperation,
          serverOperation
        ],
        context = {
          port,
          server,
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
  }, context);
}

module.exports = publishAction;
