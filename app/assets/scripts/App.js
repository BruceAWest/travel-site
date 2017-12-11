function Person(fullName, favColor) {
  this.name = fullName;
  this.favoriteColor = favColor
  this.greet = function() {
    console.log("Hello, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
  }
}

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Smith", "green");
jane.greet();

var butch = new Person("Butch Cassidy", "black");
butch.greet();

var tanto = new Person("Tanto", "burnt sienna");
tanto.greet();
