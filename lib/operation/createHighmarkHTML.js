"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return createHighmarkHTMLOperation;
    }
});
var _necessary = require("necessary");
var _highmarkmarkdown = require("highmark-markdown");
var _importer = /*#__PURE__*/ _interop_require_default(require("../importer"));
var _fileSystem = require("../utilities/fileSystem");
var _configuration = require("../configuration");
var _messages = require("../messages");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var concatenatePaths = _necessary.pathUtilities.concatenatePaths, htmlFromMarkdownOptionsAndImporter = _highmarkmarkdown.grammarUtilities.htmlFromMarkdownOptionsAndImporter;
function createHighmarkHTMLOperation(proceed, abort, context) {
    var indexOptions = context.indexOptions, inputFileName = context.inputFileName, projectDirectoryName = context.projectDirectoryName, inputFilePath = concatenatePaths(projectDirectoryName, inputFileName), filePath = inputFilePath, content = (0, _fileSystem.readFile)(filePath), markdown = content, options = (0, _configuration.retrieveOptions)(); ///
    Object.assign(options, _object_spread_props(_object_spread({}, indexOptions), {
        projectDirectoryName: projectDirectoryName
    }));
    var html = htmlFromMarkdownOptionsAndImporter(markdown, options, _importer.default);
    if (html === null) {
        var message = _messages.UNABLE_TO_CONVERT_MARKDOWN_TO_HTML_MESSAGE;
        console.log(message);
        abort();
        return;
    }
    var highmarkHTML = html; ///
    Object.assign(context, {
        highmarkHTML: highmarkHTML
    });
    proceed();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vY3JlYXRlSGlnaG1hcmtIVE1MLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgZ3JhbW1hclV0aWxpdGllcyB9IGZyb20gXCJoaWdobWFyay1tYXJrZG93blwiO1xuXG5pbXBvcnQgaW1wb3J0ZXIgZnJvbSBcIi4uL2ltcG9ydGVyXCI7XG5cbmltcG9ydCB7IHJlYWRGaWxlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9maWxlU3lzdGVtXCI7XG5pbXBvcnQgeyByZXRyaWV2ZU9wdGlvbnMgfSBmcm9tIFwiLi4vY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgVU5BQkxFX1RPX0NPTlZFUlRfTUFSS0RPV05fVE9fSFRNTF9NRVNTQUdFIH0gZnJvbSBcIi4uL21lc3NhZ2VzXCI7XG5cbmNvbnN0IHsgY29uY2F0ZW5hdGVQYXRocyB9ID0gcGF0aFV0aWxpdGllcyxcbiAgICAgIHsgaHRtbEZyb21NYXJrZG93bk9wdGlvbnNBbmRJbXBvcnRlciB9ID0gZ3JhbW1hclV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSGlnaG1hcmtIVE1MT3BlcmF0aW9uKHByb2NlZWQsIGFib3J0LCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgaW5kZXhPcHRpb25zLCBpbnB1dEZpbGVOYW1lLCBwcm9qZWN0RGlyZWN0b3J5TmFtZSB9ID0gY29udGV4dCxcbiAgICAgICAgaW5wdXRGaWxlUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdERpcmVjdG9yeU5hbWUsIGlucHV0RmlsZU5hbWUpLFxuICAgICAgICBmaWxlUGF0aCA9IGlucHV0RmlsZVBhdGgsIC8vL1xuICAgICAgICBjb250ZW50ID0gcmVhZEZpbGUoZmlsZVBhdGgpLFxuICAgICAgICBtYXJrZG93biA9IGNvbnRlbnQsXG4gICAgICAgIG9wdGlvbnMgPSByZXRyaWV2ZU9wdGlvbnMoKTsgLy8vXG5cbiAgT2JqZWN0LmFzc2lnbihvcHRpb25zLCB7XG4gICAgLi4uaW5kZXhPcHRpb25zLFxuICAgIHByb2plY3REaXJlY3RvcnlOYW1lXG4gIH0pO1xuXG4gIGNvbnN0IGh0bWwgPSBodG1sRnJvbU1hcmtkb3duT3B0aW9uc0FuZEltcG9ydGVyKG1hcmtkb3duLCBvcHRpb25zLCBpbXBvcnRlcik7XG5cbiAgaWYgKGh0bWwgPT09IG51bGwpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gVU5BQkxFX1RPX0NPTlZFUlRfTUFSS0RPV05fVE9fSFRNTF9NRVNTQUdFO1xuXG4gICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG5cbiAgICBhYm9ydCgpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgaGlnaG1hcmtIVE1MID0gaHRtbDsgIC8vL1xuXG4gIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgIGhpZ2htYXJrSFRNTFxuICB9KTtcblxuICBwcm9jZWVkKCk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlSGlnaG1hcmtIVE1MT3BlcmF0aW9uIiwiY29uY2F0ZW5hdGVQYXRocyIsInBhdGhVdGlsaXRpZXMiLCJodG1sRnJvbU1hcmtkb3duT3B0aW9uc0FuZEltcG9ydGVyIiwiZ3JhbW1hclV0aWxpdGllcyIsInByb2NlZWQiLCJhYm9ydCIsImNvbnRleHQiLCJpbmRleE9wdGlvbnMiLCJpbnB1dEZpbGVOYW1lIiwicHJvamVjdERpcmVjdG9yeU5hbWUiLCJpbnB1dEZpbGVQYXRoIiwiZmlsZVBhdGgiLCJjb250ZW50IiwicmVhZEZpbGUiLCJtYXJrZG93biIsIm9wdGlvbnMiLCJyZXRyaWV2ZU9wdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJodG1sIiwiaW1wb3J0ZXIiLCJtZXNzYWdlIiwiVU5BQkxFX1RPX0NPTlZFUlRfTUFSS0RPV05fVE9fSFRNTF9NRVNTQUdFIiwiY29uc29sZSIsImxvZyIsImhpZ2htYXJrSFRNTCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7OztlQUF3QkE7Ozt5QkFaTTtnQ0FDRzsrREFFWjswQkFFSTs2QkFDTzt3QkFDMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0QsSUFBTSxBQUFFQyxtQkFBcUJDLHdCQUFhLENBQWxDRCxrQkFDRixBQUFFRSxxQ0FBdUNDLGtDQUFnQixDQUF2REQ7QUFFTyxTQUFTSCw0QkFBNEJLLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxPQUFPO0lBQ3pFLElBQVFDLGVBQXNERCxRQUF0REMsY0FBY0MsZ0JBQXdDRixRQUF4Q0UsZUFBZUMsdUJBQXlCSCxRQUF6Qkcsc0JBQy9CQyxnQkFBZ0JWLGlCQUFpQlMsc0JBQXNCRCxnQkFDdkRHLFdBQVdELGVBQ1hFLFVBQVVDLElBQUFBLG9CQUFRLEVBQUNGLFdBQ25CRyxXQUFXRixTQUNYRyxVQUFVQyxJQUFBQSw4QkFBZSxLQUFJLEdBQUc7SUFFdENDLE9BQU9DLE1BQU0sQ0FBQ0gsU0FBUyx3Q0FDbEJSO1FBQ0hFLHNCQUFBQTs7SUFHRixJQUFNVSxPQUFPakIsbUNBQW1DWSxVQUFVQyxTQUFTSyxpQkFBUTtJQUUzRSxJQUFJRCxTQUFTLE1BQU07UUFDakIsSUFBTUUsVUFBVUMsb0RBQTBDO1FBRTFEQyxRQUFRQyxHQUFHLENBQUNIO1FBRVpoQjtRQUVBO0lBQ0Y7SUFFQSxJQUFNb0IsZUFBZU4sTUFBTyxHQUFHO0lBRS9CRixPQUFPQyxNQUFNLENBQUNaLFNBQVM7UUFDckJtQixjQUFBQTtJQUNGO0lBRUFyQjtBQUNGIn0=