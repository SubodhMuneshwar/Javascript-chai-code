// dates are respresnted in milliseconds and are calculated since the midnight at the beginning of January 1 1970

let date= new Date()
// console.log(date.toDateString());
// console.log(date.toString());
// console.log(date.toLocaleString());
 
// console.log(typeof date);

let newDate= new Date(2023, 0, 23) // months js mai 0 se start hota hai
// console.log(newDate.toDateString());

let newDate2= new Date("2022-09-22") //for yy-mm-dd
// console.log(newDate2.toDateString());

let myTimeStamp= Date.now()
// console.log(myTimeStamp);
// console.log(newDate2.getTime());
console.log(Math.floor(Date.now()/100000));//For getting time in seconds

let nayaDate= new Date()
// console.log(nayaDate.getMonth()+1);

nayaDate.toLocaleDateString('default',{
    weekday:"long"
})
console.log(nayaDate);
