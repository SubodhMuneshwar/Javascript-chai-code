//ARRAY
//JS arrays are resizable and mix datatypes

const arr = new Array(1,2,3,4,5,6);
// console.log(arr[1]);
// to access array we use indexing

const arr2 = ['Subodh', 'Motyaa','goku', 2,4];

//ARRAY METHODSSS

// arr2.push("Gondyaa")

// arr2.push(7)

// arr2.pop()

arr2.unshift("vegeta") // load on computer or time comsuming
arr2.shift() // removes start value

// console.log(arr2.includes(9));

// console.log(arr2.indexOf(9));

//iska answer -1 ayega qki usmai hume malum nhi ki 9th index pe kya hai qki array 9 se chota hai

const newarr = arr2.join(); // array to string
// console.log(arr2);

// console.log(newarr);

// console.log(typeof newarr);



//******************/ SLICE, SPLICE: *************** 

console.log('A ', arr2);

const myn1 = arr2.slice(1,3)

console.log(myn1);
console.log('B ', arr2);

const myn2 = arr2.splice(1,3)
console.log( 'C ',arr2);
console.log( myn2);
//splice jo values diye hote hai range k andar usko nikal deta hai array mai se aur value with range end print krta hai




