// This is a coment in Javascript

/*
	This is a multiline comment
	It can span many lines
  Bill doesn't believe me.
*/

// Strings
var myFirstVariable = "My words are good words";
var mySecondVariable = ", I have the best words.";
var myThirdVariable = myFirstVariable + mySecondVariable;

myThirdVariable

var space = " ";
var firstName = "Jason";
var lastName = "Noxon";
var fullName = firstName + space + lastName;

fullName

// Number
var num1 = 35;
var num2 = 46;
var addedNumbers = num1 + num2;
var multiplyNumbers = num1 * num2;
var divideNumbers = num1 / num2;
var subtractNumbers = num1 - num2;

addedNumbers
multiplyNumbers
divideNumbers
subtractNumbers

var salesTax = 1.0734567;
var carPurchase = 12000;
var totalCost = salesTax * carPurchase;
"$" + Math.floor(totalCost);
"$" + Math.ceil(totalCost);
"$" + totalCost.toFixed(2);

var grade1 = 89;
var grade2 = 90;
var grade3 = 85;
var averageGrades = (grade1 + grade2 + grade3) / 3;
averageGrades


// Arrays
var grades = [76,98,81,77,89,90,76];

// Assign the location of 76 to the pos variable
var pos = grades.indexOf(76);
grades[pos];

//Boolean
var myBoolean = false;
var yourBoolean = true;

var isActive = true;
var signUpForNewsletter = false;


// IF Statements
var expectedUser = "JaSOn";
var actualUser = "ja$oN";

if ( expectedUser.toLowerCase() == actualUser.toLowerCase() ) {
  "You are logged in!";
}
else {
  "Stay out!"
}

var snowDay = false;

if (snowDay == true) {
  "No school! Damn!"
}
else if (snowDay == false) {
  "We're on!"
}
else {
  "Not enough data!"
}

//more concise
if (snowDay) {
  "No school! Damn!"
}
else if (!snowDay) {
  "We're on!"
}
else {
  "Not enough data!"
}

// Fruit Fiasco Part I
var fruits = ["Apple", "Kiwi", "Banana", "Strawberry", "Orange", "Kumquat"];

var searchString = "Banana";
var fruitPos = fruits.indexOf(searchString);

if ( fruitPos > -1 ) {
  fruits[fruitPos] + " found at index " + fruitPos + ".";
}
else {
  "Item not found."
}

// Fruit Fiasco Part II
var fruits = ["Apple", "Kiwi", "Banana", "Strawberry", "Orange", "Kumquat"];

var searchString = "Banana";
var fruitPos = fruits.indexOf(searchString);

if ( fruitPos > -1 ) {
  fruits.splice(fruitPos, 1);
  searchString + " delete at index " + fruitPos + ".";
}
else {
  "Item not found."
}
