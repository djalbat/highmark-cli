"use strict";

import { pathUtilities } from "necessary";
import { grammarUtilities } from "highmark-markdown";

import importer from "../importer";

import { readFile } from "../utilities/fileSystem";
import { retrieveOptions } from "../configuration";
import { UNABLE_TO_CONVERT_MARKDOWN_TO_HTML_MESSAGE } from "../messages";

const { concatenatePaths } = pathUtilities,
      { htmlFromMarkdownOptionsAndImporter } = grammarUtilities;

export default function markdownHTMLOperation(proceed, abort, context) {
  const { indexOptions, inputFileName, projectDirectoryName } = context,
        inputFilePath = concatenatePaths(projectDirectoryName, inputFileName),
        filePath = inputFilePath, ///
        content = readFile(filePath),
        markdown = content,
        options = retrieveOptions(); ///

  Object.assign(options, {
    ...indexOptions,
    projectDirectoryName
  });

  const html = htmlFromMarkdownOptionsAndImporter(markdown, options, importer);

  if (html === null) {
    const message = UNABLE_TO_CONVERT_MARKDOWN_TO_HTML_MESSAGE;

    console.log(message);

    abort();

    return;
  }

  const markdownHTML = html;  ///

  Object.assign(context, {
    markdownHTML
  });

  proceed();
}
