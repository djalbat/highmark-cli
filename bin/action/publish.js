"use strict";

const indexOptions = require("../indexOptions"),
      watchOperation = require("../operation/watch"),
      copyFontsOperation = require("../operation/copyFonts"),
      markdownHTMLOperation = require("../operation/markdownHTML"),
      copyClientFilesOperation = require("../operation/copyClientFiles"),
      createClientHTMLOperation = require("../operation/createClientHTML"),
      markdownStylesCSSOperation = require("../operation/markdownStylesCSS");

const { executeOperations } = require("../utilities/operation"),
      { SUCCESSFUL_PUBLISH_MESSAGE, FAILED_PUBLISH_MESSAGE } = require("../messages");

function publishAction(port, watch, quietly, noClient, copyFonts, inputFileName, copyClientFiles, projectDirectoryName) {
  const operations = [
          markdownHTMLOperation,
          markdownStylesCSSOperation,
          createClientHTMLOperation,
          copyClientFilesOperation,
          copyFontsOperation,
          watchOperation
        ],
        context = {
          port,
          watch,
          quietly,
          noClient,
          copyFonts,
          indexOptions,
          inputFileName,
          copyClientFiles,
          projectDirectoryName
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
