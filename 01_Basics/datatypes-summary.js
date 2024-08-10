// #Primitive datatypes:(call by value)
// 7 categories: String, Number, Boolean, null, undefined, Symbol, BigInt(large or scientific values)
const id= Symbol('123');
const anotherId= Symbol('123')
console.log(id===anotherId);

//BigInt:

const bigNumber=4965498743212164n //LAST MAI n LAGA DO
console.log(typeof bigNumber);


// #Non-Primitive (reference type)
// Array, Objects, Functions

/*JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.*/

const heroes= ["shaktiman", "naagraj", "doga"]; //ARRAY

let myObject= {
    name: "Subodh",
    age : 20,
} //Object

const myFunction = function(){
    console.log(("Hello World"));
    
}

console.log(typeof myFunction );

// https://262.ecma-international.org/5.1/#sec-11.4.3

