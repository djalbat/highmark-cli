"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "migrateToVersion1_2", {
    enumerable: true,
    get: function() {
        return migrateToVersion1_2;
    }
});
var _versions = require("../versions");
var _defaults = require("../defaults");
function migrateToVersion1_2(json) {
    var version = _versions.VERSION_1_2, linesPerPage = _defaults.DEFAULT_LINES_PER_PAGE, charactersPerLine = _defaults.DEFAULT_CHARACTERS_PER_LINE;
    json = Object.assign({}, json, {
        version: version,
        linesPerPage: linesPerPage,
        charactersPerLine: charactersPerLine
    });
    return json;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWd1cmF0aW9uL3ZlcnNpb25fMV8yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBWRVJTSU9OXzFfMiB9IGZyb20gXCIuLi92ZXJzaW9uc1wiO1xuXG5pbXBvcnQgeyBERUZBVUxUX0xJTkVTX1BFUl9QQUdFLCBERUZBVUxUX0NIQVJBQ1RFUlNfUEVSX0xJTkUgfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1pZ3JhdGVUb1ZlcnNpb24xXzIoanNvbikge1xuICBjb25zdCB2ZXJzaW9uID0gVkVSU0lPTl8xXzIsXG4gICAgICAgIGxpbmVzUGVyUGFnZSA9IERFRkFVTFRfTElORVNfUEVSX1BBR0UsXG4gICAgICAgIGNoYXJhY3RlcnNQZXJMaW5lID0gREVGQVVMVF9DSEFSQUNURVJTX1BFUl9MSU5FO1xuXG4gIGpzb24gPSBPYmplY3QuYXNzaWduKHt9LCBqc29uLCB7XG4gICAgdmVyc2lvbixcbiAgICBsaW5lc1BlclBhZ2UsXG4gICAgY2hhcmFjdGVyc1BlckxpbmVcbiAgfSk7XG5cbiAgcmV0dXJuIGpzb247XG59XG4iXSwibmFtZXMiOlsibWlncmF0ZVRvVmVyc2lvbjFfMiIsImpzb24iLCJ2ZXJzaW9uIiwiVkVSU0lPTl8xXzIiLCJsaW5lc1BlclBhZ2UiLCJERUZBVUxUX0xJTkVTX1BFUl9QQUdFIiwiY2hhcmFjdGVyc1BlckxpbmUiLCJERUZBVUxUX0NIQVJBQ1RFUlNfUEVSX0xJTkUiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1nQkE7OztlQUFBQTs7O3dCQUpZO3dCQUV3QztBQUU3RCxTQUFTQSxvQkFBb0JDLElBQUk7SUFDdEMsSUFBTUMsVUFBVUMscUJBQVcsRUFDckJDLGVBQWVDLGdDQUFzQixFQUNyQ0Msb0JBQW9CQyxxQ0FBMkI7SUFFckROLE9BQU9PLE9BQU9DLE1BQU0sQ0FBQyxDQUFDLEdBQUdSLE1BQU07UUFDN0JDLFNBQUFBO1FBQ0FFLGNBQUFBO1FBQ0FFLG1CQUFBQTtJQUNGO0lBRUEsT0FBT0w7QUFDVCJ9