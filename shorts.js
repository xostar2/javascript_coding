 // window =whenever a js code in run a globle execution context in created and an bloble scope was created win
//window was created and a this key word is created

//globle object in js as known as window now lets deep dive into 
// what is window

//js run on server and browswer
//this ===window

//whenever an execution context  is created an this is also created along with it 

//and in the case of broswers that this keyword is window

var a=10;
function b(){
	var x=10;
}
console.log(window.a);
