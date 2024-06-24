"use strict";

const setOptionsOperation = require("../operation/setOptions"),
      linesPerPagePromptOperation = require("../operation/prompt/linesPerPage"),
      contentsDepthPromptOperation = require("../operation/prompt/contentsDepth"),
      charactersPerLinePromptOperation = require("../operation/prompt/charactersPerLine");

const { retrieveOptions } = require("../configuration"),
      { executeOperations } = require("../utilities/operation"),
      { SUCCESSFUL_SET_OPTIONS_MESSAGE, FAILED_SET_OPTIONS_MESSAGE } = require("../messages");

function setOptionsAction() {
  const options = retrieveOptions(),
        { linesPerPage,
          contentsDepth,
          charactersPerLine } = options,
        operations = [
          contentsDepthPromptOperation,
          linesPerPagePromptOperation,
          charactersPerLinePromptOperation,
          setOptionsOperation
        ],
        context = {
          linesPerPage,
          contentsDepth,
          charactersPerLine
        };

  executeOperations(operations, (completed) => {
    const success = completed,  ///
          message = success ?
                      SUCCESSFUL_SET_OPTIONS_MESSAGE :
                        FAILED_SET_OPTIONS_MESSAGE;

    console.log(message);
  }, context);
}

module.exports = setOptionsAction;
