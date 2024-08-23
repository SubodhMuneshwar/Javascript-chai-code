let marvel = ['Ironman', 'thor', 'spiderman']
let dc = ['Joker', 'superman', 'batman']

// marvel.push(dc)
// console.log(marvel);
// console.log(marvel [3][1]);

// const allMarvelDc = marvel.concat(dc)
// console.log(allMarvelDc);

const allMarvelDc = [...marvel, ...dc] //This is called spread method to get same result as concat
// console.log(allMarvelDc);

let anotherArray = [2,4,5,6,[2,3,10],[1,[2,5,7]]]
const real_anotherArray = anotherArray.flat(Infinity)
// console.log(real_anotherArray);

// console.log(Array.isArray("Motyaa"));
// console.log(Array.from("Motyaa"));// gives every character individually
// console.log(Array.from({name: "Motyaa"})); // gives empty string cause dont know what to convert

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));



