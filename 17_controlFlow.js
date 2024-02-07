//Call Stake

//========Execution Contect
//Control Flow in javascript

// If statement

// if(Condition){
//       if condition is true then it will execute
// }

// const isUserLoggedIn=true
// if(isUserLoggedIn){
//     console.log(`yes! user logged in`)
// }

// const Num1=2;
// // strict equal(===)
// // (!===)
// if(Num1==="2"){
//     console.log("yes");
// }
// else{
//     console.log("No")
// }

// if(Num1===2){
//     console.log("yes")
// }

// const score=200

// if(score>100){
//     const power="fly"
//     console.log(`user power ${power}`);
// }


//shorthand notation
// const balance=1000
// if(balance>500) console.log("test");

// if(balance>500) console.log("test"),console.log("test2");//don't do this type 

//======================================================
//nested if else
// if(true){

// }else if(true){

// }
// else {

//}

// const userLoggedIn=true
// const debitCard=true
// const loggedInfromGoogle=false
// const loggedInFromEmail=true
// if(userLoggedIn && debitCard){
//     console.log("allow");
// }

// if(loggedInfromGoogle||loggedInFromEmail){
//     console.log("User logged in")
// }

//========================================================Switch Statemnet=====================


// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
// const month=3

// switch(month){
//     case 1:
//         console.log("january");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("april");
//         break;
//     case 5:
//         console.log("may");
//         break;
//     case 6:
//         console.log("june");
//         break;
//     case 7:
//         console.log("july");
//         break;
//     case 8:
//         console.log("Aug");
//         break;
//     default:
//         console.log("defult");
//         break;
    
// }

// const month="april"
// switch (month) {
//     case "jan":
        
//         break;

//     default:
//         break;
// }
//==========================================================


//Interview questions truthe and falsy values

const userEmail="h@hitesh.ai" // or " "
const user=[]
if(userEmail){
    console.log("got user email");
}
else{
    console.log("Don't have user email");
}

//=============falsy value=========================
//  false ,0  ,-0 ,BigInt 0n,"",null,undefined,NaN

//except this all are truethy  value
//"0",'false'," ", {},function(){}

if(user.length===0){
    console.log("Array is empty");
}

const emptyobj={}
if(Object.keys(emptyobj).length===0){
    console.log("empty");
}



//Nullish Coalescing Operator(??): null undefined

// let val1;     
// //val1=5 ?? 10;  ///use in database handling

// //val1=null ?? 10
// // val1=undefined ?? 15
// // console.log(val1);

// val1=null ??10 ?? 20  //use to handle error 

//==========terniary Operator==================
//condition?true:false 

2<1 ?console.log("true"):console.log("false");