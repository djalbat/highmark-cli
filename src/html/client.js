"use strict";

import { EMPTY_STRING } from "../constants";

export default function createClientHTML(client) {
  let clientHTML = EMPTY_STRING;

  if (client) {
    clientHTML = `<script src="client.js"> </script>`;
  }

  return clientHTML;
}
