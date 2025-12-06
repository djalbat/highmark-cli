"use strict";

import { fontStyle } from "highmark-markdown";
import { liveReloadSnippet } from "lively-cli";
import { pathUtilities, templateUtilities } from "necessary";

import createIndexHTML from "../html/index";
import createClientHTML from "../html/client";
import createLoadingCSS from "../css/loading";
import createLoadingHTML from "../html/loading";
import createDocumentCSS from "../css/document";
import createViewModeHTML from "../html/viewMode";

import { writeFile } from "../utilities/fileSystem";
import { INDEX_HTML_FILE_NAME } from "../constants";

const { parseContent } = templateUtilities,
      { concatenatePaths } = pathUtilities;

export default function createIndexHTMLOperation(proceed, abort, context) {
  const { client, viewMode, highmarkCSS, highmarkHTML, projectDirectoryName } = context,
        fontCSS = fontStyle,  ///
        indexHTML = createIndexHTML(client),
        clientHTML = createClientHTML(client),
        loadingHTML = createLoadingHTML(client),
        loadingCSS = createLoadingCSS(client),
        documentCSS = createDocumentCSS(client),
        viewModeHTML = createViewModeHTML(client, viewMode),
        liveReloadHTML = liveReloadSnippet, ///
        args = {
          fontCSS,
          clientHTML,
          loadingCSS,
          loadingHTML,
          documentCSS,
          highmarkCSS,
          highmarkHTML,
          viewModeHTML,
          liveReloadHTML
        };

  let content;

  content = indexHTML;  ///

  const regularExpression = /{(.+?)}/g,
        parsedContent = parseContent(content, args, regularExpression);

  content = parsedContent;  ///

  const filePath = concatenatePaths(projectDirectoryName, INDEX_HTML_FILE_NAME);

  writeFile(filePath, content);

  proceed();
}
