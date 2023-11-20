// Creating Objects

var cat = {
    "legs": 3,
    "name": "Harmony",
    "color": "Tortoiseshell and purple "
};

// Looking up keys

console.log(Object.keys(cat));


// adding values to objects

var dog = {};

dog.name = "Rex";
dog.legs = 4;
dog.color ="Brown";
dog["owner"] = "Sandile";

console.log(Object.keys(dog));

// Combining Arrays with objects

let objectArray = [{name: "Sandile", age: 24, qualification: "IT" },{name: "Paballo",age:26,qualification:"HR" },{name: "Daluxolo",Age:21,qualification:"Business Applications"}];

console.log(" \n Each object object contains the following informaation: \n");

//accessing all information in a single object
//first object
console.log(objectArray[0]);
//second object
console.log(objectArray[1]);
//third object
console.log(objectArray[2]);


 // Accessing objects in the array and the data contained indivisually
 
console.log(" \n Information in the second data set contains: \n");
console.log(objectArray[1]["name"]+"\n age: "+ objectArray[1]["age"] + "\n Qualification: " + objectArray[1]["qualification"]+ "\n"); 


//Looking up keys in the object in the array

console.log(Object.keys(objectArray[1]));  

//Creating an array of friends

var anna = { name: "Anna", age: 11, luckyNumbers: [2, 4, 8, 16] };
var dave = { name: "Dave", age: 5, luckyNumbers: [3, 9, 40] };
var kate = { name: "Kate", age: 9, luckyNumbers: [1, 2, 3] };

var friendArray = [anna,dave,kate];


//Accessing anna's information
console.log(friendArray[0]);

//dave's lucky numbers

console.log(friendArray[1].luckyNumbers);

console.log(friendArray[1].luckyNumbers[2]);
/*-------------------------------------------------------------------------------------------------------------------------------------*/
//Example for friends who owe me money and the amount they owe

var friendDebt = {};

friendDebt.Mosena = 10;
friendDebt["Njeke"] = 11;
friendDebt.Mbali = 25;
friendDebt["Pulane"] = 50;

//{ Mosena: 'R 10', Njeke: 'R 11', Mbali: 'R 25', Pulane: 'R 50' }


//updating an the amounts
friendDebt["Mosena"] += 60;
friendDebt.Njeke -= 5;
friendDebt["Mbali"] *=2;
friendDebt.Pulane -=25; 

console.log(friendDebt);


//{ Mosena: 70, Njeke: 6, Mbali: 50, Pulane: 25 }

/*-------------------------------------------------------------------------------------------------------------------------------------*/
//Movie Example: Nested Objects

var movies = {
    "Finding Nemo": {
    releaseDate: 2003,
    duration: 100,
    actors: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
    format: "DVD"
    },
    "Star Wars: Episode VI - Return of the Jedi": {
    releaseDate: 1983,
    duration: 134,
    actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
    format: "DVD"
    },
    "Harry Potter and the Goblet of Fire": {
    releaseDate: 2005,
    duration: 157,
    actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    format: "Blu-ray"
    }
    };



//acessing star wars information
console.log(movies["Star Wars: Episode VI - Return of the Jedi"]);
console.log(movies["Star Wars: Episode VI - Return of the Jedi"]["actors"][2]);

/*-------------------------------------------------------------------------------------------------------------------------------------*/
//Adding a new object 

var cars = {releaseDate: 2006,
    duration: 117,
    actors: ["Owen Wilson", "Bonnie Hunt", "Paul Newman"],
    format: "Blu-ray"};

movies.Cars = cars;

var fast5 = {releaseDate: 2011,duration: 130 ,actors:["Paul Walker","Dwayne Johnson","Gal Gadot","Vin Diesel","Ludacris","Tyrese Gibson"],format: "Blu-ray"};

movies["Fast 5"]= fast5;

console.log(movies);


//find the index of Ludacris in the fast 5 object in the actors array

console.log(movies["Fast 5"].actors.indexOf("Ludacris")); //returns 4

//Keys in the movie object

console.log(Object.keys(movies));

/*-------------------------------------------------------------------------------------------------------------------------------------*/
//Programming challenge 
/*Imagine you’re playing a game with some friends and you
want to keep track of the score. Create an object called
scores. The keys will be the names of your friends, and the
values will be the scores (which will all start at 0). As the
players earn points, you must increase their scores. How
would you increase a player’s score in the scores object?  */

var scores ={};

scores.Mbali = 0;
scores.Njeke = 0;
scores.Pulane = 0;
scores.Mosena = 0;

//When a person scores and the scores have to change

scores["Mbali"]+=2;
scores.Njeke += 5;


console.log(scores);
//{ Mbali: 2, Njeke: 5, Pulane: 0, Mosena: 0 }

/*-------------------------------------------------------------------------------------------------------------------------------------*/
// Say you had the following object:
var myCrazyObject = {
"name": "A ridiculous object",
"some array": [7, 9, { purpose: "confusion", number: 123 }, 3.3],
"random animal": "Banana Shark"
};

/*How would you get the number 123 out of this object
using one line of JavaScript? Try it out in the console to see
if you’re right. */

console.log(myCrazyObject["some array"][2]["number"]); //returns 123

var animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];
for(var i = animals.length-1 ;i>=0;i--)
{
    console.log("Animal at index "+i + " is a " + animals[i] )
}
/*-------------------------------------------------------------------------------------------------------------------------------------*/
