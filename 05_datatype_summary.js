//ther are two type of DataType in JavaScript

// _1_ Primitive

//_ there are 7 type of primitive datatype
/*String,Number,Boolean,NULL,undefined,Symbol*/

//Reference Type(NON primitive)
/*Array ,Objects, Functions */

//++javascript dynamically type language 

const heros=["ironman","captain","natasha"]
let myObj={
    name:"hitesh",
    age:22,
}

const myFunction=function(){
    console.log("hello World");
}
//=================================================================
//stacNBk(primitive) ,Heap(Non primitive)

let myYouTubeName="rajkishans"

let anotherName=myYouTubeName
anotherName="chaicode"
console.log(anotherName);
console.log(myYouTubeName);


let userOne={
    email: "user@gmail.com",
    UPI:  "user@ybl"
}

let userTwo=userOne

userTwo.email="ramu@gmail.com"

console.log(userOne.email);
console.log (userTwo.email);