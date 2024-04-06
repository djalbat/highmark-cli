"use strict";

const importer = require("../importer");

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

  const html = node.asHTML({ ///
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
