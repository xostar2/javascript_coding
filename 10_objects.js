// ==two way to define objects one is is itreale and second as constructor 
//there is a concept of singolton 

//constructor se singolton banega

//=========object literals===================

//define symbol
const mySym=Symbol("key1")
const jsuser={
    name:"raj kishan",
    "lastname":"singh",
    //mysym:"mykey1", here it is not comr is use as symbol it is come use as a string
    [mySym]:"mykeys",//now it is use as symbol this is the syntex of symbol when we want to use symbole in object as key symbols
    age:18,
    location:'jaipur',
    email:"raj@gmail.com",
    isLogged:false,
    lastLoginDays:["monday","saturday"],

};

// // console.log(jsuser["email"])
// // console.log(jsuser.name)
// // console.log(jsuser["lastname"])
// // console.log(jsuser[mySym])



// jsuser.email="hiteshkiumar";
// //Object.freeze(jsuser)//to avoid changes

// //console.log(jsuser)



// jsuser.greeting=function(){
//     console.log(`hello jsuser ${jsuser.age}`)
// }


// console.log(jsuser.greeting());