"use strict";

import { EMPTY_STRING } from "../constants";

export default function createViewModeHTML(client, viewMode) {
  let loadingHTML = EMPTY_STRING;

  if (client) {
    loadingHTML = `<script>

  const  viewMode = "${viewMode}";

  Object.assign(globalThis, {
    viewMode
  });

</script>`;
  }

  return loadingHTML;
}

