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
    get nodeFromTokens () {
        return nodeFromTokens;
    },
    get tokensFromContent () {
        return tokensFromContent;
    }
});
var _highmarkmarkdown = require("highmark-markdown");
var _messages = require("../messages");
var markdownLexer = _highmarkmarkdown.MarkdownLexer.fromNothing(), markdownParser = _highmarkmarkdown.MarkdownParser.fromNothing();
function tokensFromContent(content) {
    var tokens = markdownLexer.tokenise(content);
    return tokens;
}
function nodeFromTokens(tokens) {
    var startRuleName = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    var ruleMap = markdownParser.getRuleMap(), startRule = startRuleName !== null ? ruleMap[startRuleName] : markdownParser.getStartRule(), startOfContent = true, node = markdownParser.parse(tokens, startRule, startOfContent);
    if (node === null) {
        var message = _messages.UNABLE_TO_PARSE_MARKDOWN_FILE_MESSAGE;
        console.log(message);
    }
    return node;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbWFya2Rvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE1hcmtkb3duTGV4ZXIsIE1hcmtkb3duUGFyc2VyIH0gZnJvbSBcImhpZ2htYXJrLW1hcmtkb3duXCI7XG5cbmltcG9ydCB7IFVOQUJMRV9UT19QQVJTRV9NQVJLRE9XTl9GSUxFX01FU1NBR0UgfSBmcm9tIFwiLi4vbWVzc2FnZXNcIjtcblxuY29uc3QgbWFya2Rvd25MZXhlciA9IE1hcmtkb3duTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIG1hcmtkb3duUGFyc2VyID0gTWFya2Rvd25QYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRva2Vuc0Zyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgY29uc3QgdG9rZW5zID0gbWFya2Rvd25MZXhlci50b2tlbmlzZShjb250ZW50KTtcblxuICByZXR1cm4gdG9rZW5zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZUZyb21Ub2tlbnModG9rZW5zLCBzdGFydFJ1bGVOYW1lID0gbnVsbCkge1xuICBjb25zdCBydWxlTWFwID0gbWFya2Rvd25QYXJzZXIuZ2V0UnVsZU1hcCgpLFxuICAgICAgICBzdGFydFJ1bGUgPSAoc3RhcnRSdWxlTmFtZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgIHJ1bGVNYXBbc3RhcnRSdWxlTmFtZV0gOlxuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2Rvd25QYXJzZXIuZ2V0U3RhcnRSdWxlKCksXG4gICAgICAgIHN0YXJ0T2ZDb250ZW50ID0gdHJ1ZSxcbiAgICAgICAgbm9kZSA9IG1hcmtkb3duUGFyc2VyLnBhcnNlKHRva2Vucywgc3RhcnRSdWxlLCBzdGFydE9mQ29udGVudCk7XG5cbiAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gVU5BQkxFX1RPX1BBUlNFX01BUktET1dOX0ZJTEVfTUVTU0FHRTtcblxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICB9XG5cbiAgcmV0dXJuIG5vZGU7XG59XG4iXSwibmFtZXMiOlsibm9kZUZyb21Ub2tlbnMiLCJ0b2tlbnNGcm9tQ29udGVudCIsIm1hcmtkb3duTGV4ZXIiLCJNYXJrZG93bkxleGVyIiwiZnJvbU5vdGhpbmciLCJtYXJrZG93blBhcnNlciIsIk1hcmtkb3duUGFyc2VyIiwiY29udGVudCIsInRva2VucyIsInRva2VuaXNlIiwic3RhcnRSdWxlTmFtZSIsInJ1bGVNYXAiLCJnZXRSdWxlTWFwIiwic3RhcnRSdWxlIiwiZ2V0U3RhcnRSdWxlIiwic3RhcnRPZkNvbnRlbnQiLCJub2RlIiwicGFyc2UiLCJtZXNzYWdlIiwiVU5BQkxFX1RPX1BBUlNFX01BUktET1dOX0ZJTEVfTUVTU0FHRSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQWVnQkE7ZUFBQUE7O1FBTkFDO2VBQUFBOzs7Z0NBUDhCO3dCQUVRO0FBRXRELElBQU1DLGdCQUFnQkMsK0JBQWEsQ0FBQ0MsV0FBVyxJQUN6Q0MsaUJBQWlCQyxnQ0FBYyxDQUFDRixXQUFXO0FBRTFDLFNBQVNILGtCQUFrQk0sT0FBTztJQUN2QyxJQUFNQyxTQUFTTixjQUFjTyxRQUFRLENBQUNGO0lBRXRDLE9BQU9DO0FBQ1Q7QUFFTyxTQUFTUixlQUFlUSxNQUFNO1FBQUVFLGdCQUFBQSxpRUFBZ0I7SUFDckQsSUFBTUMsVUFBVU4sZUFBZU8sVUFBVSxJQUNuQ0MsWUFBWSxBQUFDSCxrQkFBa0IsT0FDakJDLE9BQU8sQ0FBQ0QsY0FBYyxHQUNwQkwsZUFBZVMsWUFBWSxJQUMzQ0MsaUJBQWlCLE1BQ2pCQyxPQUFPWCxlQUFlWSxLQUFLLENBQUNULFFBQVFLLFdBQVdFO0lBRXJELElBQUlDLFNBQVMsTUFBTTtRQUNqQixJQUFNRSxVQUFVQywrQ0FBcUM7UUFFckRDLFFBQVFDLEdBQUcsQ0FBQ0g7SUFDZDtJQUVBLE9BQU9GO0FBQ1QifQ==