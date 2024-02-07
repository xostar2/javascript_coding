//Singleton object
//const tinder={}//non singleton
const tinderUser=new Object();
tinderUser.id="1234abc"
tinderUser.name="rajkishan"
tinderUser.isLoggedIn=false
console.log(tinderUser)
 

const regularUser={
    email:"something@123",
    fullname:{
            userfullname:"hitesh",
            lastname:"singh",
    }
}

//console.log(regularUser);

//merge objects

const object1={1:"a",2:"b",3:"c"}
const object2={4:"d",5:"e"}

const object3=Object.assign(object1,object2)//not correct way

const object4=Object.assign({},object1,object2);//correct way {} is array this guranty that {}target

const obj3={...object1, ...object2}
console.log(obj3)
 
//when vakue came from database bcz data come as arrays

const users=[
    {
        id:1,
        email:"raj@123.com"
    }
]

console.log(typeof(Object.keys(tinderUser)))
console.log(typeof(Object.values(tinderUser)))
console.log((Object.entries(tinderUser)))//less use


console.log(tinderUser.hasOwnProperty('id'))//use to check property avilable