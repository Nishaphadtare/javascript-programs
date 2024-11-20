
var greet = "Good Morning";
console.log("Given string is: ", greet);

var greetLength = greet.length;
console.log("Total number of Characters is: ", greetLength);

var charAt0= greet.charAt(0);
console.log("character at index 0 is:", charAt0);

var cahrAt5 = greet.charAt(5);
console.log("Character at index 5 is:", cahrAt5);

console.log("=========== Last Character ===============");
var lastChar = greet.charAt(greet.length-1);
console.log("Character of last index is:", lastChar);

console.log("=========== toUpperCase() ===============");

var toUppercase = greet.toUpperCase();
console.log("Result is:", toUppercase);

console.log("=========== toLowerCase() ===============");
var toLowercase = greet.toLowerCase()
console.log("Result is:", toLowercase);

console.log("=========== Concart() ===============");
var firstName = "Jenny";
var lastName = " Gates";
var concatString = firstName + lastName;
console.log("Concat string using + Operator is:", concatString );
 
console.log("=========== Concart() ===============");
var result = greet.indexOf("i");
console.log("Index of i is:", result);

var result = greet.indexOf("M");
console.log("index of M is:", result);

var result = greet.indexOf("z");
console.log("index of z is:", result);

var result = greet.indexOf(" ");
console.log("index of M is:", result);

console.log("=========== Replace() ===============");
var result = greet.replace("Morning", "Afternoon");
console.log("After replace:", result);

console.log("=========== trim() ===============");
var day = "   Saturday    "
var dayLength = day.length
console.log("Befor Trim string length is: ", dayLength);

var dayAfterTrim = day.trim()
var dayAfterTrimLength = dayAfterTrim.length;
console.log("After string trim length is:", dayAfterTrimLength);
console.log(dayAfterTrim);

console.log("Total removed characters: leading and trailing =", dayLength - dayAfterTrimLength);

console.log("=========== Includes() ===============");
var result = greet.includes("Mor");
console.log(result);

var result = greet.includes("mor");
console.log(result);

console.log("=========== slice() ===============");
var result = greet.slice(3, 11);
console.log(result);

var result = greet.slice(5);
console.log(result);

console.log("=========== split() ===============");
var result = greet.split("Morning");
console.log(result);

var result = greet.split(" ");
console.log(result);
console.log("Total number of words: ",result.length);


var myLove = "I Love only javascript";
var result = myLove.split(" ")
console.log(result);
console.log("Total number of words: ",result.length);

// console.log("Given sentance - ", myLove, "Total number of words", result);
console.log(`Given sentance - ${myLove} Total number of words ${result}`);

console.log("============String Template =================");
var string = "I Love only JS"
console.log(`Given string is: ${string}`);





 






