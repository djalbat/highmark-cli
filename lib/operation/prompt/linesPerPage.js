"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return linesPerPagePromptOperation;
    }
});
var _necessary = require("necessary");
var _validate = require("../../utilities/validate");
var _constants = require("../../constants");
var _defaults = require("../../defaults");
var _descriptions = require("../../descriptions");
var _messages = require("../../messages");
var prompt = _necessary.shellUtilities.prompt;
function linesPerPagePromptOperation(proceed, abort, context) {
    var linesPerPage = context.linesPerPage, description = _descriptions.LINES_PER_PAGE_DESCRIPTION, errorMessage = _messages.INVALID_LINES_PER_PAGE_MESSAGE, initialAnswer = linesPerPage === Infinity ? _constants.EMPTY_STRING : "".concat(linesPerPage), validationFunction = _validate.validateLinesPerPage, options = {
        description: description,
        errorMessage: errorMessage,
        initialAnswer: initialAnswer,
        validationFunction: validationFunction
    };
    prompt(options, function(answer) {
        var linesPerPage = answer; ///
        var valid = linesPerPage !== null;
        if (valid) {
            linesPerPage = linesPerPage === _constants.EMPTY_STRING ? _defaults.DEFAULT_LINES_PER_PAGE : Number(linesPerPage);
            Object.assign(context, {
                linesPerPage: linesPerPage
            });
            proceed();
            return;
        }
        abort();
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcGVyYXRpb24vcHJvbXB0L2xpbmVzUGVyUGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc2hlbGxVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IHZhbGlkYXRlTGluZXNQZXJQYWdlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy92YWxpZGF0ZVwiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgREVGQVVMVF9MSU5FU19QRVJfUEFHRSB9IGZyb20gXCIuLi8uLi9kZWZhdWx0c1wiO1xuaW1wb3J0IHsgTElORVNfUEVSX1BBR0VfREVTQ1JJUFRJT04gfSBmcm9tIFwiLi4vLi4vZGVzY3JpcHRpb25zXCI7XG5pbXBvcnQgeyBJTlZBTElEX0xJTkVTX1BFUl9QQUdFX01FU1NBR0UgfSBmcm9tIFwiLi4vLi4vbWVzc2FnZXNcIjtcblxuY29uc3QgeyBwcm9tcHQgfSA9IHNoZWxsVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaW5lc1BlclBhZ2VQcm9tcHRPcGVyYXRpb24ocHJvY2VlZCwgYWJvcnQsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBsaW5lc1BlclBhZ2UgfSA9IGNvbnRleHQsXG4gICAgICAgIGRlc2NyaXB0aW9uID0gTElORVNfUEVSX1BBR0VfREVTQ1JJUFRJT04sXG4gICAgICAgIGVycm9yTWVzc2FnZSA9IElOVkFMSURfTElORVNfUEVSX1BBR0VfTUVTU0FHRSxcbiAgICAgICAgaW5pdGlhbEFuc3dlciA9IChsaW5lc1BlclBhZ2UgPT09IEluZmluaXR5KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtsaW5lc1BlclBhZ2V9YCxcbiAgICAgICAgdmFsaWRhdGlvbkZ1bmN0aW9uID0gdmFsaWRhdGVMaW5lc1BlclBhZ2UsICAvLy9cbiAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgaW5pdGlhbEFuc3dlcixcbiAgICAgICAgICB2YWxpZGF0aW9uRnVuY3Rpb25cbiAgICAgICAgfTtcblxuICBwcm9tcHQob3B0aW9ucywgKGFuc3dlcikgPT4ge1xuICAgIGxldCBsaW5lc1BlclBhZ2UgPSBhbnN3ZXI7ICAvLy9cblxuICAgIGNvbnN0IHZhbGlkID0gKGxpbmVzUGVyUGFnZSAhPT0gbnVsbCk7XG5cbiAgICBpZiAodmFsaWQpIHtcbiAgICAgIGxpbmVzUGVyUGFnZSA9IChsaW5lc1BlclBhZ2UgPT09IEVNUFRZX1NUUklORykgP1xuICAgICAgICAgICAgICAgICAgICAgICBERUZBVUxUX0xJTkVTX1BFUl9QQUdFIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIobGluZXNQZXJQYWdlKTtcblxuICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgIGxpbmVzUGVyUGFnZVxuICAgICAgfSk7XG5cbiAgICAgIHByb2NlZWQoKTtcbiAgICAgIFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGFib3J0KCk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImxpbmVzUGVyUGFnZVByb21wdE9wZXJhdGlvbiIsInByb21wdCIsInNoZWxsVXRpbGl0aWVzIiwicHJvY2VlZCIsImFib3J0IiwiY29udGV4dCIsImxpbmVzUGVyUGFnZSIsImRlc2NyaXB0aW9uIiwiTElORVNfUEVSX1BBR0VfREVTQ1JJUFRJT04iLCJlcnJvck1lc3NhZ2UiLCJJTlZBTElEX0xJTkVTX1BFUl9QQUdFX01FU1NBR0UiLCJpbml0aWFsQW5zd2VyIiwiSW5maW5pdHkiLCJFTVBUWV9TVFJJTkciLCJ2YWxpZGF0aW9uRnVuY3Rpb24iLCJ2YWxpZGF0ZUxpbmVzUGVyUGFnZSIsIm9wdGlvbnMiLCJhbnN3ZXIiLCJ2YWxpZCIsIkRFRkFVTFRfTElORVNfUEVSX1BBR0UiLCJOdW1iZXIiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBd0JBOzs7eUJBVk87d0JBRU07eUJBQ1I7d0JBQ1U7NEJBQ0k7d0JBQ0k7QUFFL0MsSUFBTSxBQUFFQyxTQUFXQyx5QkFBYyxDQUF6QkQ7QUFFTyxTQUFTRCw0QkFBNEJHLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxPQUFPO0lBQ3pFLElBQU0sQUFBRUMsZUFBaUJELFFBQWpCQyxjQUNGQyxjQUFjQyx3Q0FBMEIsRUFDeENDLGVBQWVDLHdDQUE4QixFQUM3Q0MsZ0JBQWdCLEFBQUNMLGlCQUFpQk0sV0FDaEJDLHVCQUFZLEdBQ1gsQUFBQyxHQUFlLE9BQWJQLGVBQ3RCUSxxQkFBcUJDLDhCQUFvQixFQUN6Q0MsVUFBVTtRQUNSVCxhQUFBQTtRQUNBRSxjQUFBQTtRQUNBRSxlQUFBQTtRQUNBRyxvQkFBQUE7SUFDRjtJQUVOYixPQUFPZSxTQUFTLFNBQUNDO1FBQ2YsSUFBSVgsZUFBZVcsUUFBUyxHQUFHO1FBRS9CLElBQU1DLFFBQVNaLGlCQUFpQjtRQUVoQyxJQUFJWSxPQUFPO1lBQ1RaLGVBQWUsQUFBQ0EsaUJBQWlCTyx1QkFBWSxHQUM1Qk0sZ0NBQXNCLEdBQ3BCQyxPQUFPZDtZQUUxQmUsT0FBT0MsTUFBTSxDQUFDakIsU0FBUztnQkFDckJDLGNBQUFBO1lBQ0Y7WUFFQUg7WUFFQTtRQUNGO1FBRUFDO0lBQ0Y7QUFDRiJ9