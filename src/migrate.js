"use strict";

import { versionUtilities } from "necessary";

import { VERSION_1 } from "./versions";
import { migrateStateToVersion_1 } from "./state/version_1";

const { migrate } = versionUtilities;

export function migrateState(state) {
  const migrationMap = {
          [VERSION_1]: migrateStateToVersion_1
        },
        latestVersion = VERSION_1;

  state = migrate(state, migrationMap, latestVersion);

  return state;
}
