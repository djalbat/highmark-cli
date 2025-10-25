"use strict";
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
import { versionUtilities, configurationUtilities } from "necessary";
import { HIGHMARK } from "./constants";
import { migrateToVersion1_1 } from "./configuration/version_1_1";
import { migrateToVersion1_2 } from "./configuration/version_1_2";
import { serialiseJSON, unserialiseJSON } from "./utilities/json";
import { createConfiguration, migrateToVersion1_3 } from "./configuration/version_1_3";
import { CONFIGURATION_FILE_DOES_NOT_EXIST_MESSAGE } from "./messages";
import { VERSION_1_0, VERSION_1_1, VERSION_1_2, VERSION_1_3 } from "./versions";
var rc = configurationUtilities.rc, migrate = versionUtilities.migrate, setRCBaseExtension = rc.setRCBaseExtension, checkRCFileExists = rc.checkRCFileExists, updateRCFile = rc.updateRCFile, writeRCFile = rc.writeRCFile, readRCFile = rc.readRCFile;
var rcBaseExtension = HIGHMARK; ///
setRCBaseExtension(rcBaseExtension);
export function updateOptions(options) {
    updateConfigurationFile({
        options: options
    });
}
export function retrieveOptions() {
    var configuration = readConfigurationFile(), options = configuration.options;
    return options;
}
export function createConfigurationFile() {
    var configuration = createConfiguration();
    var json = configuration; ///
    json = serialiseJSON(json); ///
    writeRCFile(json);
}
export function migrateConfigurationFile() {
    assertConfigurationFileExists();
    var json = readRCFile();
    json = unserialiseJSON(json); ///
    var _obj;
    var migrationMap = (_obj = {}, _define_property(_obj, VERSION_1_0, migrateToVersion1_1), _define_property(_obj, VERSION_1_1, migrateToVersion1_2), _define_property(_obj, VERSION_1_2, migrateToVersion1_3), _obj), latestVersion = VERSION_1_3;
    json = migrate(json, migrationMap, latestVersion);
    json = serialiseJSON(json); ///
    writeRCFile(json);
}
export function checkConfigurationFileExists() {
    var rcFileExists = checkRCFileExists(), configurationFileExists = rcFileExists; ///
    return configurationFileExists;
}
export function assertConfigurationFileExists() {
    var configurationFileExists = checkConfigurationFileExists();
    if (!configurationFileExists) {
        console.log(CONFIGURATION_FILE_DOES_NOT_EXIST_MESSAGE);
        process.exit(1);
    }
}
function readConfigurationFile() {
    assertConfigurationFileExists();
    var json = readRCFile();
    json = unserialiseJSON(json); ///
    var configuration = json; ///
    return configuration;
}
function writeConfigurationFile(configuration) {
    assertConfigurationFileExists();
    var json = configuration; ///
    json = serialiseJSON(json); ///
    writeRCFile(json);
}
function updateConfigurationFile(addedConfiguration) {
    for(var _len = arguments.length, deleteConfigurationNames = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        deleteConfigurationNames[_key - 1] = arguments[_key];
    }
    assertConfigurationFileExists();
    var json = addedConfiguration; ///
    json = serialiseJSON(json); ///
    addedConfiguration = json; ///
    var addedProperties = addedConfiguration, deletedPropertyNames = deleteConfigurationNames; ///
    updateRCFile.apply(void 0, [
        addedProperties
    ].concat(_to_consumable_array(deletedPropertyNames)));
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25maWd1cmF0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB2ZXJzaW9uVXRpbGl0aWVzLCBjb25maWd1cmF0aW9uVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBISUdITUFSSyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgbWlncmF0ZVRvVmVyc2lvbjFfMSB9IGZyb20gXCIuL2NvbmZpZ3VyYXRpb24vdmVyc2lvbl8xXzFcIjtcbmltcG9ydCB7IG1pZ3JhdGVUb1ZlcnNpb24xXzIgfSBmcm9tIFwiLi9jb25maWd1cmF0aW9uL3ZlcnNpb25fMV8yXCI7XG5pbXBvcnQgeyBzZXJpYWxpc2VKU09OLCB1bnNlcmlhbGlzZUpTT04gfSBmcm9tIFwiLi91dGlsaXRpZXMvanNvblwiO1xuaW1wb3J0IHsgY3JlYXRlQ29uZmlndXJhdGlvbiwgbWlncmF0ZVRvVmVyc2lvbjFfMyB9IGZyb20gXCIuL2NvbmZpZ3VyYXRpb24vdmVyc2lvbl8xXzNcIjtcbmltcG9ydCB7IENPTkZJR1VSQVRJT05fRklMRV9ET0VTX05PVF9FWElTVF9NRVNTQUdFIH0gZnJvbSBcIi4vbWVzc2FnZXNcIjtcbmltcG9ydCB7IFZFUlNJT05fMV8wLCBWRVJTSU9OXzFfMSwgVkVSU0lPTl8xXzIsIFZFUlNJT05fMV8zIH0gZnJvbSBcIi4vdmVyc2lvbnNcIjtcblxuY29uc3QgeyByYyB9ID0gY29uZmlndXJhdGlvblV0aWxpdGllcyxcbiAgICAgIHsgbWlncmF0ZSB9ID0gdmVyc2lvblV0aWxpdGllcyxcbiAgICAgIHsgc2V0UkNCYXNlRXh0ZW5zaW9uLCBjaGVja1JDRmlsZUV4aXN0cywgdXBkYXRlUkNGaWxlLCB3cml0ZVJDRmlsZSwgcmVhZFJDRmlsZSB9ID0gcmM7XG5cbmNvbnN0IHJjQmFzZUV4dGVuc2lvbiA9IEhJR0hNQVJLOyAvLy9cblxuc2V0UkNCYXNlRXh0ZW5zaW9uKHJjQmFzZUV4dGVuc2lvbik7XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVPcHRpb25zKG9wdGlvbnMpIHtcbiAgdXBkYXRlQ29uZmlndXJhdGlvbkZpbGUoe1xuICAgIG9wdGlvbnNcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXRyaWV2ZU9wdGlvbnMoKSB7XG4gIGNvbnN0IGNvbmZpZ3VyYXRpb24gPSByZWFkQ29uZmlndXJhdGlvbkZpbGUoKSxcbiAgICAgICAgeyBvcHRpb25zIH0gPSBjb25maWd1cmF0aW9uO1xuXG4gIHJldHVybiBvcHRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29uZmlndXJhdGlvbkZpbGUoKSB7XG4gIGNvbnN0IGNvbmZpZ3VyYXRpb24gPSBjcmVhdGVDb25maWd1cmF0aW9uKCk7XG5cbiAgbGV0IGpzb24gPSBjb25maWd1cmF0aW9uOyAvLy9cblxuICBqc29uID0gc2VyaWFsaXNlSlNPTihqc29uKTsgLy8vXG5cbiAgd3JpdGVSQ0ZpbGUoanNvbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaWdyYXRlQ29uZmlndXJhdGlvbkZpbGUoKSB7XG4gIGFzc2VydENvbmZpZ3VyYXRpb25GaWxlRXhpc3RzKCk7XG5cbiAgbGV0IGpzb24gPSByZWFkUkNGaWxlKCk7XG5cbiAganNvbiA9IHVuc2VyaWFsaXNlSlNPTihqc29uKTsgLy8vXG5cbiAgY29uc3QgbWlncmF0aW9uTWFwID0ge1xuICAgICAgICAgIFtWRVJTSU9OXzFfMF06IG1pZ3JhdGVUb1ZlcnNpb24xXzEsXG4gICAgICAgICAgW1ZFUlNJT05fMV8xXTogbWlncmF0ZVRvVmVyc2lvbjFfMixcbiAgICAgICAgICBbVkVSU0lPTl8xXzJdOiBtaWdyYXRlVG9WZXJzaW9uMV8zXG4gICAgICAgIH0sXG4gICAgICAgIGxhdGVzdFZlcnNpb24gPSBWRVJTSU9OXzFfMztcblxuICBqc29uID0gbWlncmF0ZShqc29uLCBtaWdyYXRpb25NYXAsIGxhdGVzdFZlcnNpb24pO1xuXG4gIGpzb24gPSBzZXJpYWxpc2VKU09OKGpzb24pOyAvLy9cblxuICB3cml0ZVJDRmlsZShqc29uKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQ29uZmlndXJhdGlvbkZpbGVFeGlzdHMoKSB7XG4gIGNvbnN0IHJjRmlsZUV4aXN0cyA9IGNoZWNrUkNGaWxlRXhpc3RzKCksXG4gICAgICAgIGNvbmZpZ3VyYXRpb25GaWxlRXhpc3RzID0gcmNGaWxlRXhpc3RzOyAvLy9cblxuICByZXR1cm4gY29uZmlndXJhdGlvbkZpbGVFeGlzdHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRDb25maWd1cmF0aW9uRmlsZUV4aXN0cygpIHtcbiAgY29uc3QgY29uZmlndXJhdGlvbkZpbGVFeGlzdHMgPSBjaGVja0NvbmZpZ3VyYXRpb25GaWxlRXhpc3RzKCk7XG5cbiAgaWYgKCFjb25maWd1cmF0aW9uRmlsZUV4aXN0cykge1xuICAgIGNvbnNvbGUubG9nKENPTkZJR1VSQVRJT05fRklMRV9ET0VTX05PVF9FWElTVF9NRVNTQUdFKTtcblxuICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWFkQ29uZmlndXJhdGlvbkZpbGUoKSB7XG4gIGFzc2VydENvbmZpZ3VyYXRpb25GaWxlRXhpc3RzKCk7XG5cbiAgbGV0IGpzb24gPSByZWFkUkNGaWxlKCk7XG5cbiAganNvbiA9IHVuc2VyaWFsaXNlSlNPTihqc29uKTsgLy8vXG5cbiAgY29uc3QgY29uZmlndXJhdGlvbiA9IGpzb247IC8vL1xuXG4gIHJldHVybiBjb25maWd1cmF0aW9uO1xufVxuXG5mdW5jdGlvbiB3cml0ZUNvbmZpZ3VyYXRpb25GaWxlKGNvbmZpZ3VyYXRpb24pIHtcbiAgYXNzZXJ0Q29uZmlndXJhdGlvbkZpbGVFeGlzdHMoKTtcblxuICBsZXQganNvbiA9IGNvbmZpZ3VyYXRpb247IC8vL1xuXG4gIGpzb24gPSBzZXJpYWxpc2VKU09OKGpzb24pOyAvLy9cblxuICB3cml0ZVJDRmlsZShqc29uKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ29uZmlndXJhdGlvbkZpbGUoYWRkZWRDb25maWd1cmF0aW9uLCAuLi5kZWxldGVDb25maWd1cmF0aW9uTmFtZXMpIHtcbiAgYXNzZXJ0Q29uZmlndXJhdGlvbkZpbGVFeGlzdHMoKTtcblxuICBsZXQganNvbiA9IGFkZGVkQ29uZmlndXJhdGlvbjsgIC8vL1xuXG4gIGpzb24gPSBzZXJpYWxpc2VKU09OKGpzb24pOyAvLy9cblxuICBhZGRlZENvbmZpZ3VyYXRpb24gPSBqc29uOyAgLy8vXG5cbiAgY29uc3QgYWRkZWRQcm9wZXJ0aWVzID0gYWRkZWRDb25maWd1cmF0aW9uLCAvLy9cbiAgICAgICAgZGVsZXRlZFByb3BlcnR5TmFtZXMgPSBkZWxldGVDb25maWd1cmF0aW9uTmFtZXM7ICAvLy9cblxuICB1cGRhdGVSQ0ZpbGUoYWRkZWRQcm9wZXJ0aWVzLCAuLi5kZWxldGVkUHJvcGVydHlOYW1lcyk7XG59XG4iXSwibmFtZXMiOlsidmVyc2lvblV0aWxpdGllcyIsImNvbmZpZ3VyYXRpb25VdGlsaXRpZXMiLCJISUdITUFSSyIsIm1pZ3JhdGVUb1ZlcnNpb24xXzEiLCJtaWdyYXRlVG9WZXJzaW9uMV8yIiwic2VyaWFsaXNlSlNPTiIsInVuc2VyaWFsaXNlSlNPTiIsImNyZWF0ZUNvbmZpZ3VyYXRpb24iLCJtaWdyYXRlVG9WZXJzaW9uMV8zIiwiQ09ORklHVVJBVElPTl9GSUxFX0RPRVNfTk9UX0VYSVNUX01FU1NBR0UiLCJWRVJTSU9OXzFfMCIsIlZFUlNJT05fMV8xIiwiVkVSU0lPTl8xXzIiLCJWRVJTSU9OXzFfMyIsInJjIiwibWlncmF0ZSIsInNldFJDQmFzZUV4dGVuc2lvbiIsImNoZWNrUkNGaWxlRXhpc3RzIiwidXBkYXRlUkNGaWxlIiwid3JpdGVSQ0ZpbGUiLCJyZWFkUkNGaWxlIiwicmNCYXNlRXh0ZW5zaW9uIiwidXBkYXRlT3B0aW9ucyIsIm9wdGlvbnMiLCJ1cGRhdGVDb25maWd1cmF0aW9uRmlsZSIsInJldHJpZXZlT3B0aW9ucyIsImNvbmZpZ3VyYXRpb24iLCJyZWFkQ29uZmlndXJhdGlvbkZpbGUiLCJjcmVhdGVDb25maWd1cmF0aW9uRmlsZSIsImpzb24iLCJtaWdyYXRlQ29uZmlndXJhdGlvbkZpbGUiLCJhc3NlcnRDb25maWd1cmF0aW9uRmlsZUV4aXN0cyIsIm1pZ3JhdGlvbk1hcCIsImxhdGVzdFZlcnNpb24iLCJjaGVja0NvbmZpZ3VyYXRpb25GaWxlRXhpc3RzIiwicmNGaWxlRXhpc3RzIiwiY29uZmlndXJhdGlvbkZpbGVFeGlzdHMiLCJjb25zb2xlIiwibG9nIiwicHJvY2VzcyIsImV4aXQiLCJ3cml0ZUNvbmZpZ3VyYXRpb25GaWxlIiwiYWRkZWRDb25maWd1cmF0aW9uIiwiZGVsZXRlQ29uZmlndXJhdGlvbk5hbWVzIiwiYWRkZWRQcm9wZXJ0aWVzIiwiZGVsZXRlZFByb3BlcnR5TmFtZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxTQUFTQSxnQkFBZ0IsRUFBRUMsc0JBQXNCLFFBQVEsWUFBWTtBQUVyRSxTQUFTQyxRQUFRLFFBQVEsY0FBYztBQUN2QyxTQUFTQyxtQkFBbUIsUUFBUSw4QkFBOEI7QUFDbEUsU0FBU0MsbUJBQW1CLFFBQVEsOEJBQThCO0FBQ2xFLFNBQVNDLGFBQWEsRUFBRUMsZUFBZSxRQUFRLG1CQUFtQjtBQUNsRSxTQUFTQyxtQkFBbUIsRUFBRUMsbUJBQW1CLFFBQVEsOEJBQThCO0FBQ3ZGLFNBQVNDLHlDQUF5QyxRQUFRLGFBQWE7QUFDdkUsU0FBU0MsV0FBVyxFQUFFQyxXQUFXLEVBQUVDLFdBQVcsRUFBRUMsV0FBVyxRQUFRLGFBQWE7QUFFaEYsSUFBTSxBQUFFQyxLQUFPYix1QkFBUGEsSUFDRixBQUFFQyxVQUFZZixpQkFBWmUsU0FDQUMscUJBQWlGRixHQUFqRkUsb0JBQW9CQyxvQkFBNkRILEdBQTdERyxtQkFBbUJDLGVBQTBDSixHQUExQ0ksY0FBY0MsY0FBNEJMLEdBQTVCSyxhQUFhQyxhQUFlTixHQUFmTTtBQUUxRSxJQUFNQyxrQkFBa0JuQixVQUFVLEdBQUc7QUFFckNjLG1CQUFtQks7QUFFbkIsT0FBTyxTQUFTQyxjQUFjQyxPQUFPO0lBQ25DQyx3QkFBd0I7UUFDdEJELFNBQUFBO0lBQ0Y7QUFDRjtBQUVBLE9BQU8sU0FBU0U7SUFDZCxJQUFNQyxnQkFBZ0JDLHlCQUNoQixBQUFFSixVQUFZRyxjQUFaSDtJQUVSLE9BQU9BO0FBQ1Q7QUFFQSxPQUFPLFNBQVNLO0lBQ2QsSUFBTUYsZ0JBQWdCbkI7SUFFdEIsSUFBSXNCLE9BQU9ILGVBQWUsR0FBRztJQUU3QkcsT0FBT3hCLGNBQWN3QixPQUFPLEdBQUc7SUFFL0JWLFlBQVlVO0FBQ2Q7QUFFQSxPQUFPLFNBQVNDO0lBQ2RDO0lBRUEsSUFBSUYsT0FBT1Q7SUFFWFMsT0FBT3ZCLGdCQUFnQnVCLE9BQU8sR0FBRztRQUVaO0lBQXJCLElBQU1HLGdCQUFlLFdBQ2IsaUJBRGEsTUFDWnRCLGFBQWNQLHNCQUNmLGlCQUZhLE1BRVpRLGFBQWNQLHNCQUNmLGlCQUhhLE1BR1pRLGFBQWNKLHNCQUhGLE9BS2Z5QixnQkFBZ0JwQjtJQUV0QmdCLE9BQU9kLFFBQVFjLE1BQU1HLGNBQWNDO0lBRW5DSixPQUFPeEIsY0FBY3dCLE9BQU8sR0FBRztJQUUvQlYsWUFBWVU7QUFDZDtBQUVBLE9BQU8sU0FBU0s7SUFDZCxJQUFNQyxlQUFlbEIscUJBQ2ZtQiwwQkFBMEJELGNBQWMsR0FBRztJQUVqRCxPQUFPQztBQUNUO0FBRUEsT0FBTyxTQUFTTDtJQUNkLElBQU1LLDBCQUEwQkY7SUFFaEMsSUFBSSxDQUFDRSx5QkFBeUI7UUFDNUJDLFFBQVFDLEdBQUcsQ0FBQzdCO1FBRVo4QixRQUFRQyxJQUFJLENBQUM7SUFDZjtBQUNGO0FBRUEsU0FBU2I7SUFDUEk7SUFFQSxJQUFJRixPQUFPVDtJQUVYUyxPQUFPdkIsZ0JBQWdCdUIsT0FBTyxHQUFHO0lBRWpDLElBQU1ILGdCQUFnQkcsTUFBTSxHQUFHO0lBRS9CLE9BQU9IO0FBQ1Q7QUFFQSxTQUFTZSx1QkFBdUJmLGFBQWE7SUFDM0NLO0lBRUEsSUFBSUYsT0FBT0gsZUFBZSxHQUFHO0lBRTdCRyxPQUFPeEIsY0FBY3dCLE9BQU8sR0FBRztJQUUvQlYsWUFBWVU7QUFDZDtBQUVBLFNBQVNMLHdCQUF3QmtCLGtCQUFrQjtJQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHQywyQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtRQUFHQSx5QkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQTJCOztJQUM5RVo7SUFFQSxJQUFJRixPQUFPYSxvQkFBcUIsR0FBRztJQUVuQ2IsT0FBT3hCLGNBQWN3QixPQUFPLEdBQUc7SUFFL0JhLHFCQUFxQmIsTUFBTyxHQUFHO0lBRS9CLElBQU1lLGtCQUFrQkYsb0JBQ2xCRyx1QkFBdUJGLDBCQUEyQixHQUFHO0lBRTNEekIsbUJBQUFBLEtBQUFBLEdBQUFBO1FBQWEwQjtLQUF5QyxDQUF0RDFCLE9BQThCLHFCQUFHMkI7QUFDbkMifQ==