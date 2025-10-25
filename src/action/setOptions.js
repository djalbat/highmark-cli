"use strict";

import setOptionsOperation from "../operation/setOptions";
import linesPerPagePromptOperation from "../operation/prompt/linesPerPage";
import contentsDepthPromptOperation from "../operation/prompt/contentsDepth";
import charactersPerLinePromptOperation from "../operation/prompt/charactersPerLine";

import { retrieveOptions } from "../configuration";
import { executeOperations } from "../utilities/operation";
import { SUCCESSFUL_SET_OPTIONS_MESSAGE, FAILED_SET_OPTIONS_MESSAGE } from "../messages";

export default function setOptionsAction() {
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
