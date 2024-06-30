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

function publishAction(port, fonts, watch, client, quietly, inputFileName, projectDirectoryName) {
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
          fonts,
          watch,
          client,
          quietly,
          indexOptions,
          inputFileName,
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
