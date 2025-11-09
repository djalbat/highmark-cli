"use strict";

import { pathUtilities } from "necessary";

import { writeFile } from "../utilities/fileSystem";
import { createIndexHTML } from "../utilities/html";
import { INDEX_HTML_FILE_NAME } from "../constants";

const { concatenatePaths } = pathUtilities;

export default function createClientHTMLOperation(proceed, abort, context) {
  const { client, markdownHTML, markdownStylesCSS, projectDirectoryName } = context,
        indexHTML = createIndexHTML(markdownHTML, markdownStylesCSS, client),
        content = indexHTML, ///
        filePath = concatenatePaths(projectDirectoryName, INDEX_HTML_FILE_NAME);

  writeFile(filePath, content);

  proceed();
}
