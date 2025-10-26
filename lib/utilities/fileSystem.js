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
    get copyFile () {
        return copyFile;
    },
    get createDirectory () {
        return createDirectory;
    },
    get readDirectory () {
        return readDirectory;
    },
    get readFile () {
        return readFile;
    },
    get writeFile () {
        return writeFile;
    }
});
var _necessary = require("necessary");
var _path = require("../utilities/path");
var _messages = require("../messages");
var concatenatePaths = _necessary.pathUtilities.concatenatePaths, isEntryFile = _necessary.fileSystemUtilities.isEntryFile, checkEntryExists = _necessary.fileSystemUtilities.checkEntryExists, copyFileAsync = _necessary.fileSystemUtilities.copyFile, readFileAsync = _necessary.fileSystemUtilities.readFile, writeFileAsync = _necessary.fileSystemUtilities.writeFile, readDirectoryAsync = _necessary.fileSystemUtilities.readDirectory, createDirectoryAsync = _necessary.fileSystemUtilities.createDirectory;
function copyFile(sourceFilePath, targetFilePath) {
    var content = null;
    try {
        content = copyFileAsync(sourceFilePath, targetFilePath);
        console.log("Copy file '".concat(sourceFilePath, "' to '").concat(targetFilePath, "'."));
    } catch (error) {
        var message;
        message = _messages.UNABLE_TO_COPY_FILE_MESSAGE;
        console.log(message);
        message = error.message;
        console.log(message);
    }
    return content;
}
function readFile(filePath) {
    var content = null;
    try {
        content = readFileAsync(filePath);
        console.log("Read file '".concat(filePath, "'."));
    } catch (error) {
        var message;
        message = _messages.UNABLE_TO_READ_FILE_MESSAGE;
        console.log(message);
        message = error.message;
        console.log(message);
    }
    return content;
}
function writeFile(filePath, content) {
    try {
        writeFileAsync(filePath, content);
        console.log("Write file '".concat(filePath, "'."));
    } catch (error) {
        var message;
        message = _messages.UNABLE_TO_WRITE_FILE_MESSAGE;
        console.log(message);
        message = error.message;
        console.log(message);
    }
}
function readDirectory(directoryPath, callback) {
    var recursive = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    try {
        var entryNames = readDirectoryAsync(directoryPath);
        entryNames.forEach(function(entryName) {
            var entryNameHiddenName = (0, _path.isEntryNameHiddenName)(entryName);
            if (!entryNameHiddenName) {
                var entryPath = concatenatePaths(directoryPath, entryName), entryFile = isEntryFile(entryPath);
                if (entryFile) {
                    var filePath = entryPath; ///
                    callback(filePath);
                } else {
                    if (recursive) {
                        var _$directoryPath = entryPath; ///
                        readDirectory(_$directoryPath, callback, recursive);
                    }
                }
            }
        });
    } catch (error) {
        var message;
        message = _messages.UNABLE_TO_READ_DIRECTORY_MESSAGE;
        console.log(message);
        message = error.message;
        console.log(message);
    }
}
function createDirectory(directoryPath) {
    var entryPath = directoryPath, entryExists = checkEntryExists(entryPath);
    if (entryExists) {
        return;
    }
    try {
        createDirectoryAsync(directoryPath);
        console.log("Create directory '".concat(directoryPath, "'."));
    } catch (error) {
        var message;
        message = _messages.UNABLE_TO_CREATE_DIRECTORY_MESSAGE;
        console.log(message);
        message = error.message;
        console.log(message);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZmlsZVN5c3RlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGF0aFV0aWxpdGllcywgZmlsZVN5c3RlbVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgaXNFbnRyeU5hbWVIaWRkZW5OYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXRoXCI7XG5pbXBvcnQgeyBVTkFCTEVfVE9fQ09QWV9GSUxFX01FU1NBR0UsXG4gICAgICAgIFVOQUJMRV9UT19SRUFEX0ZJTEVfTUVTU0FHRSxcbiAgICAgICAgVU5BQkxFX1RPX1dSSVRFX0ZJTEVfTUVTU0FHRSxcbiAgICAgICAgVU5BQkxFX1RPX1JFQURfRElSRUNUT1JZX01FU1NBR0UsXG4gICAgICAgIFVOQUJMRV9UT19DUkVBVEVfRElSRUNUT1JZX01FU1NBR0UgfSBmcm9tIFwiLi4vbWVzc2FnZXNcIjtcblxuY29uc3QgeyBjb25jYXRlbmF0ZVBhdGhzIH0gPSBwYXRoVXRpbGl0aWVzLFxuICAgICAgeyBpc0VudHJ5RmlsZSxcbiAgICAgICAgY2hlY2tFbnRyeUV4aXN0cyxcbiAgICAgICAgY29weUZpbGU6IGNvcHlGaWxlQXN5bmMsXG4gICAgICAgIHJlYWRGaWxlOiByZWFkRmlsZUFzeW5jLFxuICAgICAgICB3cml0ZUZpbGU6IHdyaXRlRmlsZUFzeW5jLFxuICAgICAgICByZWFkRGlyZWN0b3J5OiByZWFkRGlyZWN0b3J5QXN5bmMsXG4gICAgICAgIGNyZWF0ZURpcmVjdG9yeTogY3JlYXRlRGlyZWN0b3J5QXN5bmMgfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3B5RmlsZShzb3VyY2VGaWxlUGF0aCwgdGFyZ2V0RmlsZVBhdGgpIHtcbiAgbGV0IGNvbnRlbnQgPSBudWxsO1xuXG4gIHRyeSB7XG4gICAgY29udGVudCA9IGNvcHlGaWxlQXN5bmMoc291cmNlRmlsZVBhdGgsIHRhcmdldEZpbGVQYXRoKTtcblxuICAgIGNvbnNvbGUubG9nKGBDb3B5IGZpbGUgJyR7c291cmNlRmlsZVBhdGh9JyB0byAnJHt0YXJnZXRGaWxlUGF0aH0nLmApO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxldCBtZXNzYWdlO1xuXG4gICAgbWVzc2FnZSA9IFVOQUJMRV9UT19DT1BZX0ZJTEVfTUVTU0FHRTtcblxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuXG4gICAgKHsgbWVzc2FnZSB9ID0gZXJyb3IpO1xuXG4gICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gIH1cblxuICByZXR1cm4gY29udGVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRGaWxlKGZpbGVQYXRoKSB7XG4gIGxldCBjb250ZW50ID0gbnVsbDtcblxuICB0cnkge1xuICAgIGNvbnRlbnQgPSByZWFkRmlsZUFzeW5jKGZpbGVQYXRoKTtcblxuICAgIGNvbnNvbGUubG9nKGBSZWFkIGZpbGUgJyR7ZmlsZVBhdGh9Jy5gKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsZXQgbWVzc2FnZTtcblxuICAgIG1lc3NhZ2UgPSBVTkFCTEVfVE9fUkVBRF9GSUxFX01FU1NBR0U7XG5cbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcblxuICAgICh7IG1lc3NhZ2UgfSA9IGVycm9yKTtcblxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3cml0ZUZpbGUoZmlsZVBhdGgsIGNvbnRlbnQpIHtcbiAgdHJ5IHtcbiAgICB3cml0ZUZpbGVBc3luYyhmaWxlUGF0aCwgY29udGVudCk7XG5cbiAgICBjb25zb2xlLmxvZyhgV3JpdGUgZmlsZSAnJHtmaWxlUGF0aH0nLmApO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxldCBtZXNzYWdlO1xuXG4gICAgbWVzc2FnZSA9IFVOQUJMRV9UT19XUklURV9GSUxFX01FU1NBR0U7XG5cbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcblxuICAgICh7IG1lc3NhZ2UgfSA9IGVycm9yKTtcblxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkRGlyZWN0b3J5KGRpcmVjdG9yeVBhdGgsIGNhbGxiYWNrLCByZWN1cnNpdmUgPSB0cnVlKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZW50cnlOYW1lcyA9IHJlYWREaXJlY3RvcnlBc3luYyhkaXJlY3RvcnlQYXRoKTtcblxuICAgIGVudHJ5TmFtZXMuZm9yRWFjaCgoZW50cnlOYW1lKSA9PiB7XG4gICAgICBjb25zdCBlbnRyeU5hbWVIaWRkZW5OYW1lID0gaXNFbnRyeU5hbWVIaWRkZW5OYW1lKGVudHJ5TmFtZSk7XG5cbiAgICAgIGlmICghZW50cnlOYW1lSGlkZGVuTmFtZSkge1xuICAgICAgICBjb25zdCBlbnRyeVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKGRpcmVjdG9yeVBhdGgsIGVudHJ5TmFtZSksIC8vL1xuICAgICAgICAgICAgICBlbnRyeUZpbGUgPSBpc0VudHJ5RmlsZShlbnRyeVBhdGgpO1xuXG4gICAgICAgIGlmIChlbnRyeUZpbGUpIHtcbiAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGVudHJ5UGF0aDsgLy8vXG5cbiAgICAgICAgICBjYWxsYmFjayhmaWxlUGF0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHJlY3Vyc2l2ZSkge1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0b3J5UGF0aCA9IGVudHJ5UGF0aDsgIC8vL1xuXG4gICAgICAgICAgICByZWFkRGlyZWN0b3J5KGRpcmVjdG9yeVBhdGgsIGNhbGxiYWNrLCByZWN1cnNpdmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxldCBtZXNzYWdlO1xuXG4gICAgbWVzc2FnZSA9IFVOQUJMRV9UT19SRUFEX0RJUkVDVE9SWV9NRVNTQUdFO1xuXG4gICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG5cbiAgICAoeyBtZXNzYWdlIH0gPSBlcnJvcik7XG5cbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGlyZWN0b3J5KGRpcmVjdG9yeVBhdGgpIHtcbiAgY29uc3QgZW50cnlQYXRoID0gZGlyZWN0b3J5UGF0aCwgIC8vL1xuICAgICAgICBlbnRyeUV4aXN0cyA9IGNoZWNrRW50cnlFeGlzdHMoZW50cnlQYXRoKTtcblxuICBpZiAoZW50cnlFeGlzdHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0cnkge1xuICAgIGNyZWF0ZURpcmVjdG9yeUFzeW5jKGRpcmVjdG9yeVBhdGgpO1xuXG4gICAgY29uc29sZS5sb2coYENyZWF0ZSBkaXJlY3RvcnkgJyR7ZGlyZWN0b3J5UGF0aH0nLmApO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxldCBtZXNzYWdlO1xuXG4gICAgbWVzc2FnZSA9IFVOQUJMRV9UT19DUkVBVEVfRElSRUNUT1JZX01FU1NBR0U7XG5cbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcblxuICAgICh7IG1lc3NhZ2UgfSA9IGVycm9yKTtcblxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiY29weUZpbGUiLCJjcmVhdGVEaXJlY3RvcnkiLCJyZWFkRGlyZWN0b3J5IiwicmVhZEZpbGUiLCJ3cml0ZUZpbGUiLCJjb25jYXRlbmF0ZVBhdGhzIiwicGF0aFV0aWxpdGllcyIsImlzRW50cnlGaWxlIiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsImNoZWNrRW50cnlFeGlzdHMiLCJjb3B5RmlsZUFzeW5jIiwicmVhZEZpbGVBc3luYyIsIndyaXRlRmlsZUFzeW5jIiwicmVhZERpcmVjdG9yeUFzeW5jIiwiY3JlYXRlRGlyZWN0b3J5QXN5bmMiLCJzb3VyY2VGaWxlUGF0aCIsInRhcmdldEZpbGVQYXRoIiwiY29udGVudCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIm1lc3NhZ2UiLCJVTkFCTEVfVE9fQ09QWV9GSUxFX01FU1NBR0UiLCJmaWxlUGF0aCIsIlVOQUJMRV9UT19SRUFEX0ZJTEVfTUVTU0FHRSIsIlVOQUJMRV9UT19XUklURV9GSUxFX01FU1NBR0UiLCJkaXJlY3RvcnlQYXRoIiwiY2FsbGJhY2siLCJyZWN1cnNpdmUiLCJlbnRyeU5hbWVzIiwiZm9yRWFjaCIsImVudHJ5TmFtZSIsImVudHJ5TmFtZUhpZGRlbk5hbWUiLCJpc0VudHJ5TmFtZUhpZGRlbk5hbWUiLCJlbnRyeVBhdGgiLCJlbnRyeUZpbGUiLCJVTkFCTEVfVE9fUkVBRF9ESVJFQ1RPUllfTUVTU0FHRSIsImVudHJ5RXhpc3RzIiwiVU5BQkxFX1RPX0NSRUFURV9ESVJFQ1RPUllfTUVTU0FHRSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBb0JnQkE7ZUFBQUE7O1FBbUdBQztlQUFBQTs7UUFyQ0FDO2VBQUFBOztRQXhDQUM7ZUFBQUE7O1FBc0JBQztlQUFBQTs7O3lCQTlEbUM7b0JBRWI7d0JBS1k7QUFFbEQsSUFBTSxBQUFFQyxtQkFBcUJDLHdCQUFhLENBQWxDRCxrQkFDQUUsY0FNMENDLDhCQUFtQixDQU43REQsYUFDQUUsbUJBSzBDRCw4QkFBbUIsQ0FMN0RDLGtCQUNBVCxBQUFVVSxnQkFJZ0NGLDhCQUFtQixDQUo3RFIsVUFDQUcsQUFBVVEsZ0JBR2dDSCw4QkFBbUIsQ0FIN0RMLFVBQ0FDLEFBQVdRLGlCQUUrQkosOEJBQW1CLENBRjdESixXQUNBRixBQUFlVyxxQkFDMkJMLDhCQUFtQixDQUQ3RE4sZUFDQUQsQUFBaUJhLHVCQUF5Qk4sOEJBQW1CLENBQTdEUDtBQUVELFNBQVNELFNBQVNlLGNBQWMsRUFBRUMsY0FBYztJQUNyRCxJQUFJQyxVQUFVO0lBRWQsSUFBSTtRQUNGQSxVQUFVUCxjQUFjSyxnQkFBZ0JDO1FBRXhDRSxRQUFRQyxHQUFHLENBQUMsQUFBQyxjQUFvQ0gsT0FBdkJELGdCQUFlLFVBQXVCLE9BQWZDLGdCQUFlO0lBQ2xFLEVBQUUsT0FBT0ksT0FBTztRQUNkLElBQUlDO1FBRUpBLFVBQVVDLHFDQUEyQjtRQUVyQ0osUUFBUUMsR0FBRyxDQUFDRTtRQUVUQSxVQUFZRCxNQUFaQztRQUVISCxRQUFRQyxHQUFHLENBQUNFO0lBQ2Q7SUFFQSxPQUFPSjtBQUNUO0FBRU8sU0FBU2QsU0FBU29CLFFBQVE7SUFDL0IsSUFBSU4sVUFBVTtJQUVkLElBQUk7UUFDRkEsVUFBVU4sY0FBY1k7UUFFeEJMLFFBQVFDLEdBQUcsQ0FBQyxBQUFDLGNBQXNCLE9BQVRJLFVBQVM7SUFDckMsRUFBRSxPQUFPSCxPQUFPO1FBQ2QsSUFBSUM7UUFFSkEsVUFBVUcscUNBQTJCO1FBRXJDTixRQUFRQyxHQUFHLENBQUNFO1FBRVRBLFVBQVlELE1BQVpDO1FBRUhILFFBQVFDLEdBQUcsQ0FBQ0U7SUFDZDtJQUVBLE9BQU9KO0FBQ1Q7QUFFTyxTQUFTYixVQUFVbUIsUUFBUSxFQUFFTixPQUFPO0lBQ3pDLElBQUk7UUFDRkwsZUFBZVcsVUFBVU47UUFFekJDLFFBQVFDLEdBQUcsQ0FBQyxBQUFDLGVBQXVCLE9BQVRJLFVBQVM7SUFDdEMsRUFBRSxPQUFPSCxPQUFPO1FBQ2QsSUFBSUM7UUFFSkEsVUFBVUksc0NBQTRCO1FBRXRDUCxRQUFRQyxHQUFHLENBQUNFO1FBRVRBLFVBQVlELE1BQVpDO1FBRUhILFFBQVFDLEdBQUcsQ0FBQ0U7SUFDZDtBQUNGO0FBRU8sU0FBU25CLGNBQWN3QixhQUFhLEVBQUVDLFFBQVE7UUFBRUMsWUFBQUEsaUVBQVk7SUFDakUsSUFBSTtRQUNGLElBQU1DLGFBQWFoQixtQkFBbUJhO1FBRXRDRyxXQUFXQyxPQUFPLENBQUMsU0FBQ0M7WUFDbEIsSUFBTUMsc0JBQXNCQyxJQUFBQSwyQkFBcUIsRUFBQ0Y7WUFFbEQsSUFBSSxDQUFDQyxxQkFBcUI7Z0JBQ3hCLElBQU1FLFlBQVk3QixpQkFBaUJxQixlQUFlSyxZQUM1Q0ksWUFBWTVCLFlBQVkyQjtnQkFFOUIsSUFBSUMsV0FBVztvQkFDYixJQUFNWixXQUFXVyxXQUFXLEdBQUc7b0JBRS9CUCxTQUFTSjtnQkFDWCxPQUFPO29CQUNMLElBQUlLLFdBQVc7d0JBQ2IsSUFBTUYsa0JBQWdCUSxXQUFZLEdBQUc7d0JBRXJDaEMsY0FBY3dCLGlCQUFlQyxVQUFVQztvQkFDekM7Z0JBQ0Y7WUFDRjtRQUNGO0lBQ0YsRUFBRSxPQUFPUixPQUFPO1FBQ2QsSUFBSUM7UUFFSkEsVUFBVWUsMENBQWdDO1FBRTFDbEIsUUFBUUMsR0FBRyxDQUFDRTtRQUVUQSxVQUFZRCxNQUFaQztRQUVISCxRQUFRQyxHQUFHLENBQUNFO0lBQ2Q7QUFDRjtBQUVPLFNBQVNwQixnQkFBZ0J5QixhQUFhO0lBQzNDLElBQU1RLFlBQVlSLGVBQ1pXLGNBQWM1QixpQkFBaUJ5QjtJQUVyQyxJQUFJRyxhQUFhO1FBQ2Y7SUFDRjtJQUVBLElBQUk7UUFDRnZCLHFCQUFxQlk7UUFFckJSLFFBQVFDLEdBQUcsQ0FBQyxBQUFDLHFCQUFrQyxPQUFkTyxlQUFjO0lBQ2pELEVBQUUsT0FBT04sT0FBTztRQUNkLElBQUlDO1FBRUpBLFVBQVVpQiw0Q0FBa0M7UUFFNUNwQixRQUFRQyxHQUFHLENBQUNFO1FBRVRBLFVBQVlELE1BQVpDO1FBRUhILFFBQVFDLEdBQUcsQ0FBQ0U7SUFDZDtBQUNGIn0=