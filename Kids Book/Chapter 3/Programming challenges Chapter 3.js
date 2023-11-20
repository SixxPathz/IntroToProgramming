//Random insult generator

var bodyPart = ["Eyes","Nose","Head","Feet"];
var adjective = ["Smelly","Boring","Stupid"];
var animalPart = ["Eyes","Nose","Head","Feet","Teeth"]
var randomWords = ["Rat","Monkey","Donkey","Pig"];

var randomBodyPart = bodyPart[Math.floor(Math.random() * bodyPart.length)];
var randomAdj = adjective[Math.floor(Math.random() * adjective.length)];
var randomAnimalPart = animalPart[Math.floor(Math.random() * animalPart.length)];
var randomAnimal = randomWords[Math.floor(Math.random() * randomWords.length)];


var randomInsult = ["Your",randomBodyPart,"is more",randomAdj,"than a",randomAnimal+"'s",randomAnimalPart];
console.log(randomInsult.join(" ")+ "\n");

var randomInsult2 = "Your "+ randomBodyPart + " is more "+randomAdj + " than a " + randomAnimal+"'s " + randomAnimalPart;
console.log(randomInsult2);


//Joining numbers
var numbers = [3,2,1];

console.log(numbers.join(" is bigger than "));