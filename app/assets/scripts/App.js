var $ = require('jquery');
var Person = require('./modules/Person');

alert('ABC, it\'s as easy as 123');

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Smith", "green");
jane.greet();
