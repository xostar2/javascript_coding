//Immediatly Invoked Function Expression 
//somethinf we dint want to eccecft globle cope effect to local scope

//globle scope pollutionremovel
//IIFE
// function chai(){
//     console.log(`DB connected`)
// }
// chai();

(function chai(){  //Named IIFE
    console.log(`DB Connected`);
})();   //IIFE to run this file instantly

//( ) first function defination   
//second( ) function cALL /execution call ......chai();this
// ; is very important  to end the IIFE function to work another function


//like arrow function

 
// (() => {
//     console.log(`DB Connected`);
// })()

//pass argument in IIFE

((name) => {   //normal IIFE
    console.log(`DB Connected ${name}`);
})('raj')

