"use strict";

const { shellUtilities } = require("necessary");

const { validateCharactersPerLine } = require("../../utilities/validate"),
      { CHARACTERS_PER_LINE_DESCRIPTION } = require("../../descriptions"),
      { INVALID_CHARACTERS_PER_LINE_MESSAGE } = require("../../messages");

const { prompt } = shellUtilities;

function contentsDepthPromptOperation(proceed, abort, context) {
  const { charactersPerLine } = context,
        description = CHARACTERS_PER_LINE_DESCRIPTION,
        errorMessage = INVALID_CHARACTERS_PER_LINE_MESSAGE,
        initialAnswer = `${charactersPerLine}`,
        validationFunction = validateCharactersPerLine,  ///
        options = {
          description,
          errorMessage,
          initialAnswer,
          validationFunction
        };

  prompt(options, (answer) => {
    let charactersPerLine = answer;  ///

    const valid = (charactersPerLine !== null);

    if (valid) {
      charactersPerLine = Number(charactersPerLine);

      Object.assign(context, {
        charactersPerLine
      });

      proceed();
      
      return;
    }

    abort();
  });
}

module.exports = contentsDepthPromptOperation;
