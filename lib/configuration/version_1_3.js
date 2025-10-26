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
    get createConfiguration () {
        return createConfiguration;
    },
    get migrateToVersion1_3 () {
        return migrateToVersion1_3;
    }
});
var _versions = require("../versions");
var _defaults = require("../defaults");
function createConfiguration() {
    var version = _versions.VERSION_1_3, linesPerPage = _defaults.DEFAULT_LINES_PER_PAGE, contentsDepth = _defaults.DEFAULT_CONTENTS_DEPTH, charactersPerLine = _defaults.DEFAULT_CHARACTERS_PER_LINE, options = {
        linesPerPage: linesPerPage,
        contentsDepth: contentsDepth,
        charactersPerLine: charactersPerLine
    }, configuration = {
        version: version,
        options: options
    };
    return configuration;
}
function migrateToVersion1_3(json) {
    var linesPerPage = json.linesPerPage, contentsDepth = json.contentsDepth, charactersPerLine = json.charactersPerLine, version = _versions.VERSION_1_3, options = {
        linesPerPage: linesPerPage,
        contentsDepth: contentsDepth,
        charactersPerLine: charactersPerLine
    };
    delete json.linesPerPage;
    delete json.contentsDepth;
    delete json.charactersPerLine;
    json = Object.assign({}, json, {
        version: version,
        options: options
    });
    return json;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWd1cmF0aW9uL3ZlcnNpb25fMV8zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBWRVJTSU9OXzFfMyB9IGZyb20gXCIuLi92ZXJzaW9uc1wiO1xuXG5pbXBvcnQgeyBERUZBVUxUX0NPTlRFTlRTX0RFUFRILCBERUZBVUxUX0xJTkVTX1BFUl9QQUdFLCBERUZBVUxUX0NIQVJBQ1RFUlNfUEVSX0xJTkUgfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbmZpZ3VyYXRpb24oKSB7XG4gIGNvbnN0IHZlcnNpb24gPSBWRVJTSU9OXzFfMyxcbiAgICAgICAgbGluZXNQZXJQYWdlID0gREVGQVVMVF9MSU5FU19QRVJfUEFHRSxcbiAgICAgICAgY29udGVudHNEZXB0aCA9IERFRkFVTFRfQ09OVEVOVFNfREVQVEgsXG4gICAgICAgIGNoYXJhY3RlcnNQZXJMaW5lID0gREVGQVVMVF9DSEFSQUNURVJTX1BFUl9MSU5FLFxuICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgIGxpbmVzUGVyUGFnZSxcbiAgICAgICAgICBjb250ZW50c0RlcHRoLFxuICAgICAgICAgIGNoYXJhY3RlcnNQZXJMaW5lXG4gICAgICAgIH0sXG4gICAgICAgIGNvbmZpZ3VyYXRpb24gPSB7XG4gICAgICAgICAgdmVyc2lvbixcbiAgICAgICAgICBvcHRpb25zXG4gICAgICAgIH07XG5cbiAgcmV0dXJuIGNvbmZpZ3VyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaWdyYXRlVG9WZXJzaW9uMV8zKGpzb24pIHtcbiAgY29uc3QgeyBsaW5lc1BlclBhZ2UsXG4gICAgICAgICAgY29udGVudHNEZXB0aCxcbiAgICAgICAgICBjaGFyYWN0ZXJzUGVyTGluZSB9ID0ganNvbixcbiAgICAgICAgdmVyc2lvbiA9IFZFUlNJT05fMV8zLFxuICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgIGxpbmVzUGVyUGFnZSxcbiAgICAgICAgICBjb250ZW50c0RlcHRoLFxuICAgICAgICAgIGNoYXJhY3RlcnNQZXJMaW5lXG4gICAgICAgIH07XG5cbiAgZGVsZXRlIGpzb24ubGluZXNQZXJQYWdlO1xuICBkZWxldGUganNvbi5jb250ZW50c0RlcHRoO1xuICBkZWxldGUganNvbi5jaGFyYWN0ZXJzUGVyTGluZTtcblxuICBqc29uID0gT2JqZWN0LmFzc2lnbih7fSwganNvbiwge1xuICAgIHZlcnNpb24sXG4gICAgb3B0aW9uc1xuICB9KTtcblxuICByZXR1cm4ganNvbjtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVDb25maWd1cmF0aW9uIiwibWlncmF0ZVRvVmVyc2lvbjFfMyIsInZlcnNpb24iLCJWRVJTSU9OXzFfMyIsImxpbmVzUGVyUGFnZSIsIkRFRkFVTFRfTElORVNfUEVSX1BBR0UiLCJjb250ZW50c0RlcHRoIiwiREVGQVVMVF9DT05URU5UU19ERVBUSCIsImNoYXJhY3RlcnNQZXJMaW5lIiwiREVGQVVMVF9DSEFSQUNURVJTX1BFUl9MSU5FIiwib3B0aW9ucyIsImNvbmZpZ3VyYXRpb24iLCJqc29uIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFNZ0JBO2VBQUFBOztRQWtCQUM7ZUFBQUE7Ozt3QkF0Qlk7d0JBRWdFO0FBRXJGLFNBQVNEO0lBQ2QsSUFBTUUsVUFBVUMscUJBQVcsRUFDckJDLGVBQWVDLGdDQUFzQixFQUNyQ0MsZ0JBQWdCQyxnQ0FBc0IsRUFDdENDLG9CQUFvQkMscUNBQTJCLEVBQy9DQyxVQUFVO1FBQ1JOLGNBQUFBO1FBQ0FFLGVBQUFBO1FBQ0FFLG1CQUFBQTtJQUNGLEdBQ0FHLGdCQUFnQjtRQUNkVCxTQUFBQTtRQUNBUSxTQUFBQTtJQUNGO0lBRU4sT0FBT0M7QUFDVDtBQUVPLFNBQVNWLG9CQUFvQlcsSUFBSTtJQUN0QyxJQUFRUixlQUVzQlEsS0FGdEJSLGNBQ0FFLGdCQUNzQk0sS0FEdEJOLGVBQ0FFLG9CQUFzQkksS0FBdEJKLG1CQUNGTixVQUFVQyxxQkFBVyxFQUNyQk8sVUFBVTtRQUNSTixjQUFBQTtRQUNBRSxlQUFBQTtRQUNBRSxtQkFBQUE7SUFDRjtJQUVOLE9BQU9JLEtBQUtSLFlBQVk7SUFDeEIsT0FBT1EsS0FBS04sYUFBYTtJQUN6QixPQUFPTSxLQUFLSixpQkFBaUI7SUFFN0JJLE9BQU9DLE9BQU9DLE1BQU0sQ0FBQyxDQUFDLEdBQUdGLE1BQU07UUFDN0JWLFNBQUFBO1FBQ0FRLFNBQUFBO0lBQ0Y7SUFFQSxPQUFPRTtBQUNUIn0=