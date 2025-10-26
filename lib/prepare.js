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
    var _options_server = options.server, server = _options_server === void 0 ? _defaults.DEFAULT_SERVER : _options_server;
    if (server) {
        command = _commands.SERVER_COMMAND;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmVwYXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgY2hhbmdlRGlyZWN0b3J5IGZyb20gXCIuL2NoYW5nZURpcmVjdG9yeVwiO1xuXG5pbXBvcnQgeyBERUZBVUxUX0hFTFAsIERFRkFVTFRfVkVSU0lPTiwgREVGQVVMVF9TRVJWRVIgfSBmcm9tIFwiLi9kZWZhdWx0c1wiO1xuaW1wb3J0IHsgSEVMUF9DT01NQU5ELFxuICAgICAgICAgU0VSVkVSX0NPTU1BTkQsXG4gICAgICAgICBWRVJTSU9OX0NPTU1BTkQsXG4gICAgICAgICBQVUJMSVNIX0NPTU1BTkQsXG4gICAgICAgICBJTklUSUFMSVNFX0NPTU1BTkQsXG4gICAgICAgICBTRVRfT1BUSU9OU19DT01NQU5EIH0gZnJvbSBcIi4vY29tbWFuZHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZShjb21tYW5kLCBhcmd1bWVudCwgb3B0aW9ucywgbWFpbikge1xuICBjb25zdCB7IGhlbHAgPSBERUZBVUxUX0hFTFAsIHZlcnNpb24gPSBERUZBVUxUX1ZFUlNJT04gfSA9IG9wdGlvbnM7XG5cbiAgaWYgKGZhbHNlKSB7XG4gICAgLy8vXG4gIH0gZWxzZSBpZiAoaGVscCkge1xuICAgIGNvbW1hbmQgPSBIRUxQX0NPTU1BTkQ7XG4gIH0gZWxzZSBpZiAodmVyc2lvbikge1xuICAgIGNvbW1hbmQgPSBWRVJTSU9OX0NPTU1BTkQ7XG4gIH1cblxuICBpZiAoKGNvbW1hbmQgPT09IEhFTFBfQ09NTUFORCkgfHxcbiAgICAgIChjb21tYW5kID09PSBWRVJTSU9OX0NPTU1BTkQpIHx8XG4gICAgICAoY29tbWFuZCA9PT0gSU5JVElBTElTRV9DT01NQU5EKSkge1xuXG4gICAgbWFpbihjb21tYW5kLCBhcmd1bWVudCwgb3B0aW9ucyk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB7IHNlcnZlciA9IERFRkFVTFRfU0VSVkVSIH0gPSBvcHRpb25zO1xuXG4gIGlmIChzZXJ2ZXIpIHtcbiAgICBjb21tYW5kID0gU0VSVkVSX0NPTU1BTkQ7XG4gIH1cblxuICBjb25zdCBkaXJlY3RvcnlOYW1lID0gY2hhbmdlRGlyZWN0b3J5KCk7XG5cbiAgaWYgKGRpcmVjdG9yeU5hbWUgIT09IG51bGwpIHtcbiAgICBhcmd1bWVudCA9IGRpcmVjdG9yeU5hbWU7IC8vL1xuICB9XG5cbiAgaWYgKGFyZ3VtZW50ID09PSBudWxsKSB7XG4gICAgaWYgKGNvbW1hbmQgIT09IFNFVF9PUFRJT05TX0NPTU1BTkQpIHtcbiAgICAgIGFyZ3VtZW50ID0gY29tbWFuZDsgLy8vXG5cbiAgICAgIGNvbW1hbmQgPSBQVUJMSVNIX0NPTU1BTkQ7XG4gICAgfVxuICB9XG5cbiAgaWYgKGNvbW1hbmQgPT09IG51bGwpIHtcbiAgICBjb21tYW5kID0gUFVCTElTSF9DT01NQU5EO1xuICB9XG5cbiAgbWFpbihjb21tYW5kLCBhcmd1bWVudCwgb3B0aW9ucyk7XG59XG4iXSwibmFtZXMiOlsicHJlcGFyZSIsImNvbW1hbmQiLCJhcmd1bWVudCIsIm9wdGlvbnMiLCJtYWluIiwiaGVscCIsIkRFRkFVTFRfSEVMUCIsInZlcnNpb24iLCJERUZBVUxUX1ZFUlNJT04iLCJIRUxQX0NPTU1BTkQiLCJWRVJTSU9OX0NPTU1BTkQiLCJJTklUSUFMSVNFX0NPTU1BTkQiLCJzZXJ2ZXIiLCJERUZBVUxUX1NFUlZFUiIsIlNFUlZFUl9DT01NQU5EIiwiZGlyZWN0b3J5TmFtZSIsImNoYW5nZURpcmVjdG9yeSIsIlNFVF9PUFRJT05TX0NPTU1BTkQiLCJQVUJMSVNIX0NPTU1BTkQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBd0JBOzs7c0VBVkk7d0JBRWtDO3dCQU0xQjs7Ozs7O0FBRXJCLFNBQVNBLFFBQVFDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxPQUFPLEVBQUVDLElBQUk7SUFDOUQsb0JBQTJERCxRQUFuREUsTUFBQUEsa0NBQU9DLHNCQUFZLHFDQUFnQ0gsUUFBOUJJLFNBQUFBLHdDQUFVQyx5QkFBZTtJQUV0RCxJQUFJLE9BQU87SUFDVCxHQUFHO0lBQ0wsT0FBTyxJQUFJSCxNQUFNO1FBQ2ZKLFVBQVVRLHNCQUFZO0lBQ3hCLE9BQU8sSUFBSUYsU0FBUztRQUNsQk4sVUFBVVMseUJBQWU7SUFDM0I7SUFFQSxJQUFJLEFBQUNULFlBQVlRLHNCQUFZLElBQ3hCUixZQUFZUyx5QkFBZSxJQUMzQlQsWUFBWVUsNEJBQWtCLEVBQUc7UUFFcENQLEtBQUtILFNBQVNDLFVBQVVDO1FBRXhCO0lBQ0Y7SUFFQSxzQkFBb0NBLFFBQTVCUyxRQUFBQSxzQ0FBU0Msd0JBQWM7SUFFL0IsSUFBSUQsUUFBUTtRQUNWWCxVQUFVYSx3QkFBYztJQUMxQjtJQUVBLElBQU1DLGdCQUFnQkMsSUFBQUEsd0JBQWU7SUFFckMsSUFBSUQsa0JBQWtCLE1BQU07UUFDMUJiLFdBQVdhLGVBQWUsR0FBRztJQUMvQjtJQUVBLElBQUliLGFBQWEsTUFBTTtRQUNyQixJQUFJRCxZQUFZZ0IsNkJBQW1CLEVBQUU7WUFDbkNmLFdBQVdELFNBQVMsR0FBRztZQUV2QkEsVUFBVWlCLHlCQUFlO1FBQzNCO0lBQ0Y7SUFFQSxJQUFJakIsWUFBWSxNQUFNO1FBQ3BCQSxVQUFVaUIseUJBQWU7SUFDM0I7SUFFQWQsS0FBS0gsU0FBU0MsVUFBVUM7QUFDMUIifQ==