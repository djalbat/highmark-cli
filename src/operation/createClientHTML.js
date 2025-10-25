"use strict";

import { pathUtilities } from "necessary";
import { constants, createHTML } from "highmark-client";

import { writeFile } from "../utilities/fileSystem";

const { concatenatePaths } = pathUtilities,
      { INDEX_HTML_FILE_NAME } = constants;

export default function createClientHTMLOperation(proceed, abort, context) {
  const { client, markdownHTML, markdownStylesCSS, projectDirectoryName } = context,
        html = createHTML(markdownHTML, markdownStylesCSS, client),
        content = html, ///
        filePath = concatenatePaths(projectDirectoryName, INDEX_HTML_FILE_NAME);

  writeFile(filePath, content);

  proceed();
}
