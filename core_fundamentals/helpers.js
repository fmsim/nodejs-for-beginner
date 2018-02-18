/*
module.exports.title = "NODE",
module.exports.title2 = "NODE2";
module.exports.cal = function() {
  console.log("Hello");
}
console.log(module.exports);
console.log(module.exports.cal());
*/

const object = require('./lib');
console.log(object.cal(100, 233));
