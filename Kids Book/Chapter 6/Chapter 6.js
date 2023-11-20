
    var message = "Hello world!";
    console.log(message);
//IF STATEMENTS
    var name = "Sandile"
    console.log("Hello "+ name+"!!");
    if(name.length > 5) {
        console.log("wow your name is really long it has "+ name.length +" characters");
    }
    else
    {
        console.log("Your name is sweet and short")

    }
 

    //For Loop
    for (let index = 0; index <  10; index++) {
     console.log(index);
       
    }


    //while loop
var numberOfCandy = 0;

while(numberOfCandy < 20)
{
    console.log("I have counted "+numberOfCandy + " candies")
    numberOfCandy++;
}


//Using for loops with arrays
var animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];

for(var i= 0 ; i < animals.length; i++)
{
    console.log("Animal at index "+i + " is a " + animals[i] )
}
console.log("Total number of animals is "+ animals.length);

//Loop to display powers of 3

var a = 3;

while(a < 1000)
{
    console.log(a);
    a*=3;
}

//Programming challenge chapter 6
//Awsome animals

var animals = ["Cat", "Fish","Lemur", "Komodo Dragon"];

var c = 0;
while(c<animals.length)
{
    animals[c] = "Awsome "+ animals[c];
    console.log(animals);
    c++;
}


//Random String generator
var randomChar = "abcdefghijklmnopqrstuvwxyz";
var newString="";

var j= 0;
while(j<9)
{
var randomIndex = Math.floor(Math.random()*randomChar.length);
console.log(newString+=randomChar[randomIndex]);
    j++;

}

//H4CK3R SP34K

var input = "javascript is awesome";
var output = "";

for(let index = 0;index<input.length;index++)
{
    if (input[index]=== 'a'){
        output+= 4;

    }else
    if(input[index]=== 'e')
    {
        output+=3;
    }else
    if(input[index]==='i')
    {
        output+=1;
    }
    else
    if(input[index]=== 'o')
    {
        output+=0;
    }else
    {
        output+=input[index];
    }
}
console.log(output); //j4v4scr1pt 1s 4w3s0m3

