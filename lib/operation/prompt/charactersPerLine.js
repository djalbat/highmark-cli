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
const _necessary = require("necessary");
const _validate = require("../../utilities/validate");
const _descriptions = require("../../descriptions");
const _messages = require("../../messages");
const { prompt } = _necessary.shellUtilities;
function contentsDepthPromptOperation(proceed, abort, context) {
    const { charactersPerLine } = context, description = _descriptions.CHARACTERS_PER_LINE_DESCRIPTION, errorMessage = _messages.INVALID_CHARACTERS_PER_LINE_MESSAGE, initialAnswer = `${charactersPerLine}`, validationFunction = _validate.validateCharactersPerLine, options = {
        description,
        errorMessage,
        initialAnswer,
        validationFunction
    };
    prompt(options, (answer)=>{
        let charactersPerLine = answer; ///
        const valid = charactersPerLine !== null;
        if (valid) {
            charactersPerLine = Number(charactersPerLine);
            Object.assign(context, {
                charactersPerLine
            });
            proceed();
            return;
        }
        abort();
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vcHJvbXB0L2NoYXJhY3RlcnNQZXJMaW5lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzaGVsbFV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgdmFsaWRhdGVDaGFyYWN0ZXJzUGVyTGluZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdmFsaWRhdGVcIjtcbmltcG9ydCB7IENIQVJBQ1RFUlNfUEVSX0xJTkVfREVTQ1JJUFRJT04gfSBmcm9tIFwiLi4vLi4vZGVzY3JpcHRpb25zXCI7XG5pbXBvcnQgeyBJTlZBTElEX0NIQVJBQ1RFUlNfUEVSX0xJTkVfTUVTU0FHRSB9IGZyb20gXCIuLi8uLi9tZXNzYWdlc1wiO1xuXG5jb25zdCB7IHByb21wdCB9ID0gc2hlbGxVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRlbnRzRGVwdGhQcm9tcHRPcGVyYXRpb24ocHJvY2VlZCwgYWJvcnQsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBjaGFyYWN0ZXJzUGVyTGluZSB9ID0gY29udGV4dCxcbiAgICAgICAgZGVzY3JpcHRpb24gPSBDSEFSQUNURVJTX1BFUl9MSU5FX0RFU0NSSVBUSU9OLFxuICAgICAgICBlcnJvck1lc3NhZ2UgPSBJTlZBTElEX0NIQVJBQ1RFUlNfUEVSX0xJTkVfTUVTU0FHRSxcbiAgICAgICAgaW5pdGlhbEFuc3dlciA9IGAke2NoYXJhY3RlcnNQZXJMaW5lfWAsXG4gICAgICAgIHZhbGlkYXRpb25GdW5jdGlvbiA9IHZhbGlkYXRlQ2hhcmFjdGVyc1BlckxpbmUsICAvLy9cbiAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgaW5pdGlhbEFuc3dlcixcbiAgICAgICAgICB2YWxpZGF0aW9uRnVuY3Rpb25cbiAgICAgICAgfTtcblxuICBwcm9tcHQob3B0aW9ucywgKGFuc3dlcikgPT4ge1xuICAgIGxldCBjaGFyYWN0ZXJzUGVyTGluZSA9IGFuc3dlcjsgIC8vL1xuXG4gICAgY29uc3QgdmFsaWQgPSAoY2hhcmFjdGVyc1BlckxpbmUgIT09IG51bGwpO1xuXG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICBjaGFyYWN0ZXJzUGVyTGluZSA9IE51bWJlcihjaGFyYWN0ZXJzUGVyTGluZSk7XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgICBjaGFyYWN0ZXJzUGVyTGluZVxuICAgICAgfSk7XG5cbiAgICAgIHByb2NlZWQoKTtcbiAgICAgIFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGFib3J0KCk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImNvbnRlbnRzRGVwdGhQcm9tcHRPcGVyYXRpb24iLCJwcm9tcHQiLCJzaGVsbFV0aWxpdGllcyIsInByb2NlZWQiLCJhYm9ydCIsImNvbnRleHQiLCJjaGFyYWN0ZXJzUGVyTGluZSIsImRlc2NyaXB0aW9uIiwiQ0hBUkFDVEVSU19QRVJfTElORV9ERVNDUklQVElPTiIsImVycm9yTWVzc2FnZSIsIklOVkFMSURfQ0hBUkFDVEVSU19QRVJfTElORV9NRVNTQUdFIiwiaW5pdGlhbEFuc3dlciIsInZhbGlkYXRpb25GdW5jdGlvbiIsInZhbGlkYXRlQ2hhcmFjdGVyc1BlckxpbmUiLCJvcHRpb25zIiwiYW5zd2VyIiwidmFsaWQiLCJOdW1iZXIiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBd0JBOzs7MkJBUk87MEJBRVc7OEJBQ007MEJBQ0k7QUFFcEQsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR0MseUJBQWM7QUFFbEIsU0FBU0YsNkJBQTZCRyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsT0FBTztJQUMxRSxNQUFNLEVBQUVDLGlCQUFpQixFQUFFLEdBQUdELFNBQ3hCRSxjQUFjQyw2Q0FBK0IsRUFDN0NDLGVBQWVDLDZDQUFtQyxFQUNsREMsZ0JBQWdCLEdBQUdMLG1CQUFtQixFQUN0Q00scUJBQXFCQyxtQ0FBeUIsRUFDOUNDLFVBQVU7UUFDUlA7UUFDQUU7UUFDQUU7UUFDQUM7SUFDRjtJQUVOWCxPQUFPYSxTQUFTLENBQUNDO1FBQ2YsSUFBSVQsb0JBQW9CUyxRQUFTLEdBQUc7UUFFcEMsTUFBTUMsUUFBU1Ysc0JBQXNCO1FBRXJDLElBQUlVLE9BQU87WUFDVFYsb0JBQW9CVyxPQUFPWDtZQUUzQlksT0FBT0MsTUFBTSxDQUFDZCxTQUFTO2dCQUNyQkM7WUFDRjtZQUVBSDtZQUVBO1FBQ0Y7UUFFQUM7SUFDRjtBQUNGIn0=