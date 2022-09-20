// Any 
// There are some places where Typescript will not try to infer what type something is. Generally, when a variable is declared withoutbeing assigned an intial value. In situations where it isnt't able to onfer a type, TypeScript will consider a variable to be of type "any"
// Variables of type 'any' can be assigned to any value and typescript won't give an error if they're reassigned to a different type later on. 

let onOrOff;

onOrOff = 1;
onOrOff = false;

// In the code above, we decalred the variable onOrOff without an initial value. TypeScript considers it to be of type any, and, therefore, doesn't produce an error when we the variable's assignment from a number value to a boolean value. 

let guess;

guess = 'orange';

guess = 9;