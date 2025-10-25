"use strict";

import { shellUtilities } from "necessary";

import { validateContentsDepth } from "../../utilities/validate";
import { CONTENTS_DEPTH_DESCRIPTION } from "../../descriptions";
import { INVALID_CONTENTS_DEPTH_MESSAGE } from "../../messages";

const { prompt } = shellUtilities;

export default function contentsDepthPromptOperation(proceed, abort, context) {
  const { contentsDepth } = context,
        description = CONTENTS_DEPTH_DESCRIPTION,
        errorMessage = INVALID_CONTENTS_DEPTH_MESSAGE,
        initialAnswer = `${contentsDepth}`,
        validationFunction = validateContentsDepth,  ///
        options = {
          description,
          errorMessage,
          initialAnswer,
          validationFunction
        };

  prompt(options, (answer) => {
    let contentsDepth = answer;  ///

    const valid = (contentsDepth !== null);

    if (valid) {
      contentsDepth = Number(contentsDepth);

      Object.assign(context, {
        contentsDepth
      });

      proceed();
      
      return;
    }

    abort();
  });
}
