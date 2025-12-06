"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return main;
    }
});
var _help = /*#__PURE__*/ _interop_require_default(require("./action/help"));
var _server = /*#__PURE__*/ _interop_require_default(require("./action/server"));
var _version = /*#__PURE__*/ _interop_require_default(require("./action/version"));
var _publish = /*#__PURE__*/ _interop_require_default(require("./action/publish"));
var _initialise = /*#__PURE__*/ _interop_require_default(require("./action/initialise"));
var _setOptions = /*#__PURE__*/ _interop_require_default(require("./action/setOptions"));
var _messages = require("./messages");
var _commands = require("./commands");
var _defaults = require("./defaults");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function main(command, argument, options) {
    var _options_port = options.port, port = _options_port === void 0 ? _defaults.DEFAULT_PORT : _options_port, _options_fonts = options.fonts, fonts = _options_fonts === void 0 ? _defaults.DEFAULT_FONTS : _options_fonts, _options_watch = options.watch, watch = _options_watch === void 0 ? _defaults.DEFAULT_WATCH : _options_watch, _options_client = options.client, client = _options_client === void 0 ? _defaults.DEFAULT_CLIENT : _options_client, _options_quietly = options.quietly, quietly = _options_quietly === void 0 ? _defaults.DEFAULT_QUIETLY : _options_quietly, _options_viewMode = options.viewMode, viewMode = _options_viewMode === void 0 ? _defaults.DEFAULT_VIEW_MODE : _options_viewMode, _options_inputFileName = options.inputFileName, inputFileName = _options_inputFileName === void 0 ? _defaults.DEFAULT_INPUT_FILE_NAME : _options_inputFileName;
    switch(command){
        case _commands.HELP_COMMAND:
            {
                (0, _help.default)();
                break;
            }
        case _commands.VERSION_COMMAND:
            {
                (0, _version.default)();
                break;
            }
        case _commands.INITIALISE_COMMAND:
            {
                (0, _initialise.default)();
                break;
            }
        case _commands.SERVER_COMMAND:
            {
                if (argument === null) {
                    console.log(_messages.NO_ARGUMENT_GIVEN_MESSAGE);
                } else {
                    var projectDirectoryName = argument; ///
                    (0, _server.default)(port, watch, quietly, projectDirectoryName);
                }
                break;
            }
        case _commands.PUBLISH_COMMAND:
            {
                if (argument === null) {
                    console.log(_messages.NO_ARGUMENT_GIVEN_MESSAGE);
                } else {
                    var projectDirectoryName1 = argument; ///
                    (0, _publish.default)(port, fonts, watch, client, quietly, viewMode, inputFileName, projectDirectoryName1);
                }
                break;
            }
        case _commands.SET_OPTIONS_COMMAND:
            {
                (0, _setOptions.default)();
                break;
            }
        default:
            {
                console.log(_messages.COMMAND_NOT_RECOGNISED_MESSAGE);
                break;
            }
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgaGVscEFjdGlvbiBmcm9tIFwiLi9hY3Rpb24vaGVscFwiO1xuaW1wb3J0IHNlcnZlckFjdGlvbiBmcm9tIFwiLi9hY3Rpb24vc2VydmVyXCI7XG5pbXBvcnQgdmVyc2lvbkFjdGlvbiBmcm9tIFwiLi9hY3Rpb24vdmVyc2lvblwiO1xuaW1wb3J0IHB1Ymxpc2hBY3Rpb24gZnJvbSBcIi4vYWN0aW9uL3B1Ymxpc2hcIjtcbmltcG9ydCBpbml0aWFsaXNlQWN0aW9uIGZyb20gXCIuL2FjdGlvbi9pbml0aWFsaXNlXCI7XG5pbXBvcnQgc2V0T3B0aW9uc0FjdGlvbiBmcm9tIFwiLi9hY3Rpb24vc2V0T3B0aW9uc1wiO1xuXG5pbXBvcnQgeyBOT19BUkdVTUVOVF9HSVZFTl9NRVNTQUdFLCBDT01NQU5EX05PVF9SRUNPR05JU0VEX01FU1NBR0UgfSBmcm9tIFwiLi9tZXNzYWdlc1wiO1xuaW1wb3J0IHsgSEVMUF9DT01NQU5ELCBTRVJWRVJfQ09NTUFORCwgVkVSU0lPTl9DT01NQU5ELCBQVUJMSVNIX0NPTU1BTkQsIElOSVRJQUxJU0VfQ09NTUFORCwgU0VUX09QVElPTlNfQ09NTUFORCB9IGZyb20gXCIuL2NvbW1hbmRzXCI7XG5pbXBvcnQgeyBERUZBVUxUX1BPUlQsXG4gICAgICAgICBERUZBVUxUX0ZPTlRTLFxuICAgICAgICAgREVGQVVMVF9XQVRDSCxcbiAgICAgICAgIERFRkFVTFRfQ0xJRU5ULFxuICAgICAgICAgREVGQVVMVF9RVUlFVExZLFxuICAgICAgICAgREVGQVVMVF9WSUVXX01PREUsXG4gICAgICAgICBERUZBVUxUX0lOUFVUX0ZJTEVfTkFNRSB9IGZyb20gXCIuL2RlZmF1bHRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1haW4oY29tbWFuZCwgYXJndW1lbnQsIG9wdGlvbnMpIHtcbiAgY29uc3QgeyBwb3J0ID0gREVGQVVMVF9QT1JULFxuICAgICAgICAgIGZvbnRzID0gREVGQVVMVF9GT05UUyxcbiAgICAgICAgICB3YXRjaCA9IERFRkFVTFRfV0FUQ0gsXG4gICAgICAgICAgY2xpZW50ID0gREVGQVVMVF9DTElFTlQsXG4gICAgICAgICAgcXVpZXRseSA9IERFRkFVTFRfUVVJRVRMWSxcbiAgICAgICAgICB2aWV3TW9kZSA9IERFRkFVTFRfVklFV19NT0RFLFxuICAgICAgICAgIGlucHV0RmlsZU5hbWUgPSBERUZBVUxUX0lOUFVUX0ZJTEVfTkFNRSB9ID0gb3B0aW9ucztcblxuICBzd2l0Y2ggKGNvbW1hbmQpIHtcbiAgICBjYXNlIEhFTFBfQ09NTUFORDogIHtcbiAgICAgIGhlbHBBY3Rpb24oKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBWRVJTSU9OX0NPTU1BTkQ6IHtcbiAgICAgIHZlcnNpb25BY3Rpb24oKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBJTklUSUFMSVNFX0NPTU1BTkQ6IHtcbiAgICAgIGluaXRpYWxpc2VBY3Rpb24oKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBTRVJWRVJfQ09NTUFORDoge1xuICAgICAgaWYgKGFyZ3VtZW50ID09PSBudWxsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKE5PX0FSR1VNRU5UX0dJVkVOX01FU1NBR0UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcHJvamVjdERpcmVjdG9yeU5hbWUgPSBhcmd1bWVudDsgIC8vL1xuXG4gICAgICAgIHNlcnZlckFjdGlvbihwb3J0LCB3YXRjaCwgcXVpZXRseSwgcHJvamVjdERpcmVjdG9yeU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFBVQkxJU0hfQ09NTUFORDoge1xuICAgICAgaWYgKGFyZ3VtZW50ID09PSBudWxsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKE5PX0FSR1VNRU5UX0dJVkVOX01FU1NBR0UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcHJvamVjdERpcmVjdG9yeU5hbWUgPSBhcmd1bWVudDsgIC8vL1xuXG4gICAgICAgIHB1Ymxpc2hBY3Rpb24ocG9ydCwgZm9udHMsIHdhdGNoLCBjbGllbnQsIHF1aWV0bHksIHZpZXdNb2RlLCBpbnB1dEZpbGVOYW1lLCBwcm9qZWN0RGlyZWN0b3J5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgU0VUX09QVElPTlNfQ09NTUFORDoge1xuICAgICAgc2V0T3B0aW9uc0FjdGlvbigpO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICBjb25zb2xlLmxvZyhDT01NQU5EX05PVF9SRUNPR05JU0VEX01FU1NBR0UpO1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJtYWluIiwiY29tbWFuZCIsImFyZ3VtZW50Iiwib3B0aW9ucyIsInBvcnQiLCJERUZBVUxUX1BPUlQiLCJmb250cyIsIkRFRkFVTFRfRk9OVFMiLCJ3YXRjaCIsIkRFRkFVTFRfV0FUQ0giLCJjbGllbnQiLCJERUZBVUxUX0NMSUVOVCIsInF1aWV0bHkiLCJERUZBVUxUX1FVSUVUTFkiLCJ2aWV3TW9kZSIsIkRFRkFVTFRfVklFV19NT0RFIiwiaW5wdXRGaWxlTmFtZSIsIkRFRkFVTFRfSU5QVVRfRklMRV9OQU1FIiwiSEVMUF9DT01NQU5EIiwiaGVscEFjdGlvbiIsIlZFUlNJT05fQ09NTUFORCIsInZlcnNpb25BY3Rpb24iLCJJTklUSUFMSVNFX0NPTU1BTkQiLCJpbml0aWFsaXNlQWN0aW9uIiwiU0VSVkVSX0NPTU1BTkQiLCJjb25zb2xlIiwibG9nIiwiTk9fQVJHVU1FTlRfR0lWRU5fTUVTU0FHRSIsInByb2plY3REaXJlY3RvcnlOYW1lIiwic2VydmVyQWN0aW9uIiwiUFVCTElTSF9DT01NQU5EIiwicHVibGlzaEFjdGlvbiIsIlNFVF9PUFRJT05TX0NPTU1BTkQiLCJzZXRPcHRpb25zQWN0aW9uIiwiQ09NTUFORF9OT1RfUkVDT0dOSVNFRF9NRVNTQUdFIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFtQkE7OztlQUF3QkE7OzsyREFqQkQ7NkRBQ0U7OERBQ0M7OERBQ0E7aUVBQ0c7aUVBQ0E7d0JBRTZDO3dCQUM4Qzt3QkFPaEY7Ozs7OztBQUV6QixTQUFTQSxLQUFLQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsT0FBTztJQUNyRCxvQkFNb0RBLFFBTjVDQyxNQUFBQSxrQ0FBT0Msc0JBQVksbUNBTXlCRixRQUw1Q0csT0FBQUEsb0NBQVFDLHVCQUFhLG9DQUt1QkosUUFKNUNLLE9BQUFBLG9DQUFRQyx1QkFBYSxxQ0FJdUJOLFFBSDVDTyxRQUFBQSxzQ0FBU0Msd0JBQWMsdUNBR3FCUixRQUY1Q1MsU0FBQUEsd0NBQVVDLHlCQUFlLHlDQUVtQlYsUUFENUNXLFVBQUFBLDBDQUFXQywyQkFBaUIsK0NBQ2dCWixRQUE1Q2EsZUFBQUEsb0RBQWdCQyxpQ0FBdUI7SUFFL0MsT0FBUWhCO1FBQ04sS0FBS2lCLHNCQUFZO1lBQUc7Z0JBQ2xCQyxJQUFBQSxhQUFVO2dCQUVWO1lBQ0Y7UUFFQSxLQUFLQyx5QkFBZTtZQUFFO2dCQUNwQkMsSUFBQUEsZ0JBQWE7Z0JBRWI7WUFDRjtRQUVBLEtBQUtDLDRCQUFrQjtZQUFFO2dCQUN2QkMsSUFBQUEsbUJBQWdCO2dCQUVoQjtZQUNGO1FBRUEsS0FBS0Msd0JBQWM7WUFBRTtnQkFDbkIsSUFBSXRCLGFBQWEsTUFBTTtvQkFDckJ1QixRQUFRQyxHQUFHLENBQUNDLG1DQUF5QjtnQkFDdkMsT0FBTztvQkFDTCxJQUFNQyx1QkFBdUIxQixVQUFXLEdBQUc7b0JBRTNDMkIsSUFBQUEsZUFBWSxFQUFDekIsTUFBTUksT0FBT0ksU0FBU2dCO2dCQUNyQztnQkFFQTtZQUNGO1FBRUEsS0FBS0UseUJBQWU7WUFBRTtnQkFDcEIsSUFBSTVCLGFBQWEsTUFBTTtvQkFDckJ1QixRQUFRQyxHQUFHLENBQUNDLG1DQUF5QjtnQkFDdkMsT0FBTztvQkFDTCxJQUFNQyx3QkFBdUIxQixVQUFXLEdBQUc7b0JBRTNDNkIsSUFBQUEsZ0JBQWEsRUFBQzNCLE1BQU1FLE9BQU9FLE9BQU9FLFFBQVFFLFNBQVNFLFVBQVVFLGVBQWVZO2dCQUM5RTtnQkFFQTtZQUNGO1FBRUEsS0FBS0ksNkJBQW1CO1lBQUU7Z0JBQ3hCQyxJQUFBQSxtQkFBZ0I7Z0JBRWhCO1lBQ0Y7UUFFQTtZQUFTO2dCQUNQUixRQUFRQyxHQUFHLENBQUNRLHdDQUE4QjtnQkFFMUM7WUFDRjtJQUNGO0FBQ0YifQ==