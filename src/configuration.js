"use strict";

import { versionUtilities, configurationUtilities } from "necessary";

import { HIGHMARK } from "./constants";
import { migrateToVersion1_1 } from "./configuration/version_1_1";
import { migrateToVersion1_2 } from "./configuration/version_1_2";
import { serialiseJSON, unserialiseJSON } from "./utilities/json";
import { createConfiguration, migrateToVersion1_3 } from "./configuration/version_1_3";
import { CONFIGURATION_FILE_DOES_NOT_EXIST_MESSAGE } from "./messages";
import { VERSION_1_0, VERSION_1_1, VERSION_1_2, VERSION_1_3 } from "./versions";

const { rc } = configurationUtilities,
      { migrate } = versionUtilities,
      { setRCBaseExtension, checkRCFileExists, updateRCFile, writeRCFile, readRCFile } = rc;

const rcBaseExtension = HIGHMARK; ///

setRCBaseExtension(rcBaseExtension);

export function updateOptions(options) {
  updateConfigurationFile({
    options
  });
}

export function retrieveOptions() {
  const configuration = readConfigurationFile(),
        { options } = configuration;

  return options;
}

export function createConfigurationFile() {
  const configuration = createConfiguration();

  let json = configuration; ///

  json = serialiseJSON(json); ///

  writeRCFile(json);
}

export function migrateConfigurationFile() {
  assertConfigurationFileExists();

  let json = readRCFile();

  json = unserialiseJSON(json); ///

  const migrationMap = {
          [VERSION_1_0]: migrateToVersion1_1,
          [VERSION_1_1]: migrateToVersion1_2,
          [VERSION_1_2]: migrateToVersion1_3
        },
        latestVersion = VERSION_1_3;

  json = migrate(json, migrationMap, latestVersion);

  json = serialiseJSON(json); ///

  writeRCFile(json);
}

export function checkConfigurationFileExists() {
  const rcFileExists = checkRCFileExists(),
        configurationFileExists = rcFileExists; ///

  return configurationFileExists;
}

export function assertConfigurationFileExists() {
  const configurationFileExists = checkConfigurationFileExists();

  if (!configurationFileExists) {
    console.log(CONFIGURATION_FILE_DOES_NOT_EXIST_MESSAGE);

    process.exit(1);
  }
}

function readConfigurationFile() {
  assertConfigurationFileExists();

  let json = readRCFile();

  json = unserialiseJSON(json); ///

  const configuration = json; ///

  return configuration;
}

function writeConfigurationFile(configuration) {
  assertConfigurationFileExists();

  let json = configuration; ///

  json = serialiseJSON(json); ///

  writeRCFile(json);
}

function updateConfigurationFile(addedConfiguration, ...deleteConfigurationNames) {
  assertConfigurationFileExists();

  let json = addedConfiguration;  ///

  json = serialiseJSON(json); ///

  addedConfiguration = json;  ///

  const addedProperties = addedConfiguration, ///
        deletedPropertyNames = deleteConfigurationNames;  ///

  updateRCFile(addedProperties, ...deletedPropertyNames);
}
