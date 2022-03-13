var DEFAULT_DEFAULTS = {
  Date: new Date(),
  Boolean: false,
  Number: 0,
  String: "",
  Array: [],
  Embedded: {},
};

function findEmbeddedSchemas(schema, result) {
  if (schema.paths) {
    var newarr = [];
    for (var path in schema.paths) {
      var field = schema.paths[path];
      newarr.push(field);
      if (field.schema) {
        findEmbeddedSchemas(field.schema, result);
      }
    }
    result.push(...newarr);
  }
}

module.exports = function (schema, options) {
  var extentedOptions = Object.assign({}, DEFAULT_DEFAULTS, options);
  var result = [];
  findEmbeddedSchemas(schema, result);
  for (var path in result) {
    var field = result[path];

    if (!field.defaultValue) {
      field.defaultValue = extentedOptions[field.instance];
    }
  }
};
