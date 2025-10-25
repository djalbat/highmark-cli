"use strict";
import { pathUtilities } from "necessary";
import defaultIndexOptions from "../defaultIndexOptions";
import { readFile, writeFile } from "../utilities/fileSystem";
import { DOUBLE_SPACE, INDEX_JSON_FILE_NAME } from "../constants";
var concatenatePaths = pathUtilities.concatenatePaths;
export default function indexOptionsOperation(proceed, abort, context) {
    var projectDirectoryName = context.projectDirectoryName;
    var content, indexOptions;
    var indexJSONFilePath = concatenatePaths(projectDirectoryName, INDEX_JSON_FILE_NAME), filePath = indexJSONFilePath;
    content = readFile(filePath);
    if (content === null) {
        indexOptions = defaultIndexOptions; ///
    } else {
        var json, jsonString;
        jsonString = content; ///
        json = JSON.parse(jsonString);
        var _json_phrases = json.phrases, phrases = _json_phrases === void 0 ? [] : _json_phrases, _json_plurals = json.plurals, plurals = _json_plurals === void 0 ? [] : _json_plurals, _json_acronyms = json.acronyms, acronyms = _json_acronyms === void 0 ? [] : _json_acronyms, _json_properNouns = json.properNouns, properNouns = _json_properNouns === void 0 ? [] : _json_properNouns, _json_ignoredWords = json.ignoredWords, ignoredWords = _json_ignoredWords === void 0 ? [] : _json_ignoredWords;
        phrases.sort();
        plurals.sort();
        acronyms.sort();
        properNouns.sort();
        ignoredWords.sort();
        json = {
            phrases: phrases,
            plurals: plurals,
            acronyms: acronyms,
            properNouns: properNouns,
            ignoredWords: ignoredWords
        };
        jsonString = JSON.stringify(json, null, DOUBLE_SPACE);
        content = jsonString; ///
        writeFile(indexJSONFilePath, content);
        indexOptions = json; ///
    }
    Object.assign(context, {
        indexOptions: indexOptions
    });
    proceed();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vaW5kZXhPcHRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZGVmYXVsdEluZGV4T3B0aW9ucyBmcm9tIFwiLi4vZGVmYXVsdEluZGV4T3B0aW9uc1wiO1xuXG5pbXBvcnQgeyByZWFkRmlsZSwgd3JpdGVGaWxlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9maWxlU3lzdGVtXCI7XG5pbXBvcnQgeyBET1VCTEVfU1BBQ0UsIElOREVYX0pTT05fRklMRV9OQU1FIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IGNvbmNhdGVuYXRlUGF0aHMgfSA9IHBhdGhVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluZGV4T3B0aW9uc09wZXJhdGlvbihwcm9jZWVkLCBhYm9ydCwgY29udGV4dCkge1xuICBjb25zdCB7IHByb2plY3REaXJlY3RvcnlOYW1lIH0gPSBjb250ZXh0O1xuXG4gIGxldCBjb250ZW50LFxuICAgICAgaW5kZXhPcHRpb25zO1xuXG4gIGNvbnN0IGluZGV4SlNPTkZpbGVQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0RGlyZWN0b3J5TmFtZSwgSU5ERVhfSlNPTl9GSUxFX05BTUUpLFxuICAgICAgICBmaWxlUGF0aCA9IGluZGV4SlNPTkZpbGVQYXRoO1xuXG4gIGNvbnRlbnQgPSByZWFkRmlsZShmaWxlUGF0aCk7XG5cbiAgaWYgKGNvbnRlbnQgPT09IG51bGwpIHtcbiAgICBpbmRleE9wdGlvbnMgPSBkZWZhdWx0SW5kZXhPcHRpb25zOyAvLy9cbiAgfSBlbHNlIHtcbiAgICBsZXQganNvbixcbiAgICAgICAganNvblN0cmluZztcblxuICAgIGpzb25TdHJpbmcgPSBjb250ZW50OyAgLy8vXG5cbiAgICBqc29uID0gSlNPTi5wYXJzZShqc29uU3RyaW5nKTtcblxuICAgIGNvbnN0IHsgcGhyYXNlcyA9IFtdLFxuICAgICAgICAgICAgcGx1cmFscyA9IFtdLFxuICAgICAgICAgICAgYWNyb255bXMgPSBbXSxcbiAgICAgICAgICAgIHByb3Blck5vdW5zID0gW10sXG4gICAgICAgICAgICBpZ25vcmVkV29yZHMgPSBbXSB9ID0ganNvbjtcblxuICAgIHBocmFzZXMuc29ydCgpO1xuICAgIHBsdXJhbHMuc29ydCgpO1xuICAgIGFjcm9ueW1zLnNvcnQoKTtcbiAgICBwcm9wZXJOb3Vucy5zb3J0KCk7XG4gICAgaWdub3JlZFdvcmRzLnNvcnQoKTtcblxuICAgIGpzb24gPSB7XG4gICAgICBwaHJhc2VzLFxuICAgICAgcGx1cmFscyxcbiAgICAgIGFjcm9ueW1zLFxuICAgICAgcHJvcGVyTm91bnMsXG4gICAgICBpZ25vcmVkV29yZHNcbiAgICB9O1xuXG4gICAganNvblN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGpzb24sIG51bGwsIERPVUJMRV9TUEFDRSk7XG5cbiAgICBjb250ZW50ID0ganNvblN0cmluZzsgIC8vL1xuXG4gICAgd3JpdGVGaWxlKGluZGV4SlNPTkZpbGVQYXRoLCBjb250ZW50KTtcblxuICAgIGluZGV4T3B0aW9ucyA9IGpzb247ICAvLy9cbiAgfVxuXG4gIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgIGluZGV4T3B0aW9uc1xuICB9KTtcblxuICBwcm9jZWVkKCk7XG59XG4iXSwibmFtZXMiOlsicGF0aFV0aWxpdGllcyIsImRlZmF1bHRJbmRleE9wdGlvbnMiLCJyZWFkRmlsZSIsIndyaXRlRmlsZSIsIkRPVUJMRV9TUEFDRSIsIklOREVYX0pTT05fRklMRV9OQU1FIiwiY29uY2F0ZW5hdGVQYXRocyIsImluZGV4T3B0aW9uc09wZXJhdGlvbiIsInByb2NlZWQiLCJhYm9ydCIsImNvbnRleHQiLCJwcm9qZWN0RGlyZWN0b3J5TmFtZSIsImNvbnRlbnQiLCJpbmRleE9wdGlvbnMiLCJpbmRleEpTT05GaWxlUGF0aCIsImZpbGVQYXRoIiwianNvbiIsImpzb25TdHJpbmciLCJKU09OIiwicGFyc2UiLCJwaHJhc2VzIiwicGx1cmFscyIsImFjcm9ueW1zIiwicHJvcGVyTm91bnMiLCJpZ25vcmVkV29yZHMiLCJzb3J0Iiwic3RyaW5naWZ5IiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUVBLFNBQVNBLGFBQWEsUUFBUSxZQUFZO0FBRTFDLE9BQU9DLHlCQUF5Qix5QkFBeUI7QUFFekQsU0FBU0MsUUFBUSxFQUFFQyxTQUFTLFFBQVEsMEJBQTBCO0FBQzlELFNBQVNDLFlBQVksRUFBRUMsb0JBQW9CLFFBQVEsZUFBZTtBQUVsRSxJQUFNLEFBQUVDLG1CQUFxQk4sY0FBckJNO0FBRVIsZUFBZSxTQUFTQyxzQkFBc0JDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxPQUFPO0lBQ25FLElBQU0sQUFBRUMsdUJBQXlCRCxRQUF6QkM7SUFFUixJQUFJQyxTQUNBQztJQUVKLElBQU1DLG9CQUFvQlIsaUJBQWlCSyxzQkFBc0JOLHVCQUMzRFUsV0FBV0Q7SUFFakJGLFVBQVVWLFNBQVNhO0lBRW5CLElBQUlILFlBQVksTUFBTTtRQUNwQkMsZUFBZVoscUJBQXFCLEdBQUc7SUFDekMsT0FBTztRQUNMLElBQUllLE1BQ0FDO1FBRUpBLGFBQWFMLFNBQVUsR0FBRztRQUUxQkksT0FBT0UsS0FBS0MsS0FBSyxDQUFDRjtRQUVsQixvQkFJOEJELEtBSnRCSSxTQUFBQSxxQ0FBVSxFQUFFLGtDQUlVSixLQUh0QkssU0FBQUEscUNBQVUsRUFBRSxtQ0FHVUwsS0FGdEJNLFVBQUFBLHVDQUFXLEVBQUUsdUNBRVNOLEtBRHRCTyxhQUFBQSw2Q0FBYyxFQUFFLDJDQUNNUCxLQUF0QlEsY0FBQUEsK0NBQWUsRUFBRTtRQUV6QkosUUFBUUssSUFBSTtRQUNaSixRQUFRSSxJQUFJO1FBQ1pILFNBQVNHLElBQUk7UUFDYkYsWUFBWUUsSUFBSTtRQUNoQkQsYUFBYUMsSUFBSTtRQUVqQlQsT0FBTztZQUNMSSxTQUFBQTtZQUNBQyxTQUFBQTtZQUNBQyxVQUFBQTtZQUNBQyxhQUFBQTtZQUNBQyxjQUFBQTtRQUNGO1FBRUFQLGFBQWFDLEtBQUtRLFNBQVMsQ0FBQ1YsTUFBTSxNQUFNWjtRQUV4Q1EsVUFBVUssWUFBYSxHQUFHO1FBRTFCZCxVQUFVVyxtQkFBbUJGO1FBRTdCQyxlQUFlRyxNQUFPLEdBQUc7SUFDM0I7SUFFQVcsT0FBT0MsTUFBTSxDQUFDbEIsU0FBUztRQUNyQkcsY0FBQUE7SUFDRjtJQUVBTDtBQUNGIn0=