// console.log("1:");

let score1 = 33;

// // console.log(typeof(score)); //we can also write in this format
// console.log(typeof score1);

// console.log("2:");
let score2 = "33"
let valueInNumber = Number(score2);
// console.log(typeof valueInNumber);

// console.log("3:");
let score3 = "33subodh"; //NAN
let valueInNumber2 = Number(score3)
// console.log(typeof valueInNumber2);
// console.log(valueInNumber2);

// console.log("4:");
let score4 = null
let valueInNumber3 = Number(score4);
// console.log(valueInNumber3);
// console.log(typeof score4);
// console.log(typeof valueInNumber3);

// console.log("5:");
let score5 = undefined;
let valueInNumber4 = Number(score5);
// console.log(valueInNumber4);
// console.log(typeof score5);
// console.log(typeof valueInNumber4);

// console.log("6:");
let score6 = true;
let valueInNumber5 = Number(score6);
// console.log(valueInNumber5);
// console.log(typeof score6);
// console.log(typeof valueInNumber5);

// console.log("7:");
let score7 = "Subodh"
let valueInNumber6 = Number(score7);
// console.log(valueInNumber6);
// console.log(typeof score7);
// console.log(typeof valueInNumber6);

/* "33" => 33
 "33subodh" => NaN
 true => 1 ; false => 0
*/

let isLoggedIn = 1 //=> true
let booleanisLoggedIn = Boolean(isLoggedIn)
//console.log(booleanisLoggedIn);

let isLoggedIn1 = "subodh"  //=> true 
let booleanisLoggedIn1 = Boolean(isLoggedIn1)
//console.log(booleanisLoggedIn1);

let isLoggedIn2 = "" //=> false
let booleanisLoggedIn2 = Boolean(isLoggedIn2)
//console.log(booleanisLoggedIn2);


let someNumber = 33
let StringNumber = String(someNumber);
// console.log(typeof StringNumber);
// console.log(someNumber);


//**********************OPERATIONS**********************/

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);

let str1="hello"
let str2=" Subodh"

let str3= str1+str2
// console.log(str3);

// console.log( "1" + 2 );
// console.log( 1 + "2" );
// console.log( "1" + 2 + 2 );
// console.log( 1 + 2 + "2" );

// console.log( ( 3 + 4 ) * 5 % 6 );

// console.log(-true);
// console.log(+true);
// console.log(+"");

let gameCounter= 100
let gameCounter1= 100
gameCounter++;
++gameCounter1;
// console.log(gameCounter);
// console.log(gameCounter1);

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);


// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"







