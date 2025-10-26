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
    var charactersPerLine = context.charactersPerLine, description = _descriptions.CHARACTERS_PER_LINE_DESCRIPTION, errorMessage = _messages.INVALID_CHARACTERS_PER_LINE_MESSAGE, initialAnswer = "".concat(charactersPerLine), validationFunction = _validate.validateCharactersPerLine, options = {
        description: description,
        errorMessage: errorMessage,
        initialAnswer: initialAnswer,
        validationFunction: validationFunction
    };
    prompt(options, function(answer) {
        var charactersPerLine = answer; ///
        var valid = charactersPerLine !== null;
        if (valid) {
            charactersPerLine = Number(charactersPerLine);
            Object.assign(context, {
                charactersPerLine: charactersPerLine
            });
            proceed();
            return;
        }
        abort();
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vcHJvbXB0L2NoYXJhY3RlcnNQZXJMaW5lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzaGVsbFV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgdmFsaWRhdGVDaGFyYWN0ZXJzUGVyTGluZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdmFsaWRhdGVcIjtcbmltcG9ydCB7IENIQVJBQ1RFUlNfUEVSX0xJTkVfREVTQ1JJUFRJT04gfSBmcm9tIFwiLi4vLi4vZGVzY3JpcHRpb25zXCI7XG5pbXBvcnQgeyBJTlZBTElEX0NIQVJBQ1RFUlNfUEVSX0xJTkVfTUVTU0FHRSB9IGZyb20gXCIuLi8uLi9tZXNzYWdlc1wiO1xuXG5jb25zdCB7IHByb21wdCB9ID0gc2hlbGxVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRlbnRzRGVwdGhQcm9tcHRPcGVyYXRpb24ocHJvY2VlZCwgYWJvcnQsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBjaGFyYWN0ZXJzUGVyTGluZSB9ID0gY29udGV4dCxcbiAgICAgICAgZGVzY3JpcHRpb24gPSBDSEFSQUNURVJTX1BFUl9MSU5FX0RFU0NSSVBUSU9OLFxuICAgICAgICBlcnJvck1lc3NhZ2UgPSBJTlZBTElEX0NIQVJBQ1RFUlNfUEVSX0xJTkVfTUVTU0FHRSxcbiAgICAgICAgaW5pdGlhbEFuc3dlciA9IGAke2NoYXJhY3RlcnNQZXJMaW5lfWAsXG4gICAgICAgIHZhbGlkYXRpb25GdW5jdGlvbiA9IHZhbGlkYXRlQ2hhcmFjdGVyc1BlckxpbmUsICAvLy9cbiAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgaW5pdGlhbEFuc3dlcixcbiAgICAgICAgICB2YWxpZGF0aW9uRnVuY3Rpb25cbiAgICAgICAgfTtcblxuICBwcm9tcHQob3B0aW9ucywgKGFuc3dlcikgPT4ge1xuICAgIGxldCBjaGFyYWN0ZXJzUGVyTGluZSA9IGFuc3dlcjsgIC8vL1xuXG4gICAgY29uc3QgdmFsaWQgPSAoY2hhcmFjdGVyc1BlckxpbmUgIT09IG51bGwpO1xuXG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICBjaGFyYWN0ZXJzUGVyTGluZSA9IE51bWJlcihjaGFyYWN0ZXJzUGVyTGluZSk7XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgICBjaGFyYWN0ZXJzUGVyTGluZVxuICAgICAgfSk7XG5cbiAgICAgIHByb2NlZWQoKTtcbiAgICAgIFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGFib3J0KCk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImNvbnRlbnRzRGVwdGhQcm9tcHRPcGVyYXRpb24iLCJwcm9tcHQiLCJzaGVsbFV0aWxpdGllcyIsInByb2NlZWQiLCJhYm9ydCIsImNvbnRleHQiLCJjaGFyYWN0ZXJzUGVyTGluZSIsImRlc2NyaXB0aW9uIiwiQ0hBUkFDVEVSU19QRVJfTElORV9ERVNDUklQVElPTiIsImVycm9yTWVzc2FnZSIsIklOVkFMSURfQ0hBUkFDVEVSU19QRVJfTElORV9NRVNTQUdFIiwiaW5pdGlhbEFuc3dlciIsInZhbGlkYXRpb25GdW5jdGlvbiIsInZhbGlkYXRlQ2hhcmFjdGVyc1BlckxpbmUiLCJvcHRpb25zIiwiYW5zd2VyIiwidmFsaWQiLCJOdW1iZXIiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBd0JBOzs7eUJBUk87d0JBRVc7NEJBQ007d0JBQ0k7QUFFcEQsSUFBTSxBQUFFQyxTQUFXQyx5QkFBYyxDQUF6QkQ7QUFFTyxTQUFTRCw2QkFBNkJHLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxPQUFPO0lBQzFFLElBQU0sQUFBRUMsb0JBQXNCRCxRQUF0QkMsbUJBQ0ZDLGNBQWNDLDZDQUErQixFQUM3Q0MsZUFBZUMsNkNBQW1DLEVBQ2xEQyxnQkFBZ0IsQUFBQyxHQUFvQixPQUFsQkwsb0JBQ25CTSxxQkFBcUJDLG1DQUF5QixFQUM5Q0MsVUFBVTtRQUNSUCxhQUFBQTtRQUNBRSxjQUFBQTtRQUNBRSxlQUFBQTtRQUNBQyxvQkFBQUE7SUFDRjtJQUVOWCxPQUFPYSxTQUFTLFNBQUNDO1FBQ2YsSUFBSVQsb0JBQW9CUyxRQUFTLEdBQUc7UUFFcEMsSUFBTUMsUUFBU1Ysc0JBQXNCO1FBRXJDLElBQUlVLE9BQU87WUFDVFYsb0JBQW9CVyxPQUFPWDtZQUUzQlksT0FBT0MsTUFBTSxDQUFDZCxTQUFTO2dCQUNyQkMsbUJBQUFBO1lBQ0Y7WUFFQUg7WUFFQTtRQUNGO1FBRUFDO0lBQ0Y7QUFDRiJ9