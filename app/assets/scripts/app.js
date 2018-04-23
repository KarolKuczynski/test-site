var $ = require('jquery');
var Person = require('./modules/Person');

var john = new Person('John','blue');
john.greet();

$('h1').remove();