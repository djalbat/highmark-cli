"use strict";

const htmlOperation = require("../operation/html"),
      serverOperation = require("../operation/server"),
      copyFontsOperation = require("../operation/copyFonts"),
      copyClientOperation = require("../operation/copyClient"),
      markdownHTMLOperation = require("../operation/markdownHTML"),
      markdownStylesCSSOperation = require("../operation/markdownStylesCSS");

const { executeOperations } = require("../utilities/operation"),
      { SUCCESSFUL_PUBLISH_MESSAGE, FAILED_PUBLISH_MESSAGE } = require("../messages");

function publishAction(port, watch, server, quietly, copyFonts, copyClient, inputFilePath, outputFilePath, templateFilePath) {
  const operations = [
          markdownStylesCSSOperation,
          markdownHTMLOperation,
          copyClientOperation,
          copyFontsOperation,
          htmlOperation,
          serverOperation
        ],
        context = {
          port,
          watch,
          server,
          quietly,
          copyFonts,
          copyClient,
          inputFilePath,
          outputFilePath,
          templateFilePath
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
