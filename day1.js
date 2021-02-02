// 1) /creating a variable
// In this example I create a variable a, variable b and variable sum
// I show the value of sum in the console.
var a = 10;
var b = 3;
var sum = a+b;
console.log(sum);

// Data types (total 5, today remember 3)
// 1) string - character, sentence or word
// you use '' or "" to define a string

var name = "ali";
console.log(name);
var sentence = "I'm Happy";
var anotherSentence = 'He says "Hello!"';
console.log(sentence);
console.log(anotherSentence);

//to combine string you use + (string operation)
var greetings = "hello " + name;
console.log(greetings);

// 2) second data type is number
//a = 10, b = 3 
var minus = a - b;
var product = a * b;
var division = a / b;
var modulo = a % b;
console.log(minus)
console.log(product)
console.log(division)
console.log(modulo)

// 3) true or false

var ishungry = true;
var ispenat = false;
// AND logic both logic need to be true (&&)
// OR logic either one need to be true for it to be true (||)

var rehat = ishungry && ispenat ;
console.log(rehat);

//two control flow
// 1) if else
// comparison ==
if(ishungry == true){
  console.log("jom makan");
}
else{
  console.log("jom study");
}


// > <
var age = 15;
// either age < 18 or bigger than (otherwise/ dan lain lain ...)
if ( age<18){
  console.log("you cannot watch the movie");
}
else{
  console.log("you can watch the movie");
}

if(age < 13){
  console.log("you can watch the movie");
}
else if (age<18){
  console.log("you can watch the movie with parent")
}
else {
   console.log("you can watch the movie!")
}
         
        
//bring out the value 19 is an odd number
//16 is an even number

var number = 19;

if  (number % 2 == 1){
  console.log("is an odd number");
}
else {
  console.log("is an even number")
}


var userAge = 17;
var ticketPrice = 110;

if (userAge<19){
  console.log( "The ticket price is RM"+ticketPrice / 2);
}
else if ( userAge>19){
  console.log("The ticket price is RM"+ticketPrice);
}
else if ( userAge<40){
  console.log("The ticket price is RM"+ticketPrice);
}

else if ( userAge>40){
  console.log("The ticket price is RM"+ticketPrice / 4);
}
else if ( userAge<65){
  console.log("The ticket price is RM"+ticketPrice / 4);
}
else {
  (userAge>65)
  console.log("The ticket price is RM"+ticketPrice / 2);
}

// For loop (repetition) .. repeat this 10 times

// From 0 : until 10 ; every iteration add by 1
for (var i = 0; i < 10; i++){
  console.log(i);
}

for (var i = 10; i > 0; i--){
  console.log(i);
}
 

//from 1, until 10 .. every iteration add by 2
for (var i = 1; i < 10 ; i+=2){
  console.log(i)
}

var multiplier = 6;
var lines = 10;

for (var i = 1; i < lines; i++){
  console.log(i+" x " + multiplier + " = " + multiplier*i);
}

for (var i = 1; i<101; i++){
  if( i % 3 ==0){
    console.log("Fizz")
  }
  else if( i % 5 == 0){
    console.log("Buzz")
  }
  else if( i % 3 == 0 && i % 5 == 0){
    console.log("FizzBuzz")
  }
  else{
    console.log(i)
  }
}
  
 
  
    

  
 
  

  
  
  

  
  




