const humanTime = require("./index");

console.log(humanTime(8.64e+7 + 10000, 'full'));
console.log(humanTime(8.64e+7, 'short'));
console.log(humanTime(8.64e+7, 'clock'));