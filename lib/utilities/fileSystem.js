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
    get copyFiles () {
        return copyFiles;
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
function copyFiles(sourceDirectoryPath, targetDirectoryPath) {
    var directoryPath;
    directoryPath = targetDirectoryPath; ///
    createDirectory(directoryPath);
    directoryPath = sourceDirectoryPath; ///
    var recursive = false;
    readDirectory(directoryPath, function(filePath) {
        var content = readFile(filePath);
        filePath = adjustFilePath(filePath, sourceDirectoryPath, targetDirectoryPath);
        writeFile(filePath, content);
    }, recursive);
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
function adjustFilePath(filePath, sourceDirectoryPath, targetDirectoryPath) {
    var sourceDirectoryPathLength = sourceDirectoryPath.length, start = sourceDirectoryPathLength + 1, fileName = filePath.substring(start);
    filePath = concatenatePaths(targetDirectoryPath, fileName);
    return filePath;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZmlsZVN5c3RlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGF0aFV0aWxpdGllcywgZmlsZVN5c3RlbVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgaXNFbnRyeU5hbWVIaWRkZW5OYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXRoXCI7XG5pbXBvcnQgeyBVTkFCTEVfVE9fQ09QWV9GSUxFX01FU1NBR0UsXG4gICAgICAgICBVTkFCTEVfVE9fUkVBRF9GSUxFX01FU1NBR0UsXG4gICAgICAgICBVTkFCTEVfVE9fV1JJVEVfRklMRV9NRVNTQUdFLFxuICAgICAgICAgVU5BQkxFX1RPX1JFQURfRElSRUNUT1JZX01FU1NBR0UsXG4gICAgICAgICBVTkFCTEVfVE9fQ1JFQVRFX0RJUkVDVE9SWV9NRVNTQUdFIH0gZnJvbSBcIi4uL21lc3NhZ2VzXCI7XG5cbmNvbnN0IHsgY29uY2F0ZW5hdGVQYXRocyB9ID0gcGF0aFV0aWxpdGllcyxcbiAgICAgIHsgaXNFbnRyeUZpbGUsXG4gICAgICAgIGNoZWNrRW50cnlFeGlzdHMsXG4gICAgICAgIGNvcHlGaWxlOiBjb3B5RmlsZUFzeW5jLFxuICAgICAgICByZWFkRmlsZTogcmVhZEZpbGVBc3luYyxcbiAgICAgICAgd3JpdGVGaWxlOiB3cml0ZUZpbGVBc3luYyxcbiAgICAgICAgcmVhZERpcmVjdG9yeTogcmVhZERpcmVjdG9yeUFzeW5jLFxuICAgICAgICBjcmVhdGVEaXJlY3Rvcnk6IGNyZWF0ZURpcmVjdG9yeUFzeW5jIH0gPSBmaWxlU3lzdGVtVXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gY29weUZpbGUoc291cmNlRmlsZVBhdGgsIHRhcmdldEZpbGVQYXRoKSB7XG4gIGxldCBjb250ZW50ID0gbnVsbDtcblxuICB0cnkge1xuICAgIGNvbnRlbnQgPSBjb3B5RmlsZUFzeW5jKHNvdXJjZUZpbGVQYXRoLCB0YXJnZXRGaWxlUGF0aCk7XG5cbiAgICBjb25zb2xlLmxvZyhgQ29weSBmaWxlICcke3NvdXJjZUZpbGVQYXRofScgdG8gJyR7dGFyZ2V0RmlsZVBhdGh9Jy5gKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsZXQgbWVzc2FnZTtcblxuICAgIG1lc3NhZ2UgPSBVTkFCTEVfVE9fQ09QWV9GSUxFX01FU1NBR0U7XG5cbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcblxuICAgICh7IG1lc3NhZ2UgfSA9IGVycm9yKTtcblxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkRmlsZShmaWxlUGF0aCkge1xuICBsZXQgY29udGVudCA9IG51bGw7XG5cbiAgdHJ5IHtcbiAgICBjb250ZW50ID0gcmVhZEZpbGVBc3luYyhmaWxlUGF0aCk7XG5cbiAgICBjb25zb2xlLmxvZyhgUmVhZCBmaWxlICcke2ZpbGVQYXRofScuYCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbGV0IG1lc3NhZ2U7XG5cbiAgICBtZXNzYWdlID0gVU5BQkxFX1RPX1JFQURfRklMRV9NRVNTQUdFO1xuXG4gICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG5cbiAgICAoeyBtZXNzYWdlIH0gPSBlcnJvcik7XG5cbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgfVxuXG4gIHJldHVybiBjb250ZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd3JpdGVGaWxlKGZpbGVQYXRoLCBjb250ZW50KSB7XG4gIHRyeSB7XG4gICAgd3JpdGVGaWxlQXN5bmMoZmlsZVBhdGgsIGNvbnRlbnQpO1xuXG4gICAgY29uc29sZS5sb2coYFdyaXRlIGZpbGUgJyR7ZmlsZVBhdGh9Jy5gKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsZXQgbWVzc2FnZTtcblxuICAgIG1lc3NhZ2UgPSBVTkFCTEVfVE9fV1JJVEVfRklMRV9NRVNTQUdFO1xuXG4gICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG5cbiAgICAoeyBtZXNzYWdlIH0gPSBlcnJvcik7XG5cbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29weUZpbGVzKHNvdXJjZURpcmVjdG9yeVBhdGgsIHRhcmdldERpcmVjdG9yeVBhdGgpIHtcbiAgbGV0IGRpcmVjdG9yeVBhdGg7XG5cbiAgZGlyZWN0b3J5UGF0aCA9IHRhcmdldERpcmVjdG9yeVBhdGg7ICAvLy9cblxuICBjcmVhdGVEaXJlY3RvcnkoZGlyZWN0b3J5UGF0aCk7XG5cbiAgZGlyZWN0b3J5UGF0aCA9IHNvdXJjZURpcmVjdG9yeVBhdGg7ICAvLy9cblxuICBjb25zdCByZWN1cnNpdmUgPSBmYWxzZTtcblxuICByZWFkRGlyZWN0b3J5KGRpcmVjdG9yeVBhdGgsIChmaWxlUGF0aCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSByZWFkRmlsZShmaWxlUGF0aCk7XG5cbiAgICBmaWxlUGF0aCA9IGFkanVzdEZpbGVQYXRoKGZpbGVQYXRoLCBzb3VyY2VEaXJlY3RvcnlQYXRoLCB0YXJnZXREaXJlY3RvcnlQYXRoKTtcblxuICAgIHdyaXRlRmlsZShmaWxlUGF0aCwgY29udGVudCk7XG4gIH0sIHJlY3Vyc2l2ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkRGlyZWN0b3J5KGRpcmVjdG9yeVBhdGgsIGNhbGxiYWNrLCByZWN1cnNpdmUgPSB0cnVlKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZW50cnlOYW1lcyA9IHJlYWREaXJlY3RvcnlBc3luYyhkaXJlY3RvcnlQYXRoKTtcblxuICAgIGVudHJ5TmFtZXMuZm9yRWFjaCgoZW50cnlOYW1lKSA9PiB7XG4gICAgICBjb25zdCBlbnRyeU5hbWVIaWRkZW5OYW1lID0gaXNFbnRyeU5hbWVIaWRkZW5OYW1lKGVudHJ5TmFtZSk7XG5cbiAgICAgIGlmICghZW50cnlOYW1lSGlkZGVuTmFtZSkge1xuICAgICAgICBjb25zdCBlbnRyeVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKGRpcmVjdG9yeVBhdGgsIGVudHJ5TmFtZSksIC8vL1xuICAgICAgICAgICAgICBlbnRyeUZpbGUgPSBpc0VudHJ5RmlsZShlbnRyeVBhdGgpO1xuXG4gICAgICAgIGlmIChlbnRyeUZpbGUpIHtcbiAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGVudHJ5UGF0aDsgLy8vXG5cbiAgICAgICAgICBjYWxsYmFjayhmaWxlUGF0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHJlY3Vyc2l2ZSkge1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0b3J5UGF0aCA9IGVudHJ5UGF0aDsgIC8vL1xuXG4gICAgICAgICAgICByZWFkRGlyZWN0b3J5KGRpcmVjdG9yeVBhdGgsIGNhbGxiYWNrLCByZWN1cnNpdmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxldCBtZXNzYWdlO1xuXG4gICAgbWVzc2FnZSA9IFVOQUJMRV9UT19SRUFEX0RJUkVDVE9SWV9NRVNTQUdFO1xuXG4gICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG5cbiAgICAoeyBtZXNzYWdlIH0gPSBlcnJvcik7XG5cbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGlyZWN0b3J5KGRpcmVjdG9yeVBhdGgpIHtcbiAgY29uc3QgZW50cnlQYXRoID0gZGlyZWN0b3J5UGF0aCwgIC8vL1xuICAgICAgICBlbnRyeUV4aXN0cyA9IGNoZWNrRW50cnlFeGlzdHMoZW50cnlQYXRoKTtcblxuICBpZiAoZW50cnlFeGlzdHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0cnkge1xuICAgIGNyZWF0ZURpcmVjdG9yeUFzeW5jKGRpcmVjdG9yeVBhdGgpO1xuXG4gICAgY29uc29sZS5sb2coYENyZWF0ZSBkaXJlY3RvcnkgJyR7ZGlyZWN0b3J5UGF0aH0nLmApO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxldCBtZXNzYWdlO1xuXG4gICAgbWVzc2FnZSA9IFVOQUJMRV9UT19DUkVBVEVfRElSRUNUT1JZX01FU1NBR0U7XG5cbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcblxuICAgICh7IG1lc3NhZ2UgfSA9IGVycm9yKTtcblxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkanVzdEZpbGVQYXRoKGZpbGVQYXRoLCBzb3VyY2VEaXJlY3RvcnlQYXRoLCB0YXJnZXREaXJlY3RvcnlQYXRoKSB7XG4gIGNvbnN0IHNvdXJjZURpcmVjdG9yeVBhdGhMZW5ndGggPSBzb3VyY2VEaXJlY3RvcnlQYXRoLmxlbmd0aCxcbiAgICAgICAgc3RhcnQgPSBzb3VyY2VEaXJlY3RvcnlQYXRoTGVuZ3RoICsgMSxcbiAgICAgICAgZmlsZU5hbWUgPSBmaWxlUGF0aC5zdWJzdHJpbmcoc3RhcnQpO1xuXG4gIGZpbGVQYXRoID0gY29uY2F0ZW5hdGVQYXRocyh0YXJnZXREaXJlY3RvcnlQYXRoLCBmaWxlTmFtZSk7XG5cbiAgcmV0dXJuIGZpbGVQYXRoO1xufSJdLCJuYW1lcyI6WyJjb3B5RmlsZSIsImNvcHlGaWxlcyIsImNyZWF0ZURpcmVjdG9yeSIsInJlYWREaXJlY3RvcnkiLCJyZWFkRmlsZSIsIndyaXRlRmlsZSIsImNvbmNhdGVuYXRlUGF0aHMiLCJwYXRoVXRpbGl0aWVzIiwiaXNFbnRyeUZpbGUiLCJmaWxlU3lzdGVtVXRpbGl0aWVzIiwiY2hlY2tFbnRyeUV4aXN0cyIsImNvcHlGaWxlQXN5bmMiLCJyZWFkRmlsZUFzeW5jIiwid3JpdGVGaWxlQXN5bmMiLCJyZWFkRGlyZWN0b3J5QXN5bmMiLCJjcmVhdGVEaXJlY3RvcnlBc3luYyIsInNvdXJjZUZpbGVQYXRoIiwidGFyZ2V0RmlsZVBhdGgiLCJjb250ZW50IiwiY29uc29sZSIsImxvZyIsImVycm9yIiwibWVzc2FnZSIsIlVOQUJMRV9UT19DT1BZX0ZJTEVfTUVTU0FHRSIsImZpbGVQYXRoIiwiVU5BQkxFX1RPX1JFQURfRklMRV9NRVNTQUdFIiwiVU5BQkxFX1RPX1dSSVRFX0ZJTEVfTUVTU0FHRSIsInNvdXJjZURpcmVjdG9yeVBhdGgiLCJ0YXJnZXREaXJlY3RvcnlQYXRoIiwiZGlyZWN0b3J5UGF0aCIsInJlY3Vyc2l2ZSIsImFkanVzdEZpbGVQYXRoIiwiY2FsbGJhY2siLCJlbnRyeU5hbWVzIiwiZm9yRWFjaCIsImVudHJ5TmFtZSIsImVudHJ5TmFtZUhpZGRlbk5hbWUiLCJpc0VudHJ5TmFtZUhpZGRlbk5hbWUiLCJlbnRyeVBhdGgiLCJlbnRyeUZpbGUiLCJVTkFCTEVfVE9fUkVBRF9ESVJFQ1RPUllfTUVTU0FHRSIsImVudHJ5RXhpc3RzIiwiVU5BQkxFX1RPX0NSRUFURV9ESVJFQ1RPUllfTUVTU0FHRSIsInNvdXJjZURpcmVjdG9yeVBhdGhMZW5ndGgiLCJsZW5ndGgiLCJzdGFydCIsImZpbGVOYW1lIiwic3Vic3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFvQmdCQTtlQUFBQTs7UUE4REFDO2VBQUFBOztRQXlEQUM7ZUFBQUE7O1FBckNBQztlQUFBQTs7UUE1REFDO2VBQUFBOztRQXNCQUM7ZUFBQUE7Ozt5QkE5RG1DO29CQUViO3dCQUthO0FBRW5ELElBQU0sQUFBRUMsbUJBQXFCQyx3QkFBYSxDQUFsQ0Qsa0JBQ0FFLGNBTTBDQyw4QkFBbUIsQ0FON0RELGFBQ0FFLG1CQUswQ0QsOEJBQW1CLENBTDdEQyxrQkFDQVYsQUFBVVcsZ0JBSWdDRiw4QkFBbUIsQ0FKN0RULFVBQ0FJLEFBQVVRLGdCQUdnQ0gsOEJBQW1CLENBSDdETCxVQUNBQyxBQUFXUSxpQkFFK0JKLDhCQUFtQixDQUY3REosV0FDQUYsQUFBZVcscUJBQzJCTCw4QkFBbUIsQ0FEN0ROLGVBQ0FELEFBQWlCYSx1QkFBeUJOLDhCQUFtQixDQUE3RFA7QUFFRCxTQUFTRixTQUFTZ0IsY0FBYyxFQUFFQyxjQUFjO0lBQ3JELElBQUlDLFVBQVU7SUFF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