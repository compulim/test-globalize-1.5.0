const globalize = require('./PrecompiledGlobalize');

console.log(`Running with globalize@${require('globalize/package.json').version}`);

console.log(`The time now is ${globalize('en').dateFormatter({ skeleton: 'MMMMdhm' })(new Date())}`);
