// const user={
//     username:"hitesh",
//     price:1999,
//     welcomeMwssage:function(){
//             console.log(`${this.username} welcome to website`)
//             console.log(this)//here is show constext of that object
//         }
//     }
//     console.log(user.welcomeMwssage())
    //console.log(this)  this return {} empty object outside a scope
    //and in the browser is shows window object //window==globleobject



    // function chai(){
    //     let username="raj"//we cant use this here
    //     console.log(this);
    // }
    // chai();

    // const chai =  ( )  =>{
    //     let username="raj"
    //     console.log(this)
    // }
    // chai();
//=======================normal Arrow function
    // const addtwo =(num1,num2) =>{
    //         return num1+num2;
    // }
    // console.log(addtwo(2,4));

    //=================2nd way Arroe function

    //const addTwo =(num1,num2) =>num1+num2
    
    const addTwo =(num1,num2) =>(num1+num2) //in implicite arrow function we dont use paranthesis 
    const addTwo1 =(num1,num2) =>({username:"hitesh"}) //in implicite arrow function we dont use paranthesis 

//    when we use { }  we use retrurn statemnet akways


const myarr=[2,3,4,5,6,7]
myarr.forEach()
