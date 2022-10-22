<div align="center">
  <h1>Mongoose Defaults</h1>
  <p>Plugin for mongoose which sets up default values for all fields if default values were not provided.</p>
  
  [![npm version](https://badgen.net/npm/v/mongoose-defaults)](https://www.npmjs.com/package/mongoose-defaults)
  [![npm downloads](https://badgen.net/npm/dm/mongoose-defaults)](https://www.npmjs.com/package/mongoose-defaults)
  
</div>

## Mongoose Defaults

This plugin sets default value for all fields if default values were not provided. It also sets the defaults of embedded docs/sub docs recursively.

## Install

```
  npm i mongoose-defaults
```

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Usage

```
  const mongoosedefaults = require('mongoose-defaults');

  //Set default values of all mongoose fields to Predefined Defaults.
  Schema.plugin(mongoosedefaults);

  //Set default values of all mongoose fields except String to Predefined Defaults. Set the default
  //of all String fields to "defaultValue".
  Schema.plugin(mongoosedefaults,{String:"defaultValue"});

```

## Predefined Defaults:

```
  String: "",
  Number: 0,
  Date: new Date(),
  Boolean: false,
  Number: 0,
  String: "",
  Array: [],
  Embedded: {},
```
