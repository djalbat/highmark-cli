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
    var _options_port = options.port, port = _options_port === void 0 ? _defaults.DEFAULT_PORT : _options_port, _options_fonts = options.fonts, fonts = _options_fonts === void 0 ? _defaults.DEFAULT_FONTS : _options_fonts, _options_watch = options.watch, watch = _options_watch === void 0 ? _defaults.DEFAULT_WATCH : _options_watch, _options_client = options.client, client = _options_client === void 0 ? _defaults.DEFAULT_CLIENT : _options_client, _options_quietly = options.quietly, quietly = _options_quietly === void 0 ? _defaults.DEFAULT_QUIETLY : _options_quietly, _options_inputFileName = options.inputFileName, inputFileName = _options_inputFileName === void 0 ? _defaults.DEFAULT_INPUT_FILE_NAME : _options_inputFileName;
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
                    (0, _publish.default)(port, fonts, watch, client, quietly, inputFileName, projectDirectoryName1);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgaGVscEFjdGlvbiBmcm9tIFwiLi9hY3Rpb24vaGVscFwiO1xuaW1wb3J0IHNlcnZlckFjdGlvbiBmcm9tIFwiLi9hY3Rpb24vc2VydmVyXCI7XG5pbXBvcnQgdmVyc2lvbkFjdGlvbiBmcm9tIFwiLi9hY3Rpb24vdmVyc2lvblwiO1xuaW1wb3J0IHB1Ymxpc2hBY3Rpb24gZnJvbSBcIi4vYWN0aW9uL3B1Ymxpc2hcIjtcbmltcG9ydCBpbml0aWFsaXNlQWN0aW9uIGZyb20gXCIuL2FjdGlvbi9pbml0aWFsaXNlXCI7XG5pbXBvcnQgc2V0T3B0aW9uc0FjdGlvbiBmcm9tIFwiLi9hY3Rpb24vc2V0T3B0aW9uc1wiO1xuXG5pbXBvcnQgeyBOT19BUkdVTUVOVF9HSVZFTl9NRVNTQUdFLCBDT01NQU5EX05PVF9SRUNPR05JU0VEX01FU1NBR0UgfSBmcm9tIFwiLi9tZXNzYWdlc1wiO1xuaW1wb3J0IHsgSEVMUF9DT01NQU5ELCBTRVJWRVJfQ09NTUFORCwgVkVSU0lPTl9DT01NQU5ELCBQVUJMSVNIX0NPTU1BTkQsIElOSVRJQUxJU0VfQ09NTUFORCwgU0VUX09QVElPTlNfQ09NTUFORCB9IGZyb20gXCIuL2NvbW1hbmRzXCI7XG5pbXBvcnQgeyBERUZBVUxUX1BPUlQsXG4gICAgICAgICBERUZBVUxUX0ZPTlRTLFxuICAgICAgICAgREVGQVVMVF9XQVRDSCxcbiAgICAgICAgIERFRkFVTFRfQ0xJRU5ULFxuICAgICAgICAgREVGQVVMVF9RVUlFVExZLFxuICAgICAgICAgREVGQVVMVF9JTlBVVF9GSUxFX05BTUUgfSBmcm9tIFwiLi9kZWZhdWx0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWluKGNvbW1hbmQsIGFyZ3VtZW50LCBvcHRpb25zKSB7XG4gIGNvbnN0IHsgcG9ydCA9IERFRkFVTFRfUE9SVCxcbiAgICAgICAgICBmb250cyA9IERFRkFVTFRfRk9OVFMsXG4gICAgICAgICAgd2F0Y2ggPSBERUZBVUxUX1dBVENILFxuICAgICAgICAgIGNsaWVudCA9IERFRkFVTFRfQ0xJRU5ULFxuICAgICAgICAgIHF1aWV0bHkgPSBERUZBVUxUX1FVSUVUTFksXG4gICAgICAgICAgaW5wdXRGaWxlTmFtZSA9IERFRkFVTFRfSU5QVVRfRklMRV9OQU1FIH0gPSBvcHRpb25zO1xuXG4gIHN3aXRjaCAoY29tbWFuZCkge1xuICAgIGNhc2UgSEVMUF9DT01NQU5EOiAge1xuICAgICAgaGVscEFjdGlvbigpO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFZFUlNJT05fQ09NTUFORDoge1xuICAgICAgdmVyc2lvbkFjdGlvbigpO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIElOSVRJQUxJU0VfQ09NTUFORDoge1xuICAgICAgaW5pdGlhbGlzZUFjdGlvbigpO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFNFUlZFUl9DT01NQU5EOiB7XG4gICAgICBpZiAoYXJndW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgY29uc29sZS5sb2coTk9fQVJHVU1FTlRfR0lWRU5fTUVTU0FHRSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwcm9qZWN0RGlyZWN0b3J5TmFtZSA9IGFyZ3VtZW50OyAgLy8vXG5cbiAgICAgICAgc2VydmVyQWN0aW9uKHBvcnQsIHdhdGNoLCBxdWlldGx5LCBwcm9qZWN0RGlyZWN0b3J5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgUFVCTElTSF9DT01NQU5EOiB7XG4gICAgICBpZiAoYXJndW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgY29uc29sZS5sb2coTk9fQVJHVU1FTlRfR0lWRU5fTUVTU0FHRSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwcm9qZWN0RGlyZWN0b3J5TmFtZSA9IGFyZ3VtZW50OyAgLy8vXG5cbiAgICAgICAgcHVibGlzaEFjdGlvbihwb3J0LCBmb250cywgd2F0Y2gsIGNsaWVudCwgcXVpZXRseSwgaW5wdXRGaWxlTmFtZSwgcHJvamVjdERpcmVjdG9yeU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFNFVF9PUFRJT05TX0NPTU1BTkQ6IHtcbiAgICAgIHNldE9wdGlvbnNBY3Rpb24oKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZGVmYXVsdDoge1xuICAgICAgY29uc29sZS5sb2coQ09NTUFORF9OT1RfUkVDT0dOSVNFRF9NRVNTQUdFKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsibWFpbiIsImNvbW1hbmQiLCJhcmd1bWVudCIsIm9wdGlvbnMiLCJwb3J0IiwiREVGQVVMVF9QT1JUIiwiZm9udHMiLCJERUZBVUxUX0ZPTlRTIiwid2F0Y2giLCJERUZBVUxUX1dBVENIIiwiY2xpZW50IiwiREVGQVVMVF9DTElFTlQiLCJxdWlldGx5IiwiREVGQVVMVF9RVUlFVExZIiwiaW5wdXRGaWxlTmFtZSIsIkRFRkFVTFRfSU5QVVRfRklMRV9OQU1FIiwiSEVMUF9DT01NQU5EIiwiaGVscEFjdGlvbiIsIlZFUlNJT05fQ09NTUFORCIsInZlcnNpb25BY3Rpb24iLCJJTklUSUFMSVNFX0NPTU1BTkQiLCJpbml0aWFsaXNlQWN0aW9uIiwiU0VSVkVSX0NPTU1BTkQiLCJjb25zb2xlIiwibG9nIiwiTk9fQVJHVU1FTlRfR0lWRU5fTUVTU0FHRSIsInByb2plY3REaXJlY3RvcnlOYW1lIiwic2VydmVyQWN0aW9uIiwiUFVCTElTSF9DT01NQU5EIiwicHVibGlzaEFjdGlvbiIsIlNFVF9PUFRJT05TX0NPTU1BTkQiLCJzZXRPcHRpb25zQWN0aW9uIiwiQ09NTUFORF9OT1RfUkVDT0dOSVNFRF9NRVNTQUdFIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFrQkE7OztlQUF3QkE7OzsyREFoQkQ7NkRBQ0U7OERBQ0M7OERBQ0E7aUVBQ0c7aUVBQ0E7d0JBRTZDO3dCQUM4Qzt3QkFNaEY7Ozs7OztBQUV6QixTQUFTQSxLQUFLQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsT0FBTztJQUNyRCxvQkFLb0RBLFFBTDVDQyxNQUFBQSxrQ0FBT0Msc0JBQVksbUNBS3lCRixRQUo1Q0csT0FBQUEsb0NBQVFDLHVCQUFhLG9DQUl1QkosUUFINUNLLE9BQUFBLG9DQUFRQyx1QkFBYSxxQ0FHdUJOLFFBRjVDTyxRQUFBQSxzQ0FBU0Msd0JBQWMsdUNBRXFCUixRQUQ1Q1MsU0FBQUEsd0NBQVVDLHlCQUFlLDhDQUNtQlYsUUFBNUNXLGVBQUFBLG9EQUFnQkMsaUNBQXVCO0lBRS9DLE9BQVFkO1FBQ04sS0FBS2Usc0JBQVk7WUFBRztnQkFDbEJDLElBQUFBLGFBQVU7Z0JBRVY7WUFDRjtRQUVBLEtBQUtDLHlCQUFlO1lBQUU7Z0JBQ3BCQyxJQUFBQSxnQkFBYTtnQkFFYjtZQUNGO1FBRUEsS0FBS0MsNEJBQWtCO1lBQUU7Z0JBQ3ZCQyxJQUFBQSxtQkFBZ0I7Z0JBRWhCO1lBQ0Y7UUFFQSxLQUFLQyx3QkFBYztZQUFFO2dCQUNuQixJQUFJcEIsYUFBYSxNQUFNO29CQUNyQnFCLFFBQVFDLEdBQUcsQ0FBQ0MsbUNBQXlCO2dCQUN2QyxPQUFPO29CQUNMLElBQU1DLHVCQUF1QnhCLFVBQVcsR0FBRztvQkFFM0N5QixJQUFBQSxlQUFZLEVBQUN2QixNQUFNSSxPQUFPSSxTQUFTYztnQkFDckM7Z0JBRUE7WUFDRjtRQUVBLEtBQUtFLHlCQUFlO1lBQUU7Z0JBQ3BCLElBQUkxQixhQUFhLE1BQU07b0JBQ3JCcUIsUUFBUUMsR0FBRyxDQUFDQyxtQ0FBeUI7Z0JBQ3ZDLE9BQU87b0JBQ0wsSUFBTUMsd0JBQXVCeEIsVUFBVyxHQUFHO29CQUUzQzJCLElBQUFBLGdCQUFhLEVBQUN6QixNQUFNRSxPQUFPRSxPQUFPRSxRQUFRRSxTQUFTRSxlQUFlWTtnQkFDcEU7Z0JBRUE7WUFDRjtRQUVBLEtBQUtJLDZCQUFtQjtZQUFFO2dCQUN4QkMsSUFBQUEsbUJBQWdCO2dCQUVoQjtZQUNGO1FBRUE7WUFBUztnQkFDUFIsUUFBUUMsR0FBRyxDQUFDUSx3Q0FBOEI7Z0JBRTFDO1lBQ0Y7SUFDRjtBQUNGIn0=