"use strict";

import { EMPTY_STRING } from "../constants";

export default function createLoadingHTML(client) {
  let loadingHTML = EMPTY_STRING;

  if (client) {
    loadingHTML = `<div class="loading">
    <div class="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>`;
  }

  return loadingHTML;
}
