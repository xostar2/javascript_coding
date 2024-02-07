const name="raj"

const repo=50
console.log(name+repo+"value")
//this syntex is not for mordern

console.log(`hello mu name is ${name} and my repo count is ${repo}`)
//===========================================
const gameName= new String("new-Age");

console.log(gameName);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(6));

console.log(gameName.indexOf("t"))


//================================important

const newString=gameName.substring(0,4);//4 is excluded
console.log(newString)

//=========================

const anotherString=gameName.slice(-8,4);
console.log(anotherString)

//===========================trim======================

const newStringOne= "   hitesh  "

console.log(newStringOne);
console.log(newStringOne.trim());



//========================replace===============

const url="https://hitesh.com/hitesh%20choudhry"

url.replace('%20','_');
url.includes('h');
console.log(url);


//=====================array====================


const word= "raj kishan singh"

console.log(word.split(" "));

console.log("y".codePointAt(0).toString(16));