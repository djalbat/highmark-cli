"use strict";
import { typeOf } from "../utilities/type";
import { INFINITY } from "../constants";
import { ARRAY_JSON_TYPE, OBJECT_JSON_TYPE, PRIMITIVE_JSON_TYPE } from "../jsonTypes";
export function serialiseJSON(json) {
    var type = typeOf(json);
    switch(type){
        case ARRAY_JSON_TYPE:
            {
                var array = json; ///
                array = serialiseArray(array); ///
                json = array; ///
                break;
            }
        case OBJECT_JSON_TYPE:
            {
                var object = json; ///
                object = serialiseObject(object); ///
                json = object; ///
                break;
            }
        case PRIMITIVE_JSON_TYPE:
            {
                var primitive = json; ///
                primitive = serialisePrimitive(primitive); ///
                json = primitive; ///
                break;
            }
    }
    return json;
}
export function unserialiseJSON(json) {
    var type = typeOf(json);
    switch(type){
        case ARRAY_JSON_TYPE:
            {
                var array = json; ///
                array = unserialiseArray(array); ///
                json = array; ///
                break;
            }
        case OBJECT_JSON_TYPE:
            {
                var object = json; ///
                object = unserialiseObject(object); ///
                json = object; ///
                break;
            }
        case PRIMITIVE_JSON_TYPE:
            {
                var primitive = json; ///
                primitive = unserialisePrimitive(primitive); ///
                json = primitive; ///
                break;
            }
    }
    return json;
}
function serialiseArray(array) {
    array = array.map(function(json) {
        json = serialiseJSON(json); ///
        return json;
    });
    return array;
}
function unserialiseArray(array) {
    array = array.map(function(json) {
        json = unserialiseJSON(json); ///
        return json;
    });
    return array;
}
function serialiseObject(object) {
    var keys = Object.keys(object), values = Object.values(object);
    object = keys.reduce(function(object, key, index) {
        var value = values[index], json = value; //
        json = serialiseJSON(json); ///
        value = json; ///
        object[key] = value;
        return object;
    }, {});
    return object;
}
function unserialiseObject(object) {
    var keys = Object.keys(object), values = Object.values(object);
    object = keys.reduce(function(object, key, index) {
        var value = values[index], json = value; //
        json = unserialiseJSON(json); ///
        value = json; ///
        object[key] = value;
        return object;
    }, {});
    return object;
}
function serialisePrimitive(primitive) {
    if (primitive === Infinity) {
        primitive = INFINITY;
    }
    return primitive;
}
function unserialisePrimitive(primitive) {
    if (primitive === INFINITY) {
        primitive = Infinity;
    }
    return primitive;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgdHlwZU9mIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90eXBlXCI7XG5pbXBvcnQgeyBJTkZJTklUWSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEFSUkFZX0pTT05fVFlQRSwgT0JKRUNUX0pTT05fVFlQRSwgUFJJTUlUSVZFX0pTT05fVFlQRSB9IGZyb20gXCIuLi9qc29uVHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGlzZUpTT04oanNvbikge1xuICBjb25zdCB0eXBlID0gdHlwZU9mKGpzb24pO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgQVJSQVlfSlNPTl9UWVBFOiB7XG4gICAgICBsZXQgYXJyYXkgPSBqc29uOyAvLy9cblxuICAgICAgYXJyYXkgPSBzZXJpYWxpc2VBcnJheShhcnJheSk7ICAvLy9cblxuICAgICAganNvbiA9IGFycmF5OyAvLy9cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBPQkpFQ1RfSlNPTl9UWVBFOiB7XG4gICAgICBsZXQgb2JqZWN0ID0ganNvbjsgIC8vL1xuXG4gICAgICBvYmplY3QgPSBzZXJpYWxpc2VPYmplY3Qob2JqZWN0KTsgLy8vXG5cbiAgICAgIGpzb24gPSBvYmplY3Q7ICAvLy9cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBQUklNSVRJVkVfSlNPTl9UWVBFOiB7XG4gICAgICBsZXQgcHJpbWl0aXZlID0ganNvbjsgLy8vXG5cbiAgICAgIHByaW1pdGl2ZSA9IHNlcmlhbGlzZVByaW1pdGl2ZShwcmltaXRpdmUpOyAgLy8vXG5cbiAgICAgIGpzb24gPSBwcmltaXRpdmU7IC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4ganNvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2VyaWFsaXNlSlNPTihqc29uKSB7XG4gIGNvbnN0IHR5cGUgPSB0eXBlT2YoanNvbik7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBBUlJBWV9KU09OX1RZUEU6IHtcbiAgICAgIGxldCBhcnJheSA9IGpzb247IC8vL1xuXG4gICAgICBhcnJheSA9IHVuc2VyaWFsaXNlQXJyYXkoYXJyYXkpOyAgLy8vXG5cbiAgICAgIGpzb24gPSBhcnJheTsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgT0JKRUNUX0pTT05fVFlQRToge1xuICAgICAgbGV0IG9iamVjdCA9IGpzb247ICAvLy9cblxuICAgICAgb2JqZWN0ID0gdW5zZXJpYWxpc2VPYmplY3Qob2JqZWN0KTsgLy8vXG5cbiAgICAgIGpzb24gPSBvYmplY3Q7ICAvLy9cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBQUklNSVRJVkVfSlNPTl9UWVBFOiB7XG4gICAgICBsZXQgcHJpbWl0aXZlID0ganNvbjsgLy8vXG5cbiAgICAgIHByaW1pdGl2ZSA9IHVuc2VyaWFsaXNlUHJpbWl0aXZlKHByaW1pdGl2ZSk7ICAvLy9cblxuICAgICAganNvbiA9IHByaW1pdGl2ZTsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBqc29uO1xufVxuXG5mdW5jdGlvbiBzZXJpYWxpc2VBcnJheShhcnJheSkge1xuICBhcnJheSA9IGFycmF5Lm1hcCgoanNvbikgPT4ge1xuICAgIGpzb24gPSBzZXJpYWxpc2VKU09OKGpzb24pOyAgLy8vXG5cbiAgICByZXR1cm4ganNvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiB1bnNlcmlhbGlzZUFycmF5KGFycmF5KSB7XG4gIGFycmF5ID0gYXJyYXkubWFwKChqc29uKSA9PiB7XG4gICAganNvbiA9IHVuc2VyaWFsaXNlSlNPTihqc29uKTsgIC8vL1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH0pO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gc2VyaWFsaXNlT2JqZWN0KG9iamVjdCkge1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KSxcbiAgICAgICAgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhvYmplY3QpO1xuXG4gIG9iamVjdCA9IGtleXMucmVkdWNlKChvYmplY3QsIGtleSwgaW5kZXgpID0+IHtcbiAgICBsZXQgdmFsdWUgPSB2YWx1ZXNbaW5kZXhdLFxuICAgICAgICBqc29uID0gdmFsdWU7IC8vXG5cbiAgICBqc29uID0gc2VyaWFsaXNlSlNPTihqc29uKTsgLy8vXG5cbiAgICB2YWx1ZSA9IGpzb247IC8vL1xuXG4gICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcblxuICAgIHJldHVybiBvYmplY3Q7XG4gIH0sIHt9KTtcblxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5mdW5jdGlvbiB1bnNlcmlhbGlzZU9iamVjdChvYmplY3QpIHtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCksXG4gICAgICAgIHZhbHVlcyA9IE9iamVjdC52YWx1ZXMob2JqZWN0KTtcblxuICBvYmplY3QgPSBrZXlzLnJlZHVjZSgob2JqZWN0LCBrZXksIGluZGV4KSA9PiB7XG4gICAgbGV0IHZhbHVlID0gdmFsdWVzW2luZGV4XSxcbiAgICAgICAganNvbiA9IHZhbHVlOyAvL1xuXG4gICAganNvbiA9IHVuc2VyaWFsaXNlSlNPTihqc29uKTsgLy8vXG5cbiAgICB2YWx1ZSA9IGpzb247IC8vL1xuXG4gICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcblxuICAgIHJldHVybiBvYmplY3Q7XG4gIH0sIHt9KTtcblxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5mdW5jdGlvbiBzZXJpYWxpc2VQcmltaXRpdmUocHJpbWl0aXZlKSB7XG4gIGlmIChwcmltaXRpdmUgPT09IEluZmluaXR5KSB7XG4gICAgcHJpbWl0aXZlID0gSU5GSU5JVFk7XG4gIH1cblxuICByZXR1cm4gcHJpbWl0aXZlO1xufVxuXG5mdW5jdGlvbiB1bnNlcmlhbGlzZVByaW1pdGl2ZShwcmltaXRpdmUpIHtcbiAgaWYgKHByaW1pdGl2ZSA9PT0gSU5GSU5JVFkpIHtcbiAgICBwcmltaXRpdmUgPSBJbmZpbml0eTtcbiAgfVxuXG4gIHJldHVybiBwcmltaXRpdmU7XG59XG4iXSwibmFtZXMiOlsidHlwZU9mIiwiSU5GSU5JVFkiLCJBUlJBWV9KU09OX1RZUEUiLCJPQkpFQ1RfSlNPTl9UWVBFIiwiUFJJTUlUSVZFX0pTT05fVFlQRSIsInNlcmlhbGlzZUpTT04iLCJqc29uIiwidHlwZSIsImFycmF5Iiwic2VyaWFsaXNlQXJyYXkiLCJvYmplY3QiLCJzZXJpYWxpc2VPYmplY3QiLCJwcmltaXRpdmUiLCJzZXJpYWxpc2VQcmltaXRpdmUiLCJ1bnNlcmlhbGlzZUpTT04iLCJ1bnNlcmlhbGlzZUFycmF5IiwidW5zZXJpYWxpc2VPYmplY3QiLCJ1bnNlcmlhbGlzZVByaW1pdGl2ZSIsIm1hcCIsImtleXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJyZWR1Y2UiLCJrZXkiLCJpbmRleCIsInZhbHVlIiwiSW5maW5pdHkiXSwibWFwcGluZ3MiOiJBQUFBO0FBRUEsU0FBU0EsTUFBTSxRQUFRLG9CQUFvQjtBQUMzQyxTQUFTQyxRQUFRLFFBQVEsZUFBZTtBQUN4QyxTQUFTQyxlQUFlLEVBQUVDLGdCQUFnQixFQUFFQyxtQkFBbUIsUUFBUSxlQUFlO0FBRXRGLE9BQU8sU0FBU0MsY0FBY0MsSUFBSTtJQUNoQyxJQUFNQyxPQUFPUCxPQUFPTTtJQUVwQixPQUFRQztRQUNOLEtBQUtMO1lBQWlCO2dCQUNwQixJQUFJTSxRQUFRRixNQUFNLEdBQUc7Z0JBRXJCRSxRQUFRQyxlQUFlRCxRQUFTLEdBQUc7Z0JBRW5DRixPQUFPRSxPQUFPLEdBQUc7Z0JBRWpCO1lBQ0Y7UUFFQSxLQUFLTDtZQUFrQjtnQkFDckIsSUFBSU8sU0FBU0osTUFBTyxHQUFHO2dCQUV2QkksU0FBU0MsZ0JBQWdCRCxTQUFTLEdBQUc7Z0JBRXJDSixPQUFPSSxR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