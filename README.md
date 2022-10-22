<div align="center">
  <h1>Mongoose Default</h1>
  <p>Plugin for mongoose which sets up default values for all fields if default values were not provided.</p>
  
  [![npm version](https://badgen.net/npm/v/mongoose-default)](https://www.npmjs.com/package/mongoose-default)
  [![npm downloads](https://badgen.net/npm/dm/mongoose-default)](https://www.npmjs.com/package/mongoose-default)
  
</div>

## Mongoose Default

This plugin sets default value for all fields if default values were not provided. It also sets the defaults of embedded docs/sub docs recursively.

## Install

```
  npm i mongoose-default
```

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Usage

```
  const mongoosedefault = require('mongoose-default');

  //Set default values of all mongoose fields to Predefined Defaults.
  Schema.plugin(mongoosedefault);

  //Set default values of all mongoose fields except String to Predefined Defaults. Set the default
  //of all String fields to "defaultValue".
  Schema.plugin(mongoosedefault,{String:"defaultValue"});

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
