"use strict";

import { shellUtilities } from "necessary";

import { validateLinesPerPage } from "../../utilities/validate";
import { EMPTY_STRING } from "../../constants";
import { DEFAULT_LINES_PER_PAGE } from "../../defaults";
import { LINES_PER_PAGE_DESCRIPTION } from "../../descriptions";
import { INVALID_LINES_PER_PAGE_MESSAGE } from "../../messages";

const { prompt } = shellUtilities;

export default function linesPerPagePromptOperation(proceed, abort, context) {
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
