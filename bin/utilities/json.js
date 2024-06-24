"use strict";

const { typeOf } = require("../utilities/type"),
      { INFINITY } = require("../constants"),
      { ARRAY_JSON_TYPE, OBJECT_JSON_TYPE, PRIMITIVE_JSON_TYPE } = require("../jsonTypes");

function serialiseJSON(json) {
  const type = typeOf(json);

  switch (type) {
    case ARRAY_JSON_TYPE: {
      let array = json; ///

      array = serialiseArray(array);  ///

      json = array; ///

      break;
    }

    case OBJECT_JSON_TYPE: {
      let object = json;  ///

      object = serialiseObject(object); ///

      json = object;  ///

      break;
    }

    case PRIMITIVE_JSON_TYPE: {
      let primitive = json; ///

      primitive = serialisePrimitive(primitive);  ///

      json = primitive; ///

      break;
    }
  }

  return json;
}

function unserialiseJSON(json) {
  const type = typeOf(json);

  switch (type) {
    case ARRAY_JSON_TYPE: {
      let array = json; ///

      array = unserialiseArray(array);  ///

      json = array; ///

      break;
    }

    case OBJECT_JSON_TYPE: {
      let object = json;  ///

      object = unserialiseObject(object); ///

      json = object;  ///

      break;
    }

    case PRIMITIVE_JSON_TYPE: {
      let primitive = json; ///

      primitive = unserialisePrimitive(primitive);  ///

      json = primitive; ///

      break;
    }
  }

  return json;
}

module.exports = {
  serialiseJSON,
  unserialiseJSON
};

function serialiseArray(array) {
  array = array.map((json) => {
    json = serialiseJSON(json);  ///

    return json;
  });

  return array;
}

function unserialiseArray(array) {
  array = array.map((json) => {
    json = unserialiseJSON(json);  ///

    return json;
  });

  return array;
}

function serialiseObject(object) {
  const keys = Object.keys(object),
        values = Object.values(object);

  object = keys.reduce((object, key, index) => {
    let value = values[index],
        json = value; //

    json = serialiseJSON(json); ///

    value = json; ///

    object[key] = value;

    return object;
  }, {});

  return object;
}

function unserialiseObject(object) {
  const keys = Object.keys(object),
        values = Object.values(object);

  object = keys.reduce((object, key, index) => {
    let value = values[index],
        json = value; //

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
