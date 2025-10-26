"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get assertConfigurationFileExists () {
        return assertConfigurationFileExists;
    },
    get checkConfigurationFileExists () {
        return checkConfigurationFileExists;
    },
    get createConfigurationFile () {
        return createConfigurationFile;
    },
    get migrateConfigurationFile () {
        return migrateConfigurationFile;
    },
    get retrieveOptions () {
        return retrieveOptions;
    },
    get updateOptions () {
        return updateOptions;
    }
});
var _necessary = require("necessary");
var _constants = require("./constants");
var _version_1_1 = require("./configuration/version_1_1");
var _version_1_2 = require("./configuration/version_1_2");
var _json = require("./utilities/json");
var _version_1_3 = require("./configuration/version_1_3");
var _messages = require("./messages");
var _versions = require("./versions");
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
var rc = _necessary.configurationUtilities.rc, migrate = _necessary.versionUtilities.migrate, setRCBaseExtension = rc.setRCBaseExtension, checkRCFileExists = rc.checkRCFileExists, updateRCFile = rc.updateRCFile, writeRCFile = rc.writeRCFile, readRCFile = rc.readRCFile;
var rcBaseExtension = _constants.HIGHMARK; ///
setRCBaseExtension(rcBaseExtension);
function updateOptions(options) {
    updateConfigurationFile({
        options: options
    });
}
function retrieveOptions() {
    var configuration = readConfigurationFile(), options = configuration.options;
    return options;
}
function createConfigurationFile() {
    var configuration = (0, _version_1_3.createConfiguration)();
    var json = configuration; ///
    json = (0, _json.serialiseJSON)(json); ///
    writeRCFile(json);
}
function migrateConfigurationFile() {
    assertConfigurationFileExists();
    var json = readRCFile();
    json = (0, _json.unserialiseJSON)(json); ///
    var _obj;
    var migrationMap = (_obj = {}, _define_property(_obj, _versions.VERSION_1_0, _version_1_1.migrateToVersion1_1), _define_property(_obj, _versions.VERSION_1_1, _version_1_2.migrateToVersion1_2), _define_property(_obj, _versions.VERSION_1_2, _version_1_3.migrateToVersion1_3), _obj), latestVersion = _versions.VERSION_1_3;
    json = migrate(json, migrationMap, latestVersion);
    json = (0, _json.serialiseJSON)(json); ///
    writeRCFile(json);
}
function checkConfigurationFileExists() {
    var rcFileExists = checkRCFileExists(), configurationFileExists = rcFileExists; ///
    return configurationFileExists;
}
function assertConfigurationFileExists() {
    var configurationFileExists = checkConfigurationFileExists();
    if (!configurationFileExists) {
        console.log(_messages.CONFIGURATION_FILE_DOES_NOT_EXIST_MESSAGE);
        process.exit(1);
    }
}
function readConfigurationFile() {
    assertConfigurationFileExists();
    var json = readRCFile();
    json = (0, _json.unserialiseJSON)(json); ///
    var configuration = json; ///
    return configuration;
}
function writeConfigurationFile(configuration) {
    assertConfigurationFileExists();
    var json = configuration; ///
    json = (0, _json.serialiseJSON)(json); ///
    writeRCFile(json);
}
function updateConfigurationFile(addedConfiguration) {
    for(var _len = arguments.length, deleteConfigurationNames = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        deleteConfigurationNames[_key - 1] = arguments[_key];
    }
    assertConfigurationFileExists();
    var json = addedConfiguration; ///
    json = (0, _json.serialiseJSON)(json); ///
    addedConfiguration = json; ///
    var addedProperties = addedConfiguration, deletedPropertyNames = deleteConfigurationNames; ///
    updateRCFile.apply(void 0, [
        addedProperties
    ].concat(_to_consumable_array(deletedPropertyNames)));
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25maWd1cmF0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB2ZXJzaW9uVXRpbGl0aWVzLCBjb25maWd1cmF0aW9uVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBISUdITUFSSyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgbWlncmF0ZVRvVmVyc2lvbjFfMSB9IGZyb20gXCIuL2NvbmZpZ3VyYXRpb24vdmVyc2lvbl8xXzFcIjtcbmltcG9ydCB7IG1pZ3JhdGVUb1ZlcnNpb24xXzIgfSBmcm9tIFwiLi9jb25maWd1cmF0aW9uL3ZlcnNpb25fMV8yXCI7XG5pbXBvcnQgeyBzZXJpYWxpc2VKU09OLCB1bnNlcmlhbGlzZUpTT04gfSBmcm9tIFwiLi91dGlsaXRpZXMvanNvblwiO1xuaW1wb3J0IHsgY3JlYXRlQ29uZmlndXJhdGlvbiwgbWlncmF0ZVRvVmVyc2lvbjFfMyB9IGZyb20gXCIuL2NvbmZpZ3VyYXRpb24vdmVyc2lvbl8xXzNcIjtcbmltcG9ydCB7IENPTkZJR1VSQVRJT05fRklMRV9ET0VTX05PVF9FWElTVF9NRVNTQUdFIH0gZnJvbSBcIi4vbWVzc2FnZXNcIjtcbmltcG9ydCB7IFZFUlNJT05fMV8wLCBWRVJTSU9OXzFfMSwgVkVSU0lPTl8xXzIsIFZFUlNJT05fMV8zIH0gZnJvbSBcIi4vdmVyc2lvbnNcIjtcblxuY29uc3QgeyByYyB9ID0gY29uZmlndXJhdGlvblV0aWxpdGllcyxcbiAgICAgIHsgbWlncmF0ZSB9ID0gdmVyc2lvblV0aWxpdGllcyxcbiAgICAgIHsgc2V0UkNCYXNlRXh0ZW5zaW9uLCBjaGVja1JDRmlsZUV4aXN0cywgdXBkYXRlUkNGaWxlLCB3cml0ZVJDRmlsZSwgcmVhZFJDRmlsZSB9ID0gcmM7XG5cbmNvbnN0IHJjQmFzZUV4dGVuc2lvbiA9IEhJR0hNQVJLOyAvLy9cblxuc2V0UkNCYXNlRXh0ZW5zaW9uKHJjQmFzZUV4dGVuc2lvbik7XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVPcHRpb25zKG9wdGlvbnMpIHtcbiAgdXBkYXRlQ29uZmlndXJhdGlvbkZpbGUoe1xuICAgIG9wdGlvbnNcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXRyaWV2ZU9wdGlvbnMoKSB7XG4gIGNvbnN0IGNvbmZpZ3VyYXRpb24gPSByZWFkQ29uZmlndXJhdGlvbkZpbGUoKSxcbiAgICAgICAgeyBvcHRpb25zIH0gPSBjb25maWd1cmF0aW9uO1xuXG4gIHJldHVybiBvcHRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29uZmlndXJhdGlvbkZpbGUoKSB7XG4gIGNvbnN0IGNvbmZpZ3VyYXRpb24gPSBjcmVhdGVDb25maWd1cmF0aW9uKCk7XG5cbiAgbGV0IGpzb24gPSBjb25maWd1cmF0aW9uOyAvLy9cblxuICBqc29uID0gc2VyaWFsaXNlSlNPTihqc29uKTsgLy8vXG5cbiAgd3JpdGVSQ0ZpbGUoanNvbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaWdyYXRlQ29uZmlndXJhdGlvbkZpbGUoKSB7XG4gIGFzc2VydENvbmZpZ3VyYXRpb25GaWxlRXhpc3RzKCk7XG5cbiAgbGV0IGpzb24gPSByZWFkUkNGaWxlKCk7XG5cbiAganNvbiA9IHVuc2VyaWFsaXNlSlNPTihqc29uKTsgLy8vXG5cbiAgY29uc3QgbWlncmF0aW9uTWFwID0ge1xuICAgICAgICAgIFtWRVJTSU9OXzFfMF06IG1pZ3JhdGVUb1ZlcnNpb24xXzEsXG4gICAgICAgICAgW1ZFUlNJT05fMV8xXTogbWlncmF0ZVRvVmVyc2lvbjFfMixcbiAgICAgICAgICBbVkVSU0lPTl8xXzJdOiBtaWdyYXRlVG9WZXJzaW9uMV8zXG4gICAgICAgIH0sXG4gICAgICAgIGxhdGVzdFZlcnNpb24gPSBWRVJTSU9OXzFfMztcblxuICBqc29uID0gbWlncmF0ZShqc29uLCBtaWdyYXRpb25NYXAsIGxhdGVzdFZlcnNpb24pO1xuXG4gIGpzb24gPSBzZXJpYWxpc2VKU09OKGpzb24pOyAvLy9cblxuICB3cml0ZVJDRmlsZShqc29uKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQ29uZmlndXJhdGlvbkZpbGVFeGlzdHMoKSB7XG4gIGNvbnN0IHJjRmlsZUV4aXN0cyA9IGNoZWNrUkNGaWxlRXhpc3RzKCksXG4gICAgICAgIGNvbmZpZ3VyYXRpb25GaWxlRXhpc3RzID0gcmNGaWxlRXhpc3RzOyAvLy9cblxuICByZXR1cm4gY29uZmlndXJhdGlvbkZpbGVFeGlzdHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRDb25maWd1cmF0aW9uRmlsZUV4aXN0cygpIHtcbiAgY29uc3QgY29uZmlndXJhdGlvbkZpbGVFeGlzdHMgPSBjaGVja0NvbmZpZ3VyYXRpb25GaWxlRXhpc3RzKCk7XG5cbiAgaWYgKCFjb25maWd1cmF0aW9uRmlsZUV4aXN0cykge1xuICAgIGNvbnNvbGUubG9nKENPTkZJR1VSQVRJT05fRklMRV9ET0VTX05PVF9FWElTVF9NRVNTQUdFKTtcblxuICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWFkQ29uZmlndXJhdGlvbkZpbGUoKSB7XG4gIGFzc2VydENvbmZpZ3VyYXRpb25GaWxlRXhpc3RzKCk7XG5cbiAgbGV0IGpzb24gPSByZWFkUkNGaWxlKCk7XG5cbiAganNvbiA9IHVuc2VyaWFsaXNlSlNPTihqc29uKTsgLy8vXG5cbiAgY29uc3QgY29uZmlndXJhdGlvbiA9IGpzb247IC8vL1xuXG4gIHJldHVybiBjb25maWd1cmF0aW9uO1xufVxuXG5mdW5jdGlvbiB3cml0ZUNvbmZpZ3VyYXRpb25GaWxlKGNvbmZpZ3VyYXRpb24pIHtcbiAgYXNzZXJ0Q29uZmlndXJhdGlvbkZpbGVFeGlzdHMoKTtcblxuICBsZXQganNvbiA9IGNvbmZpZ3VyYXRpb247IC8vL1xuXG4gIGpzb24gPSBzZXJpYWxpc2VKU09OKGpzb24pOyAvLy9cblxuICB3cml0ZVJDRmlsZShqc29uKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ29uZmlndXJhdGlvbkZpbGUoYWRkZWRDb25maWd1cmF0aW9uLCAuLi5kZWxldGVDb25maWd1cmF0aW9uTmFtZXMpIHtcbiAgYXNzZXJ0Q29uZmlndXJhdGlvbkZpbGVFeGlzdHMoKTtcblxuICBsZXQganNvbiA9IGFkZGVkQ29uZmlndXJhdGlvbjsgIC8vL1xuXG4gIGpzb24gPSBzZXJpYWxpc2VKU09OKGpzb24pOyAvLy9cblxuICBhZGRlZENvbmZpZ3VyYXRpb24gPSBqc29uOyAgLy8vXG5cbiAgY29uc3QgYWRkZWRQcm9wZXJ0aWVzID0gYWRkZWRDb25maWd1cmF0aW9uLCAvLy9cbiAgICAgICAgZGVsZXRlZFByb3BlcnR5TmFtZXMgPSBkZWxldGVDb25maWd1cmF0aW9uTmFtZXM7ICAvLy9cblxuICB1cGRhdGVSQ0ZpbGUoYWRkZWRQcm9wZXJ0aWVzLCAuLi5kZWxldGVkUHJvcGVydHlOYW1lcyk7XG59XG4iXSwibmFtZXMiOlsiYXNzZXJ0Q29uZmlndXJhdGlvbkZpbGVFeGlzdHMiLCJjaGVja0NvbmZpZ3VyYXRpb25GaWxlRXhpc3RzIiwiY3JlYXRlQ29uZmlndXJhdGlvbkZpbGUiLCJtaWdyYXRlQ29uZmlndXJhdGlvbkZpbGUiLCJyZXRyaWV2ZU9wdGlvbnMiLCJ1cGRhdGVPcHRpb25zIiwicmMiLCJjb25maWd1cmF0aW9uVXRpbGl0aWVzIiwibWlncmF0ZSIsInZlcnNpb25VdGlsaXRpZXMiLCJzZXRSQ0Jhc2VFeHRlbnNpb24iLCJjaGVja1JDRmlsZUV4aXN0cyIsInVwZGF0ZVJDRmlsZSIsIndyaXRlUkNGaWxlIiwicmVhZFJDRmlsZSIsInJjQmFzZUV4dGVuc2lvbiIsIkhJR0hNQVJLIiwib3B0aW9ucyIsInVwZGF0ZUNvbmZpZ3VyYXRpb25GaWxlIiwiY29uZmlndXJhdGlvbiIsInJlYWRDb25maWd1cmF0aW9uRmlsZSIsImNyZWF0ZUNvbmZpZ3VyYXRpb24iLCJqc29uIiwic2VyaWFsaXNlSlNPTiIsInVuc2VyaWFsaXNlSlNPTiIsIm1pZ3JhdGlvbk1hcCIsIlZFUlNJT05fMV8wIiwibWlncmF0ZVRvVmVyc2lvbjFfMSIsIlZFUlNJT05fMV8xIiwibWlncmF0ZVRvVmVyc2lvbjFfMiIsIlZFUlNJT05fMV8yIiwibWlncmF0ZVRvVmVyc2lvbjFfMyIsImxhdGVzdFZlcnNpb24iLCJWRVJTSU9OXzFfMyIsInJjRmlsZUV4aXN0cyIsImNvbmZpZ3VyYXRpb25GaWxlRXhpc3RzIiwiY29uc29sZSIsImxvZyIsIkNPTkZJR1VSQVRJT05fRklMRV9ET0VTX05PVF9FWElTVF9NRVNTQUdFIiwicHJvY2VzcyIsImV4aXQiLCJ3cml0ZUNvbmZpZ3VyYXRpb25GaWxlIiwiYWRkZWRDb25maWd1cmF0aW9uIiwiZGVsZXRlQ29uZmlndXJhdGlvbk5hbWVzIiwiYWRkZWRQcm9wZXJ0aWVzIiwiZGVsZXRlZFByb3BlcnR5TmFtZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQXVFZ0JBO2VBQUFBOztRQVBBQztlQUFBQTs7UUEvQkFDO2VBQUFBOztRQVVBQztlQUFBQTs7UUFqQkFDO2VBQUFBOztRQU5BQztlQUFBQTs7O3lCQWxCeUM7eUJBRWhDOzJCQUNXOzJCQUNBO29CQUNXOzJCQUNVO3dCQUNDO3dCQUNTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkUsSUFBTSxBQUFFQyxLQUFPQyxpQ0FBc0IsQ0FBN0JELElBQ0YsQUFBRUUsVUFBWUMsMkJBQWdCLENBQTVCRCxTQUNBRSxxQkFBaUZKLEdBQWpGSSxvQkFBb0JDLG9CQUE2REwsR0FBN0RLLG1CQUFtQkMsZUFBMENOLEdBQTFDTSxjQUFjQyxjQUE0QlAsR0FBNUJPLGFBQWFDLGFBQWVSLEdBQWZRO0FBRTFFLElBQU1DLGtCQUFrQkMsbUJBQVEsRUFBRSxHQUFHO0FBRXJDTixtQkFBbUJLO0FBRVosU0FBU1YsY0FBY1ksT0FBTztJQUNuQ0Msd0JBQXdCO1FBQ3RCRCxTQUFBQTtJQUNGO0FBQ0Y7QUFFTyxTQUFTYjtJQUNkLElBQU1lLGdCQUFnQkMseUJBQ2hCLEFBQUVILFVBQVlFLGNBQVpGO0lBRVIsT0FBT0E7QUFDVDtBQUVPLFNBQVNmO0lBQ2QsSUFBTWlCLGdCQUFnQkUsSUFBQUEsZ0NBQW1CO0lBRXpDLElBQUlDLE9BQU9ILGVBQWUsR0FBRztJQUU3QkcsT0FBT0MsSUFBQUEsbUJBQWEsRUFBQ0QsT0FBTyxHQUFHO0lBRS9CVCxZQUFZUztBQUNkO0FBRU8sU0FBU25CO0lBQ2RIO0lBRUEsSUFBSXNCLE9BQU9SO0lBRVhRLE9BQU9FLElBQUFBLHFCQUFlLEVBQUNGLE9BQU8sR0FBRztRQUVaO0lBQXJCLElBQU1HLGdCQUFlLFdBQ2IsaUJBRGEsTUFDWkMscUJBQVcsRUFBR0MsZ0NBQW1CLEdBQ2xDLGlCQUZhLE1BRVpDLHFCQUFXLEVBQUdDLGdDQUFtQixHQUNsQyxpQkFIYSxNQUdaQyxxQkFBVyxFQUFHQyxnQ0FBbUIsR0FIckIsT0FLZkMsZ0JBQWdCQyxxQkFBVztJQUVqQ1gsT0FBT2QsUUFBUWMsTUFBTUcsY0FBY087SUFFbkNWLE9BQU9DLElBQUFBLG1CQUFhLEVBQUNELE9BQU8sR0FBRztJQUUvQlQsWUFBWVM7QUFDZDtBQUVPLFNBQVNyQjtJQUNkLElBQU1pQyxlQUFldkIscUJBQ2Z3QiwwQkFBMEJELGNBQWMsR0FBRztJQUVqRCxPQUFPQztBQUNUO0FBRU8sU0FBU25DO0lBQ2QsSUFBTW1DLDBCQUEwQmxDO0lBRWhDLElBQUksQ0FBQ2tDLHlCQUF5QjtRQUM1QkMsUUFBUUMsR0FBRyxDQUFDQyxtREFBeUM7UUFFckRDLFFBQVFDLElBQUksQ0FBQztJQUNmO0FBQ0Y7QUFFQSxTQUFTcEI7SUFDUHBCO0lBRUEsSUFBSXNCLE9BQU9SO0lBRVhRLE9BQU9FLElBQUFBLHFCQUFlLEVBQUNGLE9BQU8sR0FBRztJQUVqQyxJQUFNSCxnQkFBZ0JHLE1BQU0sR0FBRztJQUUvQixPQUFPSDtBQUNUO0FBRUEsU0FBU3NCLHVCQUF1QnRCLGFBQWE7SUFDM0NuQjtJQUVBLElBQUlzQixPQUFPSCxlQUFlLEdBQUc7SUFFN0JHLE9BQU9DLElBQUFBLG1CQUFhLEVBQUNELE9BQU8sR0FBRztJQUUvQlQsWUFBWVM7QUFDZDtBQUVBLFNBQVNKLHdCQUF3QndCLGtCQUFrQjtJQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHQywyQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtRQUFHQSx5QkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQTJCOztJQUM5RTNDO0lBRUEsSUFBSXNCLE9BQU9vQixvQkFBcUIsR0FBRztJQUVuQ3BCLE9BQU9DLElBQUFBLG1CQUFhLEVBQUNELE9BQU8sR0FBRztJQUUvQm9CLHFCQUFxQnBCLE1BQU8sR0FBRztJQUUvQixJQUFNc0Isa0JBQWtCRixvQkFDbEJHLHVCQUF1QkYsMEJBQTJCLEdBQUc7SUFFM0QvQixtQkFBQUEsS0FBQUEsR0FBQUE7UUFBYWdDO0tBQXlDLENBQXREaEMsT0FBOEIscUJBQUdpQztBQUNuQyJ9