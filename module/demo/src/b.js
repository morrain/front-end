var a = require('./a.js')
console.log('a.name=', a.name)
console.log('a.age=', a.getAge())

var name = 'lilei'
var age = 15
exports.name = name
exports.getAge = function () {
  return age
}