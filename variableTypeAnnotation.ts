// Variable Type Annotations
// In some situations, we would like to decalre a variable without an initial value while still ensuring that it will only ever be assigned values of a certain type. If left as 'any', Typscript will not be able to protect us from accidentally assigniing a variable to an incorrect type that could break our code. 
// We can tell TypeScript what types omething is or will be by using a type annotations ( also known as type decalrations) added just after their names. We provide a type annotation by appending a variable with a colon ( : ) and the type (e.g., number, string, or any)


let phoneNumber: string;
if (Math.random() > 0.5 ) {
    phoneNumber = "+61770102062";
} else {
    phoneNumber = "7167762323"
}