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
const _necessary = require("necessary");
const _path = require("../utilities/path");
const _messages = require("../messages");
const { concatenatePaths } = _necessary.pathUtilities, { isEntryFile, checkEntryExists, copyFile: copyFileAsync, readFile: readFileAsync, writeFile: writeFileAsync, readDirectory: readDirectoryAsync, createDirectory: createDirectoryAsync } = _necessary.fileSystemUtilities;
function copyFile(sourceFilePath, targetFilePath) {
    let content = null;
    try {
        content = copyFileAsync(sourceFilePath, targetFilePath);
        console.log(`Copy file '${sourceFilePath}' to '${targetFilePath}'.`);
    } catch (error) {
        let message;
        message = _messages.UNABLE_TO_COPY_FILE_MESSAGE;
        console.log(message);
        ({ message } = error);
        console.log(message);
    }
    return content;
}
function readFile(filePath) {
    let content = null;
    try {
        content = readFileAsync(filePath);
        console.log(`Read file '${filePath}'.`);
    } catch (error) {
        let message;
        message = _messages.UNABLE_TO_READ_FILE_MESSAGE;
        console.log(message);
        ({ message } = error);
        console.log(message);
    }
    return content;
}
function writeFile(filePath, content) {
    try {
        writeFileAsync(filePath, content);
        console.log(`Write file '${filePath}'.`);
    } catch (error) {
        let message;
        message = _messages.UNABLE_TO_WRITE_FILE_MESSAGE;
        console.log(message);
        ({ message } = error);
        console.log(message);
    }
}
function copyFiles(sourceDirectoryPath, targetDirectoryPath) {
    let directoryPath;
    directoryPath = targetDirectoryPath; ///
    createDirectory(directoryPath);
    directoryPath = sourceDirectoryPath; ///
    const recursive = false;
    readDirectory(directoryPath, (filePath)=>{
        const sourceFilePath = filePath, targetFilePath = targetFilePathFromFilePathSourceDirectoryPathAndTargetDirectoryPath(filePath, sourceDirectoryPath, targetDirectoryPath);
        copyFile(sourceFilePath, targetFilePath);
    }, recursive);
}
function readDirectory(directoryPath, callback, recursive = true) {
    try {
        const entryNames = readDirectoryAsync(directoryPath);
        entryNames.forEach((entryName)=>{
            const entryNameHiddenName = (0, _path.isEntryNameHiddenName)(entryName);
            if (!entryNameHiddenName) {
                const entryPath = concatenatePaths(directoryPath, entryName), entryFile = isEntryFile(entryPath);
                if (entryFile) {
                    const filePath = entryPath; ///
                    callback(filePath);
                } else {
                    if (recursive) {
                        const directoryPath = entryPath; ///
                        readDirectory(directoryPath, callback, recursive);
                    }
                }
            }
        });
    } catch (error) {
        let message;
        message = _messages.UNABLE_TO_READ_DIRECTORY_MESSAGE;
        console.log(message);
        ({ message } = error);
        console.log(message);
    }
}
function createDirectory(directoryPath) {
    const entryPath = directoryPath, entryExists = checkEntryExists(entryPath);
    if (entryExists) {
        return;
    }
    try {
        createDirectoryAsync(directoryPath);
        console.log(`Create directory '${directoryPath}'.`);
    } catch (error) {
        let message;
        message = _messages.UNABLE_TO_CREATE_DIRECTORY_MESSAGE;
        console.log(message);
        ({ message } = error);
        console.log(message);
    }
}
function targetFilePathFromFilePathSourceDirectoryPathAndTargetDirectoryPath(filePath, sourceDirectoryPath, targetDirectoryPath) {
    const sourceDirectoryPathLength = sourceDirectoryPath.length, start = sourceDirectoryPathLength + 1, fileName = filePath.substring(start);
    filePath = concatenatePaths(targetDirectoryPath, fileName);
    return filePath;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZmlsZVN5c3RlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGF0aFV0aWxpdGllcywgZmlsZVN5c3RlbVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgaXNFbnRyeU5hbWVIaWRkZW5OYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXRoXCI7XG5pbXBvcnQgeyBVTkFCTEVfVE9fQ09QWV9GSUxFX01FU1NBR0UsXG4gICAgICAgICBVTkFCTEVfVE9fUkVBRF9GSUxFX01FU1NBR0UsXG4gICAgICAgICBVTkFCTEVfVE9fV1JJVEVfRklMRV9NRVNTQUdFLFxuICAgICAgICAgVU5BQkxFX1RPX1JFQURfRElSRUNUT1JZX01FU1NBR0UsXG4gICAgICAgICBVTkFCTEVfVE9fQ1JFQVRFX0RJUkVDVE9SWV9NRVNTQUdFIH0gZnJvbSBcIi4uL21lc3NhZ2VzXCI7XG5cbmNvbnN0IHsgY29uY2F0ZW5hdGVQYXRocyB9ID0gcGF0aFV0aWxpdGllcyxcbiAgICAgIHsgaXNFbnRyeUZpbGUsXG4gICAgICAgIGNoZWNrRW50cnlFeGlzdHMsXG4gICAgICAgIGNvcHlGaWxlOiBjb3B5RmlsZUFzeW5jLFxuICAgICAgICByZWFkRmlsZTogcmVhZEZpbGVBc3luYyxcbiAgICAgICAgd3JpdGVGaWxlOiB3cml0ZUZpbGVBc3luYyxcbiAgICAgICAgcmVhZERpcmVjdG9yeTogcmVhZERpcmVjdG9yeUFzeW5jLFxuICAgICAgICBjcmVhdGVEaXJlY3Rvcnk6IGNyZWF0ZURpcmVjdG9yeUFzeW5jIH0gPSBmaWxlU3lzdGVtVXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gY29weUZpbGUoc291cmNlRmlsZVBhdGgsIHRhcmdldEZpbGVQYXRoKSB7XG4gIGxldCBjb250ZW50ID0gbnVsbDtcblxuICB0cnkge1xuICAgIGNvbnRlbnQgPSBjb3B5RmlsZUFzeW5jKHNvdXJjZUZpbGVQYXRoLCB0YXJnZXRGaWxlUGF0aCk7XG5cbiAgICBjb25zb2xlLmxvZyhgQ29weSBmaWxlICcke3NvdXJjZUZpbGVQYXRofScgdG8gJyR7dGFyZ2V0RmlsZVBhdGh9Jy5gKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsZXQgbWVzc2FnZTtcblxuICAgIG1lc3NhZ2UgPSBVTkFCTEVfVE9fQ09QWV9GSUxFX01FU1NBR0U7XG5cbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcblxuICAgICh7IG1lc3NhZ2UgfSA9IGVycm9yKTtcblxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkRmlsZShmaWxlUGF0aCkge1xuICBsZXQgY29udGVudCA9IG51bGw7XG5cbiAgdHJ5IHtcbiAgICBjb250ZW50ID0gcmVhZEZpbGVBc3luYyhmaWxlUGF0aCk7XG5cbiAgICBjb25zb2xlLmxvZyhgUmVhZCBmaWxlICcke2ZpbGVQYXRofScuYCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbGV0IG1lc3NhZ2U7XG5cbiAgICBtZXNzYWdlID0gVU5BQkxFX1RPX1JFQURfRklMRV9NRVNTQUdFO1xuXG4gICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG5cbiAgICAoeyBtZXNzYWdlIH0gPSBlcnJvcik7XG5cbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgfVxuXG4gIHJldHVybiBjb250ZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd3JpdGVGaWxlKGZpbGVQYXRoLCBjb250ZW50KSB7XG4gIHRyeSB7XG4gICAgd3JpdGVGaWxlQXN5bmMoZmlsZVBhdGgsIGNvbnRlbnQpO1xuXG4gICAgY29uc29sZS5sb2coYFdyaXRlIGZpbGUgJyR7ZmlsZVBhdGh9Jy5gKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsZXQgbWVzc2FnZTtcblxuICAgIG1lc3NhZ2UgPSBVTkFCTEVfVE9fV1JJVEVfRklMRV9NRVNTQUdFO1xuXG4gICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG5cbiAgICAoeyBtZXNzYWdlIH0gPSBlcnJvcik7XG5cbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29weUZpbGVzKHNvdXJjZURpcmVjdG9yeVBhdGgsIHRhcmdldERpcmVjdG9yeVBhdGgpIHtcbiAgbGV0IGRpcmVjdG9yeVBhdGg7XG5cbiAgZGlyZWN0b3J5UGF0aCA9IHRhcmdldERpcmVjdG9yeVBhdGg7ICAvLy9cblxuICBjcmVhdGVEaXJlY3RvcnkoZGlyZWN0b3J5UGF0aCk7XG5cbiAgZGlyZWN0b3J5UGF0aCA9IHNvdXJjZURpcmVjdG9yeVBhdGg7ICAvLy9cblxuICBjb25zdCByZWN1cnNpdmUgPSBmYWxzZTtcblxuICByZWFkRGlyZWN0b3J5KGRpcmVjdG9yeVBhdGgsIChmaWxlUGF0aCkgPT4ge1xuICAgIGNvbnN0IHNvdXJjZUZpbGVQYXRoID0gZmlsZVBhdGgsICAvLy9cbiAgICAgICAgICB0YXJnZXRGaWxlUGF0aCA9IHRhcmdldEZpbGVQYXRoRnJvbUZpbGVQYXRoU291cmNlRGlyZWN0b3J5UGF0aEFuZFRhcmdldERpcmVjdG9yeVBhdGgoZmlsZVBhdGgsIHNvdXJjZURpcmVjdG9yeVBhdGgsIHRhcmdldERpcmVjdG9yeVBhdGgpO1xuXG4gICAgY29weUZpbGUoc291cmNlRmlsZVBhdGgsIHRhcmdldEZpbGVQYXRoKTtcbiAgfSwgcmVjdXJzaXZlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWREaXJlY3RvcnkoZGlyZWN0b3J5UGF0aCwgY2FsbGJhY2ssIHJlY3Vyc2l2ZSA9IHRydWUpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBlbnRyeU5hbWVzID0gcmVhZERpcmVjdG9yeUFzeW5jKGRpcmVjdG9yeVBhdGgpO1xuXG4gICAgZW50cnlOYW1lcy5mb3JFYWNoKChlbnRyeU5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5TmFtZUhpZGRlbk5hbWUgPSBpc0VudHJ5TmFtZUhpZGRlbk5hbWUoZW50cnlOYW1lKTtcblxuICAgICAgaWYgKCFlbnRyeU5hbWVIaWRkZW5OYW1lKSB7XG4gICAgICAgIGNvbnN0IGVudHJ5UGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMoZGlyZWN0b3J5UGF0aCwgZW50cnlOYW1lKSwgLy8vXG4gICAgICAgICAgICAgIGVudHJ5RmlsZSA9IGlzRW50cnlGaWxlKGVudHJ5UGF0aCk7XG5cbiAgICAgICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gZW50cnlQYXRoOyAvLy9cblxuICAgICAgICAgIGNhbGxiYWNrKGZpbGVQYXRoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAocmVjdXJzaXZlKSB7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3RvcnlQYXRoID0gZW50cnlQYXRoOyAgLy8vXG5cbiAgICAgICAgICAgIHJlYWREaXJlY3RvcnkoZGlyZWN0b3J5UGF0aCwgY2FsbGJhY2ssIHJlY3Vyc2l2ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbGV0IG1lc3NhZ2U7XG5cbiAgICBtZXNzYWdlID0gVU5BQkxFX1RPX1JFQURfRElSRUNUT1JZX01FU1NBR0U7XG5cbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcblxuICAgICh7IG1lc3NhZ2UgfSA9IGVycm9yKTtcblxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEaXJlY3RvcnkoZGlyZWN0b3J5UGF0aCkge1xuICBjb25zdCBlbnRyeVBhdGggPSBkaXJlY3RvcnlQYXRoLCAgLy8vXG4gICAgICAgIGVudHJ5RXhpc3RzID0gY2hlY2tFbnRyeUV4aXN0cyhlbnRyeVBhdGgpO1xuXG4gIGlmIChlbnRyeUV4aXN0cykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY3JlYXRlRGlyZWN0b3J5QXN5bmMoZGlyZWN0b3J5UGF0aCk7XG5cbiAgICBjb25zb2xlLmxvZyhgQ3JlYXRlIGRpcmVjdG9yeSAnJHtkaXJlY3RvcnlQYXRofScuYCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbGV0IG1lc3NhZ2U7XG5cbiAgICBtZXNzYWdlID0gVU5BQkxFX1RPX0NSRUFURV9ESVJFQ1RPUllfTUVTU0FHRTtcblxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuXG4gICAgKHsgbWVzc2FnZSB9ID0gZXJyb3IpO1xuXG4gICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGFyZ2V0RmlsZVBhdGhGcm9tRmlsZVBhdGhTb3VyY2VEaXJlY3RvcnlQYXRoQW5kVGFyZ2V0RGlyZWN0b3J5UGF0aChmaWxlUGF0aCwgc291cmNlRGlyZWN0b3J5UGF0aCwgdGFyZ2V0RGlyZWN0b3J5UGF0aCkge1xuICBjb25zdCBzb3VyY2VEaXJlY3RvcnlQYXRoTGVuZ3RoID0gc291cmNlRGlyZWN0b3J5UGF0aC5sZW5ndGgsXG4gICAgICAgIHN0YXJ0ID0gc291cmNlRGlyZWN0b3J5UGF0aExlbmd0aCArIDEsXG4gICAgICAgIGZpbGVOYW1lID0gZmlsZVBhdGguc3Vic3RyaW5nKHN0YXJ0KTtcblxuICBmaWxlUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHModGFyZ2V0RGlyZWN0b3J5UGF0aCwgZmlsZU5hbWUpO1xuXG4gIHJldHVybiBmaWxlUGF0aDtcbn0iXSwibmFtZXMiOlsiY29weUZpbGUiLCJjb3B5RmlsZXMiLCJjcmVhdGVEaXJlY3RvcnkiLCJyZWFkRGlyZWN0b3J5IiwicmVhZEZpbGUiLCJ3cml0ZUZpbGUiLCJjb25jYXRlbmF0ZVBhdGhzIiwicGF0aFV0aWxpdGllcyIsImlzRW50cnlGaWxlIiwiY2hlY2tFbnRyeUV4aXN0cyIsImNvcHlGaWxlQXN5bmMiLCJyZWFkRmlsZUFzeW5jIiwid3JpdGVGaWxlQXN5bmMiLCJyZWFkRGlyZWN0b3J5QXN5bmMiLCJjcmVhdGVEaXJlY3RvcnlBc3luYyIsImZpbGVTeXN0ZW1VdGlsaXRpZXMiLCJzb3VyY2VGaWxlUGF0aCIsInRhcmdldEZpbGVQYXRoIiwiY29udGVudCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIm1lc3NhZ2UiLCJVTkFCTEVfVE9fQ09QWV9GSUxFX01FU1NBR0UiLCJmaWxlUGF0aCIsIlVOQUJMRV9UT19SRUFEX0ZJTEVfTUVTU0FHRSIsIlVOQUJMRV9UT19XUklURV9GSUxFX01FU1NBR0UiLCJzb3VyY2VEaXJlY3RvcnlQYXRoIiwidGFyZ2V0RGlyZWN0b3J5UGF0aCIsImRpcmVjdG9yeVBhdGgiLCJyZWN1cnNpdmUiLCJ0YXJnZXRGaWxlUGF0aEZyb21GaWxlUGF0aFNvdXJjZURpcmVjdG9yeVBhdGhBbmRUYXJnZXREaXJlY3RvcnlQYXRoIiwiY2FsbGJhY2siLCJlbnRyeU5hbWVzIiwiZm9yRWFjaCIsImVudHJ5TmFtZSIsImVudHJ5TmFtZUhpZGRlbk5hbWUiLCJpc0VudHJ5TmFtZUhpZGRlbk5hbWUiLCJlbnRyeVBhdGgiLCJlbnRyeUZpbGUiLCJVTkFCTEVfVE9fUkVBRF9ESVJFQ1RPUllfTUVTU0FHRSIsImVudHJ5RXhpc3RzIiwiVU5BQkxFX1RPX0NSRUFURV9ESVJFQ1RPUllfTUVTU0FHRSIsInNvdXJjZURpcmVjdG9yeVBhdGhMZW5ndGgiLCJsZW5ndGgiLCJzdGFydCIsImZpbGVOYW1lIiwic3Vic3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFvQmdCQTtlQUFBQTs7UUE4REFDO2VBQUFBOztRQXdEQUM7ZUFBQUE7O1FBckNBQztlQUFBQTs7UUEzREFDO2VBQUFBOztRQXNCQUM7ZUFBQUE7OzsyQkE5RG1DO3NCQUViOzBCQUthO0FBRW5ELE1BQU0sRUFBRUMsZ0JBQWdCLEVBQUUsR0FBR0Msd0JBQWEsRUFDcEMsRUFBRUMsV0FBVyxFQUNYQyxnQkFBZ0IsRUFDaEJULFVBQVVVLGFBQWEsRUFDdkJOLFVBQVVPLGFBQWEsRUFDdkJOLFdBQVdPLGNBQWMsRUFDekJULGVBQWVV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