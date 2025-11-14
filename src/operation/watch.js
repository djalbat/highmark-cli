"use strict";

import { pathUtilities } from "necessary";
import { packageUtilities } from "highmark-client";
import { createLiveReloadHandler } from "lively-cli";

import { LIVE_RELOAD_PATH, INDEX_HTML_FILE_NAME } from "../constants";

const { concatenatePaths } = pathUtilities,
      { getClientJSFileName } = packageUtilities;

export default function watchOperation(proceed, abort, context) {
  const { watch } = context;

  if (watch) {
    const { server, quietly, projectDirectoryName } = context,
          clientJSFileName = getClientJSFileName(),
          clientJSFilePath = concatenatePaths(projectDirectoryName, clientJSFileName),
          indexHTMLFilePath = concatenatePaths(projectDirectoryName, INDEX_HTML_FILE_NAME),
          watchPattern = [
            clientJSFilePath,
            indexHTMLFilePath
          ],
          liveReloadHandler = createLiveReloadHandler(watchPattern, quietly);

    server.get(LIVE_RELOAD_PATH, liveReloadHandler);
  }

  proceed();
}
