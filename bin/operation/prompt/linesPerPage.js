"use strict";

const { shellUtilities } = require("necessary");

const { validateLinesPerPage } = require("../../utilities/validate"),
      { EMPTY_STRING } = require("../../constants"),
      { DEFAULT_LINES_PER_PAGE } = require("../../defaults"),
      { LINES_PER_PAGE_DESCRIPTION } = require("../../descriptions"),
      { INVALID_LINES_PER_PAGE_MESSAGE } = require("../../messages");

const { prompt } = shellUtilities;

function linesPerPagePromptOperation(proceed, abort, context) {
  const { linesPerPage } = context,
        description = LINES_PER_PAGE_DESCRIPTION,
        errorMessage = INVALID_LINES_PER_PAGE_MESSAGE,
        initialAnswer = (linesPerPage === Infinity) ?
                          EMPTY_STRING :
                           `${linesPerPage}`,
        validationFunction = validateLinesPerPage,  ///
        options = {
          description,
          errorMessage,
          initialAnswer,
          validationFunction
        };

  prompt(options, (answer) => {
    let linesPerPage = answer;  ///

    const valid = (linesPerPage !== null);

    if (valid) {
      linesPerPage = (linesPerPage === EMPTY_STRING) ?
                       DEFAULT_LINES_PER_PAGE :
                         Number(linesPerPage);

      Object.assign(context, {
        linesPerPage
      });

      proceed();
      
      return;
    }

    abort();
  });
}

module.exports = linesPerPagePromptOperation;
