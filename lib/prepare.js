"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return prepare;
    }
});
var _changeDirectory = /*#__PURE__*/ _interop_require_default(require("./changeDirectory"));
var _defaults = require("./defaults");
var _commands = require("./commands");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function prepare(command, argument, options, main) {
    var _options_help = options.help, help = _options_help === void 0 ? _defaults.DEFAULT_HELP : _options_help, _options_version = options.version, version = _options_version === void 0 ? _defaults.DEFAULT_VERSION : _options_version;
    if (false) {
    ///
    } else if (help) {
        command = _commands.HELP_COMMAND;
    } else if (version) {
        command = _commands.VERSION_COMMAND;
    }
    if (command === _commands.HELP_COMMAND || command === _commands.VERSION_COMMAND || command === _commands.INITIALISE_COMMAND) {
        main(command, argument, options);
        return;
    }
    var directoryName = (0, _changeDirectory.default)();
    if (directoryName !== null) {
        argument = directoryName; ///
    }
    if (argument === null) {
        if (command !== _commands.SET_OPTIONS_COMMAND) {
            argument = command; ///
            command = _commands.PUBLISH_COMMAND;
        }
    }
    if (command === null) {
        command = _commands.PUBLISH_COMMAND;
    }
    main(command, argument, options);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmVwYXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgY2hhbmdlRGlyZWN0b3J5IGZyb20gXCIuL2NoYW5nZURpcmVjdG9yeVwiO1xuXG5pbXBvcnQgeyBERUZBVUxUX0hFTFAsIERFRkFVTFRfVkVSU0lPTiB9IGZyb20gXCIuL2RlZmF1bHRzXCI7XG5pbXBvcnQgeyBIRUxQX0NPTU1BTkQsXG4gICAgICAgICBWRVJTSU9OX0NPTU1BTkQsXG4gICAgICAgICBQVUJMSVNIX0NPTU1BTkQsXG4gICAgICAgICBJTklUSUFMSVNFX0NPTU1BTkQsXG4gICAgICAgICBTRVRfT1BUSU9OU19DT01NQU5EIH0gZnJvbSBcIi4vY29tbWFuZHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZShjb21tYW5kLCBhcmd1bWVudCwgb3B0aW9ucywgbWFpbikge1xuICBjb25zdCB7IGhlbHAgPSBERUZBVUxUX0hFTFAsIHZlcnNpb24gPSBERUZBVUxUX1ZFUlNJT04gfSA9IG9wdGlvbnM7XG5cbiAgaWYgKGZhbHNlKSB7XG4gICAgLy8vXG4gIH0gZWxzZSBpZiAoaGVscCkge1xuICAgIGNvbW1hbmQgPSBIRUxQX0NPTU1BTkQ7XG4gIH0gZWxzZSBpZiAodmVyc2lvbikge1xuICAgIGNvbW1hbmQgPSBWRVJTSU9OX0NPTU1BTkQ7XG4gIH1cblxuICBpZiAoKGNvbW1hbmQgPT09IEhFTFBfQ09NTUFORCkgfHxcbiAgICAgIChjb21tYW5kID09PSBWRVJTSU9OX0NPTU1BTkQpIHx8XG4gICAgICAoY29tbWFuZCA9PT0gSU5JVElBTElTRV9DT01NQU5EKSkge1xuXG4gICAgbWFpbihjb21tYW5kLCBhcmd1bWVudCwgb3B0aW9ucyk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBkaXJlY3RvcnlOYW1lID0gY2hhbmdlRGlyZWN0b3J5KCk7XG5cbiAgaWYgKGRpcmVjdG9yeU5hbWUgIT09IG51bGwpIHtcbiAgICBhcmd1bWVudCA9IGRpcmVjdG9yeU5hbWU7IC8vL1xuICB9XG5cbiAgaWYgKGFyZ3VtZW50ID09PSBudWxsKSB7XG4gICAgaWYgKGNvbW1hbmQgIT09IFNFVF9PUFRJT05TX0NPTU1BTkQpIHtcbiAgICAgIGFyZ3VtZW50ID0gY29tbWFuZDsgLy8vXG5cbiAgICAgIGNvbW1hbmQgPSBQVUJMSVNIX0NPTU1BTkQ7XG4gICAgfVxuICB9XG5cbiAgaWYgKGNvbW1hbmQgPT09IG51bGwpIHtcbiAgICBjb21tYW5kID0gUFVCTElTSF9DT01NQU5EO1xuICB9XG5cbiAgbWFpbihjb21tYW5kLCBhcmd1bWVudCwgb3B0aW9ucyk7XG59XG4iXSwibmFtZXMiOlsicHJlcGFyZSIsImNvbW1hbmQiLCJhcmd1bWVudCIsIm9wdGlvbnMiLCJtYWluIiwiaGVscCIsIkRFRkFVTFRfSEVMUCIsInZlcnNpb24iLCJERUZBVUxUX1ZFUlNJT04iLCJIRUxQX0NPTU1BTkQiLCJWRVJTSU9OX0NPTU1BTkQiLCJJTklUSUFMSVNFX0NPTU1BTkQiLCJkaXJlY3RvcnlOYW1lIiwiY2hhbmdlRGlyZWN0b3J5IiwiU0VUX09QVElPTlNfQ09NTUFORCIsIlBVQkxJU0hfQ09NTUFORCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUF3QkE7OztzRUFUSTt3QkFFa0I7d0JBS1Y7Ozs7OztBQUVyQixTQUFTQSxRQUFRQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsT0FBTyxFQUFFQyxJQUFJO0lBQzlELG9CQUEyREQsUUFBbkRFLE1BQUFBLGtDQUFPQyxzQkFBWSxxQ0FBZ0NILFFBQTlCSSxTQUFBQSx3Q0FBVUMseUJBQWU7SUFFdEQsSUFBSSxPQUFPO0lBQ1QsR0FBRztJQUNMLE9BQU8sSUFBSUgsTUFBTTtRQUNmSixVQUFVUSxzQkFBWTtJQUN4QixPQUFPLElBQUlGLFNBQVM7UUFDbEJOLFVBQVVTLHlCQUFlO0lBQzNCO0lBRUEsSUFBSSxBQUFDVCxZQUFZUSxzQkFBWSxJQUN4QlIsWUFBWVMseUJBQWUsSUFDM0JULFlBQVlVLDRCQUFrQixFQUFHO1FBRXBDUCxLQUFLSCxTQUFTQyxVQUFVQztRQUV4QjtJQUNGO0lBRUEsSUFBTVMsZ0JBQWdCQyxJQUFBQSx3QkFBZTtJQUVyQyxJQUFJRCxrQkFBa0IsTUFBTTtRQUMxQlYsV0FBV1UsZUFBZSxHQUFHO0lBQy9CO0lBRUEsSUFBSVYsYUFBYSxNQUFNO1FBQ3JCLElBQUlELFlBQVlhLDZCQUFtQixFQUFFO1lBQ25DWixXQUFXRCxTQUFTLEdBQUc7WUFFdkJBLFVBQVVjLHlCQUFlO1FBQzNCO0lBQ0Y7SUFFQSxJQUFJZCxZQUFZLE1BQU07UUFDcEJBLFVBQVVjLHlCQUFlO0lBQzNCO0lBRUFYLEtBQUtILFNBQVNDLFVBQVVDO0FBQzFCIn0=