//============== Array Loops===============

// first=  " for of "

// ["","",""] 
// [{},{},{}]

// const arr=[1,2,3,4,5,6,7,8,9]

// // for (const num of arr) {
// //     console.log(num)
// // }
// const mystring="rajkishan"

// for( const name of mystring){
//     console.log(name)
//}

//maps
// const map=new Map()
// map.set('IN',"India");
// map.set('USA',"United state of maerica")

// console.log(map)


// for (const key of map) {
//     console.log(key)
// }

// for (const [key,value] of map) {
//     console.log(key,':-',value)
// }

// let obj = {
//     name: "John",
//     age: 30
//   };
  
//   let map = new Map(Object.entries(obj));
  
//   console.log( map.get('name') );

// const object={
//     js:"javascript",
//     cpp:"c++",
//     rb:"ruby",
//     swift:"swift by apple"
// }

// // for in loop

// for (const key in object) {
//     console.log(object[key]);
// }

// const newarray=[2,334,53,346546,4353,234]

// for(const num in newarray){
//     console.log(newarray[num])
// }



//==========forEach loop================

const coding=["js","ruby","python","cpp","c"]
// call back funnction has no name
// coding.forEach(function(item){

// })

// coding.forEach(function (val){
//         console.log(val);
// })

// coding.forEach((val)=> {
//     console.log(val)
// })


// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme)//only give reference not printme() this


// coding.forEach((item,index,arr)=>{
//         console.log(item,index,arr);
//         // console.log(index);
//         // console.log(arr);
// })

const mycoding=[
    {
        languageName:"JavScript",
        languageFileName:"js"
    },
    {
        languageName:"Java",
        languageFileName:"java",
    },
    {
        languageName:"python",
        languageFileName:"py",
    }
]

mycoding.forEach((item,index)=>{
        console.log(item.languageFileName,item.languageName)
})




