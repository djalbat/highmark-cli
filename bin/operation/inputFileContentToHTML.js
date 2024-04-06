"use strict";

const importer = require("../importer");

const { nodeFromContent } = require("../utilities/markdown");

function inputFileContentToHTMLOperation(proceed, abort, context) {
  const { inputFileContent } = context,
        content = inputFileContent, ///
        node = nodeFromContent(content);

  if (node === null) {
    abort();

    return;
  }

  const html = node.asHTML({ ///
    importer
  });

  Object.assign(context, {
    html
  });

  proceed();
}

module.exports = inputFileContentToHTMLOperation;
