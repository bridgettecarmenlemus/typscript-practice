// Type Inferences 
// When a variable is declared with an intial value, the varaible can never be reassigned a value of a different data type. AKA, "type inferences"

// Code has a bug, find the bug and fix it. 

let aged = true;
let realAge = 0;

if(aged) {
    realAge=4;
}

let dogAge = realAge *7;

console.log(`${dogAge} years`)

// answer 28 years 

// the bug was: Type 'string' is not assignable to type 'number'.
// line 10   realAge = '4 years';
// changed it to a number and not a string