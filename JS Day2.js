//function

// 1) declaring a function

function sayHello(){
  console.log("Hello")
}

// 2) Invoking a function 

sayHello();

// 3) function with parameters (formula)

function goodbye(name){
  console.log("goodbye "+name);
}

// 4)invoking function with parameters
goodbye("Muzaffar")
goodbye("Ashraf")
goodbye("Anas")

// 5) a function can return an answer

function sum(a,b){
  return a+b;
}

//calling function return on answer
var sum1 = sum(2,3);
console.log(sum1);

console.log(sum(3,4))

// 6) Returning more than one items/answers

function calculationAreaVolume(length,width,height){
  return [length*width, length*width*height];
}

console.log(calculationAreaVolume(2,3,4));

//array is the 4th data type that can store more items.

var markah = [80,70,90,60,50];

//1) retrieving an item from array
//give the index of the array, index starts with 0
console.log(markah[0]);
console.log(markah[4]);

//2) get the length of an array
console.log(markah.length)

//3) add an item at the end of an array

markah.push(80);
console.log(markah);

//4) remove an item at the end of array

markah.pop()
console.log(markah)

for(var i = 0; i <markah.length; i++ ){
  console.log("Item number " + (i+1) + " is "+markah[i]);
}