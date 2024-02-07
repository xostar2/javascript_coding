// //functions

// function sayMyName(){
//     for(i in name){
//         console.log(name[i])
//     }
// }
// const name ="Hitesh"
// //sayMyName(name)//executution of function
// //sayMyName// function reference use in react DOM

// function addTwoNumber(number1,number2){
//     console.log(number1+number2)
// }

// const resulet=addTwoNumber(1,3)//argument
// console.log("result",resulet)//undefine==

//=========================================

// function addnum(number1,number2){
//     let result=number1+number2
//     return result
// }
// const resulet=addnum(2,3)
// console.log("Result",resulet)



// function addnum(number1,number2){
//     return number1+number2
// }
// const v=addnum(2,3)
// console.log("Result",v)

//=============================================

// function loginUserMessage(username){
//     return `${username} just logged in`
// }

// function loginUserMessage(username){
//     if(username==undefined){
//         console.log("please enter username")
//         return
//     }
//     return `${username} just logged in`
// }

//console.log(loginUserMessage("raj"));

// console.log(loginUserMessage("raj"));//undefine

// //professional code

// function loginUserMessage(username="sam"){
//     if(!username){
//         console.log("please enter username")
//         return
//     }
//     return `${username} just logged in`
// }

//if you dont know the argumnets like shopping cart

// function calculateCartPrice(... num1){// ... Rest operator  and ... also a spread operator it just depend on their usecase

//  return num1
// }
// console.log(calculateCartPrice(200,400,500))  //pass multiple argumnet in function ans use rest operator to convert into array so we can use it in real time


// function calculateCartPrice(val1,val2, ... num1){// ... Rest operator  and ... also a spread operator it just depend on their usecase

//  return num1
// }
// console.log(calculateCartPrice(200,400,500,20000))


// const user={
//     username:"raj",
//     perice:"199"
// }

// function handleObject(anyobject){
//     console.log(`username is ${anyobject.username} and prince ${anyobject.price}`)
// }
// //handleObject(user)

// handleObject({
//     username:"raj",
//     price:199
// })


// //==========pass array==================
// const myNewArray=[200,400,100,600]

// function returnSecondArray(getArray){
//     return getArray[1]
// }

// console.log(returnSecondArray(myNewArray))
