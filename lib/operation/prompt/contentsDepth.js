"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return contentsDepthPromptOperation;
    }
});
var _necessary = require("necessary");
var _validate = require("../../utilities/validate");
var _descriptions = require("../../descriptions");
var _messages = require("../../messages");
var prompt = _necessary.shellUtilities.prompt;
function contentsDepthPromptOperation(proceed, abort, context) {
    var contentsDepth = context.contentsDepth, description = _descriptions.CONTENTS_DEPTH_DESCRIPTION, errorMessage = _messages.INVALID_CONTENTS_DEPTH_MESSAGE, initialAnswer = "".concat(contentsDepth), validationFunction = _validate.validateContentsDepth, options = {
        description: description,
        errorMessage: errorMessage,
        initialAnswer: initialAnswer,
        validationFunction: validationFunction
    };
    prompt(options, function(answer) {
        var contentsDepth = answer; ///
        var valid = contentsDepth !== null;
        if (valid) {
            contentsDepth = Number(contentsDepth);
            Object.assign(context, {
                contentsDepth: contentsDepth
            });
            proceed();
            return;
        }
        abort();
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vcHJvbXB0L2NvbnRlbnRzRGVwdGguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNoZWxsVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyB2YWxpZGF0ZUNvbnRlbnRzRGVwdGggfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3ZhbGlkYXRlXCI7XG5pbXBvcnQgeyBDT05URU5UU19ERVBUSF9ERVNDUklQVElPTiB9IGZyb20gXCIuLi8uLi9kZXNjcmlwdGlvbnNcIjtcbmltcG9ydCB7IElOVkFMSURfQ09OVEVOVFNfREVQVEhfTUVTU0FHRSB9IGZyb20gXCIuLi8uLi9tZXNzYWdlc1wiO1xuXG5jb25zdCB7IHByb21wdCB9ID0gc2hlbGxVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRlbnRzRGVwdGhQcm9tcHRPcGVyYXRpb24ocHJvY2VlZCwgYWJvcnQsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBjb250ZW50c0RlcHRoIH0gPSBjb250ZXh0LFxuICAgICAgICBkZXNjcmlwdGlvbiA9IENPTlRFTlRTX0RFUFRIX0RFU0NSSVBUSU9OLFxuICAgICAgICBlcnJvck1lc3NhZ2UgPSBJTlZBTElEX0NPTlRFTlRTX0RFUFRIX01FU1NBR0UsXG4gICAgICAgIGluaXRpYWxBbnN3ZXIgPSBgJHtjb250ZW50c0RlcHRofWAsXG4gICAgICAgIHZhbGlkYXRpb25GdW5jdGlvbiA9IHZhbGlkYXRlQ29udGVudHNEZXB0aCwgIC8vL1xuICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgICAgICBpbml0aWFsQW5zd2VyLFxuICAgICAgICAgIHZhbGlkYXRpb25GdW5jdGlvblxuICAgICAgICB9O1xuXG4gIHByb21wdChvcHRpb25zLCAoYW5zd2VyKSA9PiB7XG4gICAgbGV0IGNvbnRlbnRzRGVwdGggPSBhbnN3ZXI7ICAvLy9cblxuICAgIGNvbnN0IHZhbGlkID0gKGNvbnRlbnRzRGVwdGggIT09IG51bGwpO1xuXG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICBjb250ZW50c0RlcHRoID0gTnVtYmVyKGNvbnRlbnRzRGVwdGgpO1xuXG4gICAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgY29udGVudHNEZXB0aFxuICAgICAgfSk7XG5cbiAgICAgIHByb2NlZWQoKTtcbiAgICAgIFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGFib3J0KCk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImNvbnRlbnRzRGVwdGhQcm9tcHRPcGVyYXRpb24iLCJwcm9tcHQiLCJzaGVsbFV0aWxpdGllcyIsInByb2NlZWQiLCJhYm9ydCIsImNvbnRleHQiLCJjb250ZW50c0RlcHRoIiwiZGVzY3JpcHRpb24iLCJDT05URU5UU19ERVBUSF9ERVNDUklQVElPTiIsImVycm9yTWVzc2FnZSIsIklOVkFMSURfQ09OVEVOVFNfREVQVEhfTUVTU0FHRSIsImluaXRpYWxBbnN3ZXIiLCJ2YWxpZGF0aW9uRnVuY3Rpb24iLCJ2YWxpZGF0ZUNvbnRlbnRzRGVwdGgiLCJvcHRpb25zIiwiYW5zd2VyIiwidmFsaWQiLCJOdW1iZXIiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBd0JBOzs7eUJBUk87d0JBRU87NEJBQ0s7d0JBQ0k7QUFFL0MsSUFBTSxBQUFFQyxTQUFXQyx5QkFBYyxDQUF6QkQ7QUFFTyxTQUFTRCw2QkFBNkJHLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxPQUFPO0lBQzFFLElBQU0sQUFBRUMsZ0JBQWtCRCxRQUFsQkMsZUFDRkMsY0FBY0Msd0NBQTBCLEVBQ3hDQyxlQUFlQyx3Q0FBOEIsRUFDN0NDLGdCQUFnQixBQUFDLEdBQWdCLE9BQWRMLGdCQUNuQk0scUJBQXFCQywrQkFBcUIsRUFDMUNDLFVBQVU7UUFDUlAsYUFBQUE7UUFDQUUsY0FBQUE7UUFDQUUsZUFBQUE7UUFDQUMsb0JBQUFBO0lBQ0Y7SUFFTlgsT0FBT2EsU0FBUyxTQUFDQztRQUNmLElBQUlULGdCQUFnQlMsUUFBUyxHQUFHO1FBRWhDLElBQU1DLFFBQVNWLGtCQUFrQjtRQUVqQyxJQUFJVSxPQUFPO1lBQ1RWLGdCQUFnQlcsT0FBT1g7WUFFdkJZLE9BQU9DLE1BQU0sQ0FBQ2QsU0FBUztnQkFDckJDLGVBQUFBO1lBQ0Y7WUFFQUg7WUFFQTtRQUNGO1FBRUFDO0lBQ0Y7QUFDRiJ9