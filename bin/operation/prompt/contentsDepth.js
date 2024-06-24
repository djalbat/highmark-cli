"use strict";

const { shellUtilities } = require("necessary");

const { validateContentsDepth } = require("../../utilities/validate"),
      { CONTENTS_DEPTH_DESCRIPTION } = require("../../descriptions"),
      { INVALID_CONTENTS_DEPTH_MESSAGE } = require("../../messages");

const { prompt } = shellUtilities;

function contentsDepthPromptOperation(proceed, abort, context) {
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

module.exports = contentsDepthPromptOperation;
