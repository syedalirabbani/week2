//---------------------------------------------------------------------------------
//Fizz for divisable by 3, Buzz for divisable by 5, FizzBuzz for divisable by 3 & 5
//---------------------------------------------------------------------------------
for (var i = 1; i<101; i++){
  if( i % 5 == 0 && i % 3 == 0){
    console.log("FizzBuzz");
  }
  else if( i % 5 == 0){
    console.log("Buzz");
  }
  else if( i % 3 == 0  ){
    console.log("Fizz");
  }
  else{
    console.log(i);
  }
}
  