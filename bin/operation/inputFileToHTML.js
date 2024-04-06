"use strict";

const importer = require("../importer");

const { DOUBLE_SPACE } = require("../constants");
const { nodeFromTokens, tokensFromContent } = require("../utilities/markdown");

function inputFileHTMLOperation(proceed, abort, context) {
  const { inputFileContent } = context,
        content = inputFileContent, ///
        tokens = tokensFromContent(content),
        node = nodeFromTokens(tokens);

  if (node === null) {
    abort();

    return;
  }

  const indent = DOUBLE_SPACE,  ///
        html = node.asHTML(indent, { ///
          tokens,
          importer
        }),
        inputFileHTML = html; ///

  Object.assign(context, {
    inputFileHTML
  });

  proceed();
}

module.exports = inputFileHTMLOperation;
