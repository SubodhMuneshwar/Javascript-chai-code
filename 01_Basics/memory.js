// There are basically 2 types of memory: 1) Stack(Primitive datatypes) 2) Heap(Non-Primitive datatypes)

let name="Subodh" // Primitive so stack mai jayega

let anotherName= name // if we mention like this then only the copy of name will be given to anotherName and the changes which will be made will be done on that copy and not on the original name

anotherName="Motyaa"

console.log(anotherName);
console.log(name);

//+++++++++++++++++++'
let user={               //Ye heap mai hoga store
    email:"subodh123@google.com",
    upi:"subodh111@yeo"
}

let user2= user

user2.email="motya.google.com" // yaha dono jahag reference milega aur dono change hoga value heap mai
console.log(user2);
console.log(user);

