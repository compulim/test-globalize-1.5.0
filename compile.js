const { join, relative } = require('path');
const { writeFileSync } = require('fs');
const Globalize = require('globalize');
const globalizeCompiler = require('globalize-compiler');

Globalize.load(require('cldr-data').entireSupplemental());
Globalize.load(require('cldr-data').entireMainFor('en'));

const formattersAndParsers = [new Globalize('en').dateFormatter({ skeleton: 'MMMMdhm' })];
const code = globalizeCompiler.compile(formattersAndParsers);
const filename = join(__dirname, 'PrecompiledGlobalize.js');

// globalize-compiler is emitting AMD code, pointing to "globalize-runtime" instead of "globalize/dist/globalize-runtime"
const patchedCode = code.replace(/\"globalize-runtime\//g, '"globalize/dist/globalize-runtime/');

writeFileSync(filename, patchedCode);

console.log(`Compiling using globalize@${require('globalize/package.json').version}`);
console.log(`Successfully compiled globalize to ${relative(process.cwd(), filename)}`);
