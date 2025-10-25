"use strict";

import { shellUtilities } from "necessary";

import { validateCharactersPerLine } from "../../utilities/validate";
import { CHARACTERS_PER_LINE_DESCRIPTION } from "../../descriptions";
import { INVALID_CHARACTERS_PER_LINE_MESSAGE } from "../../messages";

const { prompt } = shellUtilities;

export default function contentsDepthPromptOperation(proceed, abort, context) {
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
