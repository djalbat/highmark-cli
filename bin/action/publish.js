"use strict";

const watchOperation = require("../operation/watch"),
      serverOperation = require("../operation/server"),
      copyFontsOperation = require("../operation/copyFonts"),
      indexHTMLOperation = require("../operation/indexHTML"),
      markdownHTMLOperation = require("../operation/markdownHTML"),
      copyClientFilesOperation = require("../operation/copyClientFiles"),
      markdownStylesCSSOperation = require("../operation/markdownStylesCSS");

const { executeOperations } = require("../utilities/operation"),
      { SUCCESSFUL_PUBLISH_MESSAGE, FAILED_PUBLISH_MESSAGE } = require("../messages");

function publishAction(port, watch, quietly, copyFonts, startServer, inputFilePath, copyClientFiles, outputDirectoryPath) {
  const operations = [
          markdownHTMLOperation,
          markdownStylesCSSOperation,
          copyClientFilesOperation,
          copyFontsOperation,
          indexHTMLOperation,
          serverOperation,
          watchOperation
        ],
        context = {
          port,
          watch,
          quietly,
          copyFonts,
          startServer,
          inputFilePath,
          copyClientFiles,
          outputDirectoryPath
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
