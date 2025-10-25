"use strict";

import { constants } from "highmark-client";
import { pathUtilities } from "necessary";
import { createLiveReloadHandler } from "lively-cli";

import { LIVE_RELOAD_PATH } from "../constants";

const { concatenatePaths } = pathUtilities,
      { INDEX_HTML_FILE_NAME } = constants;

export default function watchOperation(proceed, abort, context) {
  const { watch } = context;

  if (watch) {
    const { server, quietly, projectDirectoryName } = context,
          indexHTMLFilePath = concatenatePaths(projectDirectoryName, INDEX_HTML_FILE_NAME),
          watchPattern = indexHTMLFilePath, ///
          liveReloadHandler = createLiveReloadHandler(watchPattern, quietly);

    server.get(LIVE_RELOAD_PATH, liveReloadHandler);
  }

  proceed();
}
