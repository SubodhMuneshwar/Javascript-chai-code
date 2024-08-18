  //console.log("hello " + "world"); 
// This is not recommended for coding today instead use the below syntax:


const name= "Subodh"
const repoCount = 55;
  //console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 
// this is a modern way of writing also known as string interpolatio.

let myName = new String("Motyaaa");
/*console.log(myName.__proto__);
console.log(myName[2]);
console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.charAt(2));
console.log(myName.indexOf('M'));
*/

let newString= myName.substring(1,4)
let anotherString= myName.slice(-8,2)
console.log(newString);
console.log(anotherString);

let a="    subodhmotyaa   "  
console.log(a.trim());

let url= "https://subodhmotya.com/subodh%20abc"
console.log(url.replace('%20','--'));
console.log(url.includes('motya'));


