"use strict";

import { packageUtilities } from "necessary";

import { HIGHMARK_CLI } from "../constants";

const { getVersion } = packageUtilities;

export default function versionAction() {
  const version = getVersion(); ///

  console.log(`${HIGHMARK_CLI} version ${version}`);
}
