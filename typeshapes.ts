// Type Shapes 
// In typescript, the language knows what type the objects are, it also knows what shapes our objects adhere to. The built-in types in Javascript each have known properties and methods that always exist. 
// Typescripts tsc command will lerr you know if your code tries to access properties and methods rhat don't exist. 

"MY".toLowerCase();
// Property 'toLowercase' does not exist on '"MY"'
// Did you mean 'tolowerCase'? 

let firstName = 'muriel!';

console.log(firstName.toUpperCase());

console.log(firstName.length)