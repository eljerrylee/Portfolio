// 3. Create a new array with a name of your choice, and place 
//    at least 4 values into it
var values = [];
values[0] = 1;
values[1] = 2;
values[2] = 3;
values[3] = 4;

/* 4. Create a new function expression that takes a single parameter, 
      adds 1 to that parameter, then uses console.log to log that 
      parameter to the console.
*/
const addOne = function(number) {
    number = number + 1;
    console.log(number);
};

addOne(9);

/*  5. Create a new function that takes two parameters. One will be a 
       function expression, the other will be a number. If the number 
       is even, call the function expression passed to this function 
       and give it the number. Else, use console.log to print "the 
       number is odd" to the console.
*/
const checkNumber = function(myExpression, theNumber) {
    if (theNumber % 2 == 0) {
        myExpression(theNumber);
    } else {
        console.log("The number is odd")
    }
};

const myExpression = function(secondNumber) {
    console.log("The number is even and it is " + secondNumber)
};

checkNumber(myExpression, 22);
checkNumber(myExpression, 3);
console.log("");

/* 6. Create a for-in loop that loops through the indexes of your 
      array. During each iteration of the loop, call the function from 
      step 5, giving it the function expression from step 4 and the 
      current index as arguments.
*/
for (let i = 0; i < values.length; i++) {
    checkNumber(myExpression, values[i]);
};




