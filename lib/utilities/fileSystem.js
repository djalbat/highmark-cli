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
        var sourceFilePath = filePath, targetFilePath = targetFilePathFromFilePathSourceDirectoryPathAndTargetDirectoryPath(filePath, sourceDirectoryPath, targetDirectoryPath);
        copyFile(sourceFilePath, targetFilePath);
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
function targetFilePathFromFilePathSourceDirectoryPathAndTargetDirectoryPath(filePath, sourceDirectoryPath, targetDirectoryPath) {
    var sourceDirectoryPathLength = sourceDirectoryPath.length, start = sourceDirectoryPathLength + 1, fileName = filePath.substring(start);
    filePath = concatenatePaths(targetDirectoryPath, fileName);
    return filePath;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZmlsZVN5c3RlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGF0aFV0aWxpdGllcywgZmlsZVN5c3RlbVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgaXNFbnRyeU5hbWVIaWRkZW5OYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXRoXCI7XG5pbXBvcnQgeyBVTkFCTEVfVE9fQ09QWV9GSUxFX01FU1NBR0UsXG4gICAgICAgICBVTkFCTEVfVE9fUkVBRF9GSUxFX01FU1NBR0UsXG4gICAgICAgICBVTkFCTEVfVE9fV1JJVEVfRklMRV9NRVNTQUdFLFxuICAgICAgICAgVU5BQkxFX1RPX1JFQURfRElSRUNUT1JZX01FU1NBR0UsXG4gICAgICAgICBVTkFCTEVfVE9fQ1JFQVRFX0RJUkVDVE9SWV9NRVNTQUdFIH0gZnJvbSBcIi4uL21lc3NhZ2VzXCI7XG5cbmNvbnN0IHsgY29uY2F0ZW5hdGVQYXRocyB9ID0gcGF0aFV0aWxpdGllcyxcbiAgICAgIHsgaXNFbnRyeUZpbGUsXG4gICAgICAgIGNoZWNrRW50cnlFeGlzdHMsXG4gICAgICAgIGNvcHlGaWxlOiBjb3B5RmlsZUFzeW5jLFxuICAgICAgICByZWFkRmlsZTogcmVhZEZpbGVBc3luYyxcbiAgICAgICAgd3JpdGVGaWxlOiB3cml0ZUZpbGVBc3luYyxcbiAgICAgICAgcmVhZERpcmVjdG9yeTogcmVhZERpcmVjdG9yeUFzeW5jLFxuICAgICAgICBjcmVhdGVEaXJlY3Rvcnk6IGNyZWF0ZURpcmVjdG9yeUFzeW5jIH0gPSBmaWxlU3lzdGVtVXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gY29weUZpbGUoc291cmNlRmlsZVBhdGgsIHRhcmdldEZpbGVQYXRoKSB7XG4gIGxldCBjb250ZW50ID0gbnVsbDtcblxuICB0cnkge1xuICAgIGNvbnRlbnQgPSBjb3B5RmlsZUFzeW5jKHNvdXJjZUZpbGVQYXRoLCB0YXJnZXRGaWxlUGF0aCk7XG5cbiAgICBjb25zb2xlLmxvZyhgQ29weSBmaWxlICcke3NvdXJjZUZpbGVQYXRofScgdG8gJyR7dGFyZ2V0RmlsZVBhdGh9Jy5gKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsZXQgbWVzc2FnZTtcblxuICAgIG1lc3NhZ2UgPSBVTkFCTEVfVE9fQ09QWV9GSUxFX01FU1NBR0U7XG5cbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcblxuICAgICh7IG1lc3NhZ2UgfSA9IGVycm9yKTtcblxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkRmlsZShmaWxlUGF0aCkge1xuICBsZXQgY29udGVudCA9IG51bGw7XG5cbiAgdHJ5IHtcbiAgICBjb250ZW50ID0gcmVhZEZpbGVBc3luYyhmaWxlUGF0aCk7XG5cbiAgICBjb25zb2xlLmxvZyhgUmVhZCBmaWxlICcke2ZpbGVQYXRofScuYCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbGV0IG1lc3NhZ2U7XG5cbiAgICBtZXNzYWdlID0gVU5BQkxFX1RPX1JFQURfRklMRV9NRVNTQUdFO1xuXG4gICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG5cbiAgICAoeyBtZXNzYWdlIH0gPSBlcnJvcik7XG5cbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgfVxuXG4gIHJldHVybiBjb250ZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd3JpdGVGaWxlKGZpbGVQYXRoLCBjb250ZW50KSB7XG4gIHRyeSB7XG4gICAgd3JpdGVGaWxlQXN5bmMoZmlsZVBhdGgsIGNvbnRlbnQpO1xuXG4gICAgY29uc29sZS5sb2coYFdyaXRlIGZpbGUgJyR7ZmlsZVBhdGh9Jy5gKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsZXQgbWVzc2FnZTtcblxuICAgIG1lc3NhZ2UgPSBVTkFCTEVfVE9fV1JJVEVfRklMRV9NRVNTQUdFO1xuXG4gICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG5cbiAgICAoeyBtZXNzYWdlIH0gPSBlcnJvcik7XG5cbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29weUZpbGVzKHNvdXJjZURpcmVjdG9yeVBhdGgsIHRhcmdldERpcmVjdG9yeVBhdGgpIHtcbiAgbGV0IGRpcmVjdG9yeVBhdGg7XG5cbiAgZGlyZWN0b3J5UGF0aCA9IHRhcmdldERpcmVjdG9yeVBhdGg7ICAvLy9cblxuICBjcmVhdGVEaXJlY3RvcnkoZGlyZWN0b3J5UGF0aCk7XG5cbiAgZGlyZWN0b3J5UGF0aCA9IHNvdXJjZURpcmVjdG9yeVBhdGg7ICAvLy9cblxuICBjb25zdCByZWN1cnNpdmUgPSBmYWxzZTtcblxuICByZWFkRGlyZWN0b3J5KGRpcmVjdG9yeVBhdGgsIChmaWxlUGF0aCkgPT4ge1xuICAgIGNvbnN0IHNvdXJjZUZpbGVQYXRoID0gZmlsZVBhdGgsICAvLy9cbiAgICAgICAgICB0YXJnZXRGaWxlUGF0aCA9IHRhcmdldEZpbGVQYXRoRnJvbUZpbGVQYXRoU291cmNlRGlyZWN0b3J5UGF0aEFuZFRhcmdldERpcmVjdG9yeVBhdGgoZmlsZVBhdGgsIHNvdXJjZURpcmVjdG9yeVBhdGgsIHRhcmdldERpcmVjdG9yeVBhdGgpO1xuXG4gICAgY29weUZpbGUoc291cmNlRmlsZVBhdGgsIHRhcmdldEZpbGVQYXRoKTtcbiAgfSwgcmVjdXJzaXZlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWREaXJlY3RvcnkoZGlyZWN0b3J5UGF0aCwgY2FsbGJhY2ssIHJlY3Vyc2l2ZSA9IHRydWUpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBlbnRyeU5hbWVzID0gcmVhZERpcmVjdG9yeUFzeW5jKGRpcmVjdG9yeVBhdGgpO1xuXG4gICAgZW50cnlOYW1lcy5mb3JFYWNoKChlbnRyeU5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5TmFtZUhpZGRlbk5hbWUgPSBpc0VudHJ5TmFtZUhpZGRlbk5hbWUoZW50cnlOYW1lKTtcblxuICAgICAgaWYgKCFlbnRyeU5hbWVIaWRkZW5OYW1lKSB7XG4gICAgICAgIGNvbnN0IGVudHJ5UGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMoZGlyZWN0b3J5UGF0aCwgZW50cnlOYW1lKSwgLy8vXG4gICAgICAgICAgICAgIGVudHJ5RmlsZSA9IGlzRW50cnlGaWxlKGVudHJ5UGF0aCk7XG5cbiAgICAgICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gZW50cnlQYXRoOyAvLy9cblxuICAgICAgICAgIGNhbGxiYWNrKGZpbGVQYXRoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAocmVjdXJzaXZlKSB7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3RvcnlQYXRoID0gZW50cnlQYXRoOyAgLy8vXG5cbiAgICAgICAgICAgIHJlYWREaXJlY3RvcnkoZGlyZWN0b3J5UGF0aCwgY2FsbGJhY2ssIHJlY3Vyc2l2ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbGV0IG1lc3NhZ2U7XG5cbiAgICBtZXNzYWdlID0gVU5BQkxFX1RPX1JFQURfRElSRUNUT1JZX01FU1NBR0U7XG5cbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcblxuICAgICh7IG1lc3NhZ2UgfSA9IGVycm9yKTtcblxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEaXJlY3RvcnkoZGlyZWN0b3J5UGF0aCkge1xuICBjb25zdCBlbnRyeVBhdGggPSBkaXJlY3RvcnlQYXRoLCAgLy8vXG4gICAgICAgIGVudHJ5RXhpc3RzID0gY2hlY2tFbnRyeUV4aXN0cyhlbnRyeVBhdGgpO1xuXG4gIGlmIChlbnRyeUV4aXN0cykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY3JlYXRlRGlyZWN0b3J5QXN5bmMoZGlyZWN0b3J5UGF0aCk7XG5cbiAgICBjb25zb2xlLmxvZyhgQ3JlYXRlIGRpcmVjdG9yeSAnJHtkaXJlY3RvcnlQYXRofScuYCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbGV0IG1lc3NhZ2U7XG5cbiAgICBtZXNzYWdlID0gVU5BQkxFX1RPX0NSRUFURV9ESVJFQ1RPUllfTUVTU0FHRTtcblxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuXG4gICAgKHsgbWVzc2FnZSB9ID0gZXJyb3IpO1xuXG4gICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGFyZ2V0RmlsZVBhdGhGcm9tRmlsZVBhdGhTb3VyY2VEaXJlY3RvcnlQYXRoQW5kVGFyZ2V0RGlyZWN0b3J5UGF0aChmaWxlUGF0aCwgc291cmNlRGlyZWN0b3J5UGF0aCwgdGFyZ2V0RGlyZWN0b3J5UGF0aCkge1xuICBjb25zdCBzb3VyY2VEaXJlY3RvcnlQYXRoTGVuZ3RoID0gc291cmNlRGlyZWN0b3J5UGF0aC5sZW5ndGgsXG4gICAgICAgIHN0YXJ0ID0gc291cmNlRGlyZWN0b3J5UGF0aExlbmd0aCArIDEsXG4gICAgICAgIGZpbGVOYW1lID0gZmlsZVBhdGguc3Vic3RyaW5nKHN0YXJ0KTtcblxuICBmaWxlUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHModGFyZ2V0RGlyZWN0b3J5UGF0aCwgZmlsZU5hbWUpO1xuXG4gIHJldHVybiBmaWxlUGF0aDtcbn0iXSwibmFtZXMiOlsiY29weUZpbGUiLCJjb3B5RmlsZXMiLCJjcmVhdGVEaXJlY3RvcnkiLCJyZWFkRGlyZWN0b3J5IiwicmVhZEZpbGUiLCJ3cml0ZUZpbGUiLCJjb25jYXRlbmF0ZVBhdGhzIiwicGF0aFV0aWxpdGllcyIsImlzRW50cnlGaWxlIiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsImNoZWNrRW50cnlFeGlzdHMiLCJjb3B5RmlsZUFzeW5jIiwicmVhZEZpbGVBc3luYyIsIndyaXRlRmlsZUFzeW5jIiwicmVhZERpcmVjdG9yeUFzeW5jIiwiY3JlYXRlRGlyZWN0b3J5QXN5bmMiLCJzb3VyY2VGaWxlUGF0aCIsInRhcmdldEZpbGVQYXRoIiwiY29udGVudCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIm1lc3NhZ2UiLCJVTkFCTEVfVE9fQ09QWV9GSUxFX01FU1NBR0UiLCJmaWxlUGF0aCIsIlVOQUJMRV9UT19SRUFEX0ZJTEVfTUVTU0FHRSIsIlVOQUJMRV9UT19XUklURV9GSUxFX01FU1NBR0UiLCJzb3VyY2VEaXJlY3RvcnlQYXRoIiwidGFyZ2V0RGlyZWN0b3J5UGF0aCIsImRpcmVjdG9yeVBhdGgiLCJyZWN1cnNpdmUiLCJ0YXJnZXRGaWxlUGF0aEZyb21GaWxlUGF0aFNvdXJjZURpcmVjdG9yeVBhdGhBbmRUYXJnZXREaXJlY3RvcnlQYXRoIiwiY2FsbGJhY2siLCJlbnRyeU5hbWVzIiwiZm9yRWFjaCIsImVudHJ5TmFtZSIsImVudHJ5TmFtZUhpZGRlbk5hbWUiLCJpc0VudHJ5TmFtZUhpZGRlbk5hbWUiLCJlbnRyeVBhdGgiLCJlbnRyeUZpbGUiLCJVTkFCTEVfVE9fUkVBRF9ESVJFQ1RPUllfTUVTU0FHRSIsImVudHJ5RXhpc3RzIiwiVU5BQkxFX1RPX0NSRUFURV9ESVJFQ1RPUllfTUVTU0FHRSIsInNvdXJjZURpcmVjdG9yeVBhdGhMZW5ndGgiLCJsZW5ndGgiLCJzdGFydCIsImZpbGVOYW1lIiwic3Vic3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFvQmdCQTtlQUFBQTs7UUE4REFDO2VBQUFBOztRQXdEQUM7ZUFBQUE7O1FBckNBQztlQUFBQTs7UUEzREFDO2VBQUFBOztRQXNCQUM7ZUFBQUE7Ozt5QkE5RG1DO29CQUViO3dCQUthO0FBRW5ELElBQU0sQUFBRUMsbUJBQXFCQyx3QkFBYSxDQUFsQ0Qsa0JBQ0FFLGNBTTBDQyw4QkFBbUIsQ0FON0RELGFBQ0FFLG1CQUswQ0QsOEJBQW1CLENBTDdEQyxrQkFDQVYsQUFBVVcsZ0JBSWdDRiw4QkFBbUIsQ0FKN0RULFVBQ0FJLEFBQVVRLGdCQUdnQ0gsOEJBQW1CLENBSDdETCxVQUNBQyxBQUFXUSxpQkFFK0JKLDhCQUFtQixDQUY3REosV0FDQUYsQUFBZVcscUJBQzJCTCw4QkFBbUIsQ0FEN0ROLGVBQ0FELEFBQWlCYSx1QkFBeUJOLDhCQUFtQixDQUE3RFA7QUFFRCxTQUFTRixTQUFTZ0IsY0FBYyxFQUFFQyxjQUFjO0lBQ3JELElBQUlDLFVBQVU7SUFFZCxJQUFJO1FBQ0ZBLFVBQVVQLGNBQWNLLGdCQUFnQkM7UUFFeENFLFFBQVFDLEdBQUcsQ0FBQyxBQUFDLGNBQW9DSCxPQUF2QkQsZ0JBQWUsVUFBdUIsT0FBZkMsZ0JBQWU7SUFDbEUsRUFBRSxPQUFPSSxPQUFPO1FBQ2QsSUFBSUM7UUFFSkEsVUFBVUMscUNBQTJCO1FBRXJDSixRQUFRQyxHQUFHLENBQUNFO1FBRVRBLFVBQVlELE1BQVpDO1FBRUhILFFBQVFDLEdBQUcsQ0FBQ0U7SUFDZDtJQUVBLE9BQU9KO0FBQ1Q7QUFFTyxTQUFTZCxTQUFTb0IsUUFBUTtJQUMvQixJQUFJTixVQUFVO0lBRWQsSUFBSTtRQUNGQSxVQUFVTixjQUFjWTtRQUV4QkwsUUFBUUMsR0FBRyxDQUFDLEFBQUMsY0FBc0IsT0FBVEksVUFBUztJQUNyQyxFQUFFLE9BQU9ILE9BQU87UUFDZCxJQUFJQztRQUVKQSxVQUFVRyxxQ0FBMkI7UUFFckNOLFFBQVFDLEdBQUcsQ0FBQ0U7UUFFVEEsVUFBWUQsTUFBWkM7UUFFSEgsUUFBUUMsR0FBRyxDQUFDRTtJQUNkO0lBRUEsT0FBT0o7QUFDVDtBQUVPLFNBQVNiLFVBQVVtQixRQUFRLEVBQUVOLE9BQU87SUFDekMsSUFBSTtRQUNGTCxlQUFlVyxVQUFVTjtRQUV6QkMsUUFBUUMsR0FBRyxDQUFDLEFBQUMsZUFBdUIsT0FBVEksVUFBUztJQUN0QyxFQUFFLE9BQU9ILE9BQU87UUFDZCxJQUFJQztRQUVKQSxVQUFVSSxzQ0FBNEI7UUFFdENQLFFBQVFDLEdBQUcsQ0FBQ0U7UUFFVEEsVUFBWUQsTUFBWkM7UUFFSEgsUUFBUUMsR0FBRyxDQUFDRTtJQUNkO0FBQ0Y7QUFFTyxTQUFTckIsVUFBVTBCLG1CQUFtQixFQUFFQyxtQkFBbUI7SUFDaEUsSUFBSUM7SUFFSkEsZ0JBQWdCRCxxQkFBc0IsR0FBRztJQUV6QzFCLGdCQUFnQjJCO0lBRWhCQSxnQkFBZ0JGLHFCQUFzQixHQUFHO0lBRXpDLElBQU1HLFlBQVk7SUFFbEIzQixjQUFjMEIsZUFBZSxTQUFDTDtRQUM1QixJQUFNUixpQkFBaUJRLFVBQ2pCUCxpQkFBaUJjLG9FQUFvRVAsVUFBVUcscUJBQXFCQztRQUUxSDVCLFNBQVNnQixnQkFBZ0JDO0lBQzNCLEdBQUdhO0FBQ0w7QUFFTyxTQUFTM0IsY0FBYzBCLGFBQWEsRUFBRUcsUUFBUTtRQUFFRixZQUFBQSxpRUFBWTtJQUNqRSxJQUFJO1FBQ0YsSUFBTUcsYUFBYW5CLG1CQUFtQmU7UUFFdENJLFdBQVdDLE9BQU8sQ0FBQyxTQUFDQztZQUNsQixJQUFNQyxzQkFBc0JDLElBQUFBLDJCQUFxQixFQUFDRjtZQUVsRCxJQUFJLENBQUNDLHFCQUFxQjtnQkFDeEIsSUFBTUUsWUFBWWhDLGlCQUFpQnVCLGVBQWVNLFlBQzVDSSxZQUFZL0IsWUFBWThCO2dCQUU5QixJQUFJQyxXQUFXO29CQUNiLElBQU1mLFdBQVdjLFdBQVcsR0FBRztvQkFFL0JOLFNBQVNSO2dCQUNYLE9BQU87b0JBQ0wsSUFBSU0sV0FBVzt3QkFDYixJQUFNRCxrQkFBZ0JTLFdBQVksR0FBRzt3QkFFckNuQyxjQUFjMEIsaUJBQWVHLFVBQVVGO29CQUN6QztnQkFDRjtZQUNGO1FBQ0Y7SUFDRixFQUFFLE9BQU9ULE9BQU87UUFDZCxJQUFJQztRQUVKQSxVQUFVa0IsMENBQWdDO1FBRTFDckIsUUFBUUMsR0FBRyxDQUFDRTtRQUVUQSxVQUFZRCxNQUFaQztRQUVISCxRQUFRQyxHQUFHLENBQUNFO0lBQ2Q7QUFDRjtBQUVPLFNBQVNwQixnQkFBZ0IyQixhQUFhO0lBQzNDLElBQU1TLFlBQVlULGVBQ1pZLGNBQWMvQixpQkFBaUI0QjtJQUVyQyxJQUFJRyxhQUFhO1FBQ2Y7SUFDRjtJQUVBLElBQUk7UUFDRjFCLHFCQUFxQmM7UUFFckJWLFFBQVFDLEdBQUcsQ0FBQyxBQUFDLHFCQUFrQyxPQUFkUyxlQUFjO0lBQ2pELEVBQUUsT0FBT1IsT0FBTztRQUNkLElBQUlDO1FBRUpBLFVBQVVvQiw0Q0FBa0M7UUFFNUN2QixRQUFRQyxHQUFHLENBQUNFO1FBRVRBLFVBQVlELE1BQVpDO1FBRUhILFFBQVFDLEdBQUcsQ0FBQ0U7SUFDZDtBQUNGO0FBRUEsU0FBU1Msb0VBQW9FUCxRQUFRLEVBQUVHLG1CQUFtQixFQUFFQyxtQkFBbUI7SUFDN0gsSUFBTWUsNEJBQTRCaEIsb0JBQW9CaUIsTUFBTSxFQUN0REMsUUFBUUYsNEJBQTRCLEdBQ3BDRyxXQUFXdEIsU0FBU3VCLFNBQVMsQ0FBQ0Y7SUFFcENyQixXQUFXbEIsaUJBQWlCc0IscUJBQXFCa0I7SUFFakQsT0FBT3RCO0FBQ1QifQ==