#!/usr/bin/env node
var parseArgs = require("minimist");
var argv = parseArgs(process.argv.slice(2), opts = {"--": true});
console.log(greet(argv._[0], argv.drunk));
function greet(name, drunk) {
	if(drunk) {
		return "Hello " + name + ", you look sexy today";
	} else {
		return "Hello, " + name;
	}
}
