"use strict";

const { versionUtilities, configurationUtilities } = require("necessary");

const { HIGHMARK } = require("./constants"),
      { VERSION_1_0, VERSION_1_1 } = require("./versions"),
      { createConfiguration, migrateToVersion1_1 } = require("./configuration/version_1_1"),
      { CONFIGURATION_FILE_DOES_NOT_EXIST_MESSAGE } = require("./messages");

const { rc } = configurationUtilities,
      { migrate } = versionUtilities,
      { setRCBaseExtension, checkRCFileExists, updateRCFile, writeRCFile, readRCFile } = rc;

const rcBaseExtension = HIGHMARK; ///

setRCBaseExtension(rcBaseExtension);

function getContentsDepth() {
  const configuration = readConfigurationFile(),
        { contentsDepth } = configuration;

  return contentsDepth;
}

function createConfigurationFile() {
  const configuration = createConfiguration(),
        json = configuration; ///

  writeRCFile(json);
}

function migrateConfigurationFile() {
  assertConfigurationFileExists();

  let json = readRCFile();

  const migrationMap = {
          [VERSION_1_0]: migrateToVersion1_1
        },
        latestVersion = VERSION_1_1;

  json = migrate(json, migrationMap, latestVersion);

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
  getContentsDepth,
  createConfigurationFile,
  migrateConfigurationFile,
  checkConfigurationFileExists,
  assertConfigurationFileExists
};

function readConfigurationFile() {
  assertConfigurationFileExists();

  const json = readRCFile(),
        configuration = json; ///

  return configuration;
}

function writeConfigurationFile(configuration) {
  assertConfigurationFileExists();

  const json = configuration; ///

  writeRCFile(json);
}

function updateConfigurationFile(addedConfiguration, ...deleteConfigurationNames) {
  assertConfigurationFileExists();

  const addedProperties = addedConfiguration, ///
        deletedPropertyNames = deleteConfigurationNames;  ///

  updateRCFile(addedProperties, ...deletedPropertyNames);
}
