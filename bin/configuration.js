"use strict";

const { versionUtilities, configurationUtilities } = require("necessary");

const { HIGHMARK } = require("./constants"),
      { migrateToVersion1_1 } = require("./configuration/version_1_1"),
      { migrateToVersion1_2 } = require("./configuration/version_1_2"),
      { serialiseJSON, unserialiseJSON } = require("./utilities/json"),
      { createConfiguration, migrateToVersion1_3 } = require("./configuration/version_1_3"),
      { CONFIGURATION_FILE_DOES_NOT_EXIST_MESSAGE } = require("./messages"),
      { VERSION_1_0, VERSION_1_1, VERSION_1_2, VERSION_1_3 } = require("./versions");

const { rc } = configurationUtilities,
      { migrate } = versionUtilities,
      { setRCBaseExtension, checkRCFileExists, updateRCFile, writeRCFile, readRCFile } = rc;

const rcBaseExtension = HIGHMARK; ///

setRCBaseExtension(rcBaseExtension);

function updateOptions(options) {
  updateConfigurationFile({
    options
  });
}

function retrieveOptions() {
  const configuration = readConfigurationFile(),
        { options } = configuration;

  return options;
}

function createConfigurationFile() {
  const configuration = createConfiguration();

  let json = configuration; ///

  json = serialiseJSON(json); ///

  writeRCFile(json);
}

function migrateConfigurationFile() {
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

function checkConfigurationFileExists() {
  const rcFileExists = checkRCFileExists(),
        configurationFileExists = rcFileExists; ///

  return configurationFileExists;
}

function assertConfigurationFileExists() {
  const configurationFileExists = checkConfigurationFileExists();

  if (!configurationFileExists) {
    console.log(CONFIGURATION_FILE_DOES_NOT_EXIST_MESSAGE);

    process.exit(1);
  }
}

module.exports = {
  updateOptions,
  retrieveOptions,
  createConfigurationFile,
  migrateConfigurationFile,
  checkConfigurationFileExists,
  assertConfigurationFileExists
};

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
