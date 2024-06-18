"use strict";

const { versionUtilities, configurationUtilities } = require("necessary");

const { HIGHMARK } = require("./constants"),
      { VERSION_1_0, VERSION_1_1, VERSION_1_2 } = require("./versions"),
      { migrateToVersion1_1 } = require("./configuration/version_1_1"),
      { createConfiguration, migrateToVersion1_2 } = require("./configuration/version_1_2"),
      { CONFIGURATION_FILE_DOES_NOT_EXIST_MESSAGE } = require("./messages");

const { rc } = configurationUtilities,
      { migrate } = versionUtilities,
      { setRCBaseExtension, checkRCFileExists, updateRCFile, writeRCFile, readRCFile } = rc;

const rcBaseExtension = HIGHMARK; ///

setRCBaseExtension(rcBaseExtension);

function getLinesPerPage() {
  const configuration = readConfigurationFile(),
        { linesPerPage } = configuration;

  return linesPerPage;
}

function getContentsDepth() {
  const configuration = readConfigurationFile(),
        { contentsDepth } = configuration;

  return contentsDepth;
}

function getCharactersPerLine() {
  const configuration = readConfigurationFile(),
        { charactersPerLine } = configuration;

  return charactersPerLine;
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
          [VERSION_1_0]: migrateToVersion1_1,
          [VERSION_1_1]: migrateToVersion1_2
        },
        latestVersion = VERSION_1_2;

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
  getLinesPerPage,
  getContentsDepth,
  getCharactersPerLine,
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
