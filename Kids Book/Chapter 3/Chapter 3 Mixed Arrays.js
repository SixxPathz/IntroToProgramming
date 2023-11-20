var addition = 3+4;

console.log("This is JavaScript code \n");
console.log("\n" + addition);


//Chapter 3 : Arrays
//Mixed arrays

var mixedArray = [3 ,"Sandile",["Dinosaur","T-Rex","Hello","Daluxolo"],47,"JavaScript",["Dhlamini","Molehe"] ]

console.log(mixedArray[5][0]); //returns "Dhlamini" because inner array is at index 5

console.log(mixedArray[2]); //returns whole array at index 2

//Finding the lengh of an array

var arrayLength = mixedArray.length;

console.log("\n" + arrayLength + "\n"); //should return 6 as there are 6 elements in the array

var innerArraylength = mixedArray[5].length;

console.log("\n" + innerArraylength + "\n"); //should return 2 as there are 2 elements in the inner array

//Adding elements to my array

var animals = [];

animals.push("Dog");
animals.push("Cat");
animals.push("Fish");

console.log(animals); //should the array with 3 animals we added

console.log(animals.length); //should return 3 elements that were added

//Adding to an array already containing elements

mixedArray.push("Hello World"); 

mixedArray;
["Hello World"]

//Practise
console.log(mixedArray); //should the array with the new element added
console.log(mixedArray.length); // Hello world is added as the 7th element

//Adding to the beginning of the array

animals.unshift("Polar Bear");
console.log(animals);

// result: [ 'Polar Bear', 'Dog', 'Cat', 'Fish' ]

animals.unshift("Monkey");
console.log(animals);

//result: [ 'Monkey', 'Polar Bear', 'Dog', 'Cat', 'Fish' ]


//Removing Elements from an array

var lastAnimal = animals.pop(); // the last animal is removed and stored in a variable

animals.pop(); //last animal is removed

animals.unshift(lastAnimal);

console.log(animals);

//result: [ 'Fish', 'Monkey', 'Polar Bear', 'Dog' ]

var firstAnimal = animals.shift();

animals.push(firstAnimal);

console.log(animals);

//result: [ 'Monkey', 'Polar Bear', 'Dog', 'Fish' 

//Adding arrays together

var mixedAndAnimal = mixedArray.concat(animals);

console.log(mixedAndAnimal);

/* result: [
  3,
  'Sandile',
  [ 'Dinosaur', 'T-Rex', 'Hello', 'Daluxolo' ],
  47,
  'JavaScript',
  [ 'Dhlamini', 'Molehe' ],
  'Hello World',
  'Monkey',
  'Polar Bear',
  'Dog',
  'Fish'
] */

// Adding multiple arrays

var cars = ["Audi","BMW","Mercedes","Honda","Lexus"];

var multipleArrrays = animals.concat(cars,mixedArray);

console.log(multipleArrrays);

/* result: [
  'Monkey',
  'Polar Bear',
  'Dog',
  'Fish',
  'Audi',
  'BMW',
  'Mercedes',
  3,
  'Sandile',
  [ 'Dinosaur', 'T-Rex', 'Hello', 'Daluxolo' ],
  47,
  'JavaScript',
  [ 'Dhlamini', 'Molehe' ],
  'Hello World'
]  */

/*Findind the index of an element

["Audi","BMW","Mercedes","Honda","Lexus"];

*/

var indexLexus = cars.indexOf("Honda");
console.log(indexLexus);
//Result: 3

var indexBMW = cars.indexOf("BMW");
console.log(indexBMW);
//Result: 1


//Turning an Array to a string

console.log(cars.join(" ")); //Result: Audi BMW Mercedes Honda Lexus
console.log(cars.join("-")); //Result: Audi-BMW-Mercedes-Honda-Lexus
console.log(cars.join(" is faster than ")); //Result: Audi is faster than BMW is faster than Mercedes is faster than Honda is faster than Lexus




var areArraysSame = function (arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (var i = 0; i < arr2.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  } else {
    return false
  }

  return true;
};

console.log(areArraysSame([1, 2, 3], [1, 2, 3])); //returns true
console.log(areArraysSame([1, 2, 3], [4, 5, 6])); //false
console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4])); //false