// Generating random numbers

console.log(Math.random() * 10); //generates a random number betweeen 0 and 10 but the number is a decimal

console.log(Math.floor(Math.random() * 10)); // generates a random number betweeen 0 and 10 without a decimal point

var phrases = ["That sounds good","Yes, you definetly should do that","Im not sure thats a great idea","Maybe not today?","Computer says no."];
var numElements = phrases.length-1;// 

var suggestionIndex = Math.floor(Math.random() * numElements); //Generate a random number betweeen 0 and the length of the array -1 because the first index is 0

console.log(phrases[suggestionIndex]); //returns a random element within the array




