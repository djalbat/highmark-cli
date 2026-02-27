"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return setOptionsOperation;
    }
});
const _configuration = require("../configuration");
function setOptionsOperation(proceed, abort, context) {
    const { linesPerPage, contentsDepth, charactersPerLine } = context, options = {
        linesPerPage,
        contentsDepth,
        charactersPerLine
    };
    (0, _configuration.updateOptions)(options);
    proceed();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcGVyYXRpb24vc2V0T3B0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgdXBkYXRlT3B0aW9ucyB9IGZyb20gXCIuLi9jb25maWd1cmF0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldE9wdGlvbnNPcGVyYXRpb24ocHJvY2VlZCwgYWJvcnQsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBsaW5lc1BlclBhZ2UsIGNvbnRlbnRzRGVwdGgsIGNoYXJhY3RlcnNQZXJMaW5lIH0gPSBjb250ZXh0LFxuICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgIGxpbmVzUGVyUGFnZSxcbiAgICAgICAgICBjb250ZW50c0RlcHRoLFxuICAgICAgICAgIGNoYXJhY3RlcnNQZXJMaW5lXG4gICAgICAgIH07XG5cbiAgdXBkYXRlT3B0aW9ucyhvcHRpb25zKTtcblxuICBwcm9jZWVkKCk7XG59XG4iXSwibmFtZXMiOlsic2V0T3B0aW9uc09wZXJhdGlvbiIsInByb2NlZWQiLCJhYm9ydCIsImNvbnRleHQiLCJsaW5lc1BlclBhZ2UiLCJjb250ZW50c0RlcHRoIiwiY2hhcmFjdGVyc1BlckxpbmUiLCJvcHRpb25zIiwidXBkYXRlT3B0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUF3QkE7OzsrQkFGTTtBQUVmLFNBQVNBLG9CQUFvQkMsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLE9BQU87SUFDakUsTUFBTSxFQUFFQyxZQUFZLEVBQUVDLGFBQWEsRUFBRUMsaUJBQWlCLEVBQUUsR0FBR0gsU0FDckRJLFVBQVU7UUFDUkg7UUFDQUM7UUFDQUM7SUFDRjtJQUVORSxJQUFBQSw0QkFBYSxFQUFDRDtJQUVkTjtBQUNGIn0=