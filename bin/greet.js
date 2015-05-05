#!/usr/bin/env node
var parseArgs = require("minimist");
var greet = require("greet");
var argv = parseArgs(process.argv.slice(2));
console.log(greet(argv._[0], argv.drunk));

