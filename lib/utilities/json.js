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
    get serialiseJSON () {
        return serialiseJSON;
    },
    get unserialiseJSON () {
        return unserialiseJSON;
    }
});
const _constants = require("../constants");
const _jsonTypes = require("../jsonTypes");
const { jsonUtilities } = require("necessary");
const { typeOf } = jsonUtilities;
function serialiseJSON(json) {
    const type = typeOf(json);
    switch(type){
        case _jsonTypes.ARRAY_JSON_TYPE:
            {
                let array = json; ///
                array = serialiseArray(array); ///
                json = array; ///
                break;
            }
        case _jsonTypes.OBJECT_JSON_TYPE:
            {
                let object = json; ///
                object = serialiseObject(object); ///
                json = object; ///
                break;
            }
        case _jsonTypes.PRIMITIVE_JSON_TYPE:
            {
                let primitive = json; ///
                primitive = serialisePrimitive(primitive); ///
                json = primitive; ///
                break;
            }
    }
    return json;
}
function unserialiseJSON(json) {
    const type = typeOf(json);
    switch(type){
        case _jsonTypes.ARRAY_JSON_TYPE:
            {
                let array = json; ///
                array = unserialiseArray(array); ///
                json = array; ///
                break;
            }
        case _jsonTypes.OBJECT_JSON_TYPE:
            {
                let object = json; ///
                object = unserialiseObject(object); ///
                json = object; ///
                break;
            }
        case _jsonTypes.PRIMITIVE_JSON_TYPE:
            {
                let primitive = json; ///
                primitive = unserialisePrimitive(primitive); ///
                json = primitive; ///
                break;
            }
    }
    return json;
}
function serialiseArray(array) {
    array = array.map((json)=>{
        json = serialiseJSON(json); ///
        return json;
    });
    return array;
}
function unserialiseArray(array) {
    array = array.map((json)=>{
        json = unserialiseJSON(json); ///
        return json;
    });
    return array;
}
function serialiseObject(object) {
    const keys = Object.keys(object), values = Object.values(object);
    object = keys.reduce((object, key, index)=>{
        let value = values[index], json = value; //
        json = serialiseJSON(json); ///
        value = json; ///
        object[key] = value;
        return object;
    }, {});
    return object;
}
function unserialiseObject(object) {
    const keys = Object.keys(object), values = Object.values(object);
    object = keys.reduce((object, key, index)=>{
        let value = values[index], json = value; //
        json = unserialiseJSON(json); ///
        value = json; ///
        object[key] = value;
        return object;
    }, {});
    return object;
}
function serialisePrimitive(primitive) {
    if (primitive === Infinity) {
        primitive = _constants.INFINITY;
    }
    return primitive;
}
function unserialisePrimitive(primitive) {
    if (primitive === _constants.INFINITY) {
        primitive = Infinity;
    }
    return primitive;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgeyBqc29uVXRpbGl0aWVzIH0gPSByZXF1aXJlKFwibmVjZXNzYXJ5XCIpO1xuXG5pbXBvcnQgeyBJTkZJTklUWSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEFSUkFZX0pTT05fVFlQRSwgT0JKRUNUX0pTT05fVFlQRSwgUFJJTUlUSVZFX0pTT05fVFlQRSB9IGZyb20gXCIuLi9qc29uVHlwZXNcIjtcblxuY29uc3QgeyB0eXBlT2YgfSA9IGpzb25VdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpc2VKU09OKGpzb24pIHtcbiAgY29uc3QgdHlwZSA9IHR5cGVPZihqc29uKTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEFSUkFZX0pTT05fVFlQRToge1xuICAgICAgbGV0IGFycmF5ID0ganNvbjsgLy8vXG5cbiAgICAgIGFycmF5ID0gc2VyaWFsaXNlQXJyYXkoYXJyYXkpOyAgLy8vXG5cbiAgICAgIGpzb24gPSBhcnJheTsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgT0JKRUNUX0pTT05fVFlQRToge1xuICAgICAgbGV0IG9iamVjdCA9IGpzb247ICAvLy9cblxuICAgICAgb2JqZWN0ID0gc2VyaWFsaXNlT2JqZWN0KG9iamVjdCk7IC8vL1xuXG4gICAgICBqc29uID0gb2JqZWN0OyAgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgUFJJTUlUSVZFX0pTT05fVFlQRToge1xuICAgICAgbGV0IHByaW1pdGl2ZSA9IGpzb247IC8vL1xuXG4gICAgICBwcmltaXRpdmUgPSBzZXJpYWxpc2VQcmltaXRpdmUocHJpbWl0aXZlKTsgIC8vL1xuXG4gICAgICBqc29uID0gcHJpbWl0aXZlOyAvLy9cblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGpzb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNlcmlhbGlzZUpTT04oanNvbikge1xuICBjb25zdCB0eXBlID0gdHlwZU9mKGpzb24pO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgQVJSQVlfSlNPTl9UWVBFOiB7XG4gICAgICBsZXQgYXJyYXkgPSBqc29uOyAvLy9cblxuICAgICAgYXJyYXkgPSB1bnNlcmlhbGlzZUFycmF5KGFycmF5KTsgIC8vL1xuXG4gICAgICBqc29uID0gYXJyYXk7IC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIE9CSkVDVF9KU09OX1RZUEU6IHtcbiAgICAgIGxldCBvYmplY3QgPSBqc29uOyAgLy8vXG5cbiAgICAgIG9iamVjdCA9IHVuc2VyaWFsaXNlT2JqZWN0KG9iamVjdCk7IC8vL1xuXG4gICAgICBqc29uID0gb2JqZWN0OyAgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgUFJJTUlUSVZFX0pTT05fVFlQRToge1xuICAgICAgbGV0IHByaW1pdGl2ZSA9IGpzb247IC8vL1xuXG4gICAgICBwcmltaXRpdmUgPSB1bnNlcmlhbGlzZVByaW1pdGl2ZShwcmltaXRpdmUpOyAgLy8vXG5cbiAgICAgIGpzb24gPSBwcmltaXRpdmU7IC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4ganNvbjtcbn1cblxuZnVuY3Rpb24gc2VyaWFsaXNlQXJyYXkoYXJyYXkpIHtcbiAgYXJyYXkgPSBhcnJheS5tYXAoKGpzb24pID0+IHtcbiAgICBqc29uID0gc2VyaWFsaXNlSlNPTihqc29uKTsgIC8vL1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH0pO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gdW5zZXJpYWxpc2VBcnJheShhcnJheSkge1xuICBhcnJheSA9IGFycmF5Lm1hcCgoanNvbikgPT4ge1xuICAgIGpzb24gPSB1bnNlcmlhbGlzZUpTT04oanNvbik7ICAvLy9cblxuICAgIHJldHVybiBqc29uO1xuICB9KTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIHNlcmlhbGlzZU9iamVjdChvYmplY3QpIHtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCksXG4gICAgICAgIHZhbHVlcyA9IE9iamVjdC52YWx1ZXMob2JqZWN0KTtcblxuICBvYmplY3QgPSBrZXlzLnJlZHVjZSgob2JqZWN0LCBrZXksIGluZGV4KSA9PiB7XG4gICAgbGV0IHZhbHVlID0gdmFsdWVzW2luZGV4XSxcbiAgICAgICAganNvbiA9IHZhbHVlOyAvL1xuXG4gICAganNvbiA9IHNlcmlhbGlzZUpTT04oanNvbik7IC8vL1xuXG4gICAgdmFsdWUgPSBqc29uOyAvLy9cblxuICAgIG9iamVjdFtrZXldID0gdmFsdWU7XG5cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9LCB7fSk7XG5cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxuZnVuY3Rpb24gdW5zZXJpYWxpc2VPYmplY3Qob2JqZWN0KSB7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpLFxuICAgICAgICB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKG9iamVjdCk7XG5cbiAgb2JqZWN0ID0ga2V5cy5yZWR1Y2UoKG9iamVjdCwga2V5LCBpbmRleCkgPT4ge1xuICAgIGxldCB2YWx1ZSA9IHZhbHVlc1tpbmRleF0sXG4gICAgICAgIGpzb24gPSB2YWx1ZTsgLy9cblxuICAgIGpzb24gPSB1bnNlcmlhbGlzZUpTT04oanNvbik7IC8vL1xuXG4gICAgdmFsdWUgPSBqc29uOyAvLy9cblxuICAgIG9iamVjdFtrZXldID0gdmFsdWU7XG5cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9LCB7fSk7XG5cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxuZnVuY3Rpb24gc2VyaWFsaXNlUHJpbWl0aXZlKHByaW1pdGl2ZSkge1xuICBpZiAocHJpbWl0aXZlID09PSBJbmZpbml0eSkge1xuICAgIHByaW1pdGl2ZSA9IElORklOSVRZO1xuICB9XG5cbiAgcmV0dXJuIHByaW1pdGl2ZTtcbn1cblxuZnVuY3Rpb24gdW5zZXJpYWxpc2VQcmltaXRpdmUocHJpbWl0aXZlKSB7XG4gIGlmIChwcmltaXRpdmUgPT09IElORklOSVRZKSB7XG4gICAgcHJpbWl0aXZlID0gSW5maW5pdHk7XG4gIH1cblxuICByZXR1cm4gcHJpbWl0aXZlO1xufVxuIl0sIm5hbWVzIjpbInNlcmlhbGlzZUpTT04iLCJ1bnNlcmlhbGlzZUpTT04iLCJqc29uVXRpbGl0aWVzIiwicmVxdWlyZSIsInR5cGVPZiIsImpzb24iLCJ0eXBlIiwiQVJSQVlfSlNPTl9UWVBFIiwiYXJyYXkiLCJzZXJpYWxpc2VBcnJheSIsIk9CSkVDVF9KU09OX1RZUEUiLCJvYmplY3QiLCJzZXJpYWxpc2VPYmplY3QiLCJQUklNSVRJVkVfSlNPTl9UWVBFIiwicHJpbWl0aXZlIiwic2VyaWFsaXNlUHJpbWl0aXZlIiwidW5zZXJpYWxpc2VBcnJheSIsInVuc2VyaWFsaXNlT2JqZWN0IiwidW5zZXJpYWxpc2VQcmltaXRpdmUiLCJtYXAiLCJrZXlzIiwiT2JqZWN0IiwidmFsdWVzIiwicmVkdWNlIiwia2V5IiwiaW5kZXgiLCJ2YWx1ZSIsIkluZmluaXR5IiwiSU5GSU5JVFkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQVNnQkE7ZUFBQUE7O1FBc0NBQztlQUFBQTs7OzJCQTNDUzsyQkFDOEM7QUFIdkUsTUFBTSxFQUFFQyxhQUFhLEVBQUUsR0FBR0MsUUFBUTtBQUtsQyxNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHRjtBQUVaLFNBQVNGLGNBQWNLLElBQUk7SUFDaEMsTUFBTUMsT0FBT0YsT0FBT0M7SUFFcEIsT0FBUUM7UUFDTixLQUFLQywwQkFBZTtZQUFFO2dCQUNwQixJQUFJQyxRQUFRSCxNQUFNLEdBQUc7Z0JBRXJCRyxRQUFRQyxlQUFlRCxRQUFTLEdBQUc7Z0JBRW5DSCxPQUFPRyxPQUFPLEdBQUc7Z0JBRWpCO1lBQ0Y7UUFFQSxLQUFL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