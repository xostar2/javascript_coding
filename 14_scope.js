// //Globle Scope   
// let a=10
// const b=20
// var c=30

// if(true){ //Block scope
//   let aa=10;
//   const b=100;
//   var c=3000;

// }


// console.log(a);
// console.log(b);
// console.log(c);  
// function one (){   //function CallStake  //Clouser
//         const useName="Raj kishan"
//         function Two(){
//             const WebSite="youtube"
//             console.log(useName);
//         }

//         console.log(WebSite)
//         Two()
// }
// one()

// if(true){
//     const username="hitesh"
//     if (username="hitesh"){
//         const WebSite="youtube"
//         console.log(username+website)
//      }
// }

//===========Intresting concept=====================

function addOne(value){ //functions
    return num+1;
}
addOne(5)

const addTwo=function(num){//function Expression [hoisting]
    return num+2;
}