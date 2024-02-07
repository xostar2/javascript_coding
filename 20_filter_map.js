//const coding = ["js","ruby","java","cpp","c","python"]

// coding.forEach((item,index,arr)=>{
//  console.log(item)
// })

// const values=coding.forEach((item,index,arr)=>{
//     //console.log(item)
//     return item
//    })// this not return any value

// console.log(values);

const myNums=[1,2,3,4,5,6,7,8,9,10]
// filter is also take a call back function and retrun value that forEach doesnt
// const  lambo=myNums.filter((item)=> item>3)
// console.log(lambo);
// const val=myNums.filter((num) =>{
//         return num>4
// })//this return values  with { } we always use return statemnt 

// console.log(val)


//===If in this situation if you want to 
//use for each then you this foreach method this way

// const newNums=[];
// myNums.forEach((item)=>{
//    if(item>4){
//     newNums.push(item);
//    }
// })
// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const UserBooks=books.filter((item)=>{
     
//     if(item.genre=="History"){
//         return item;
//     }
// })

// console.log(UserBooks);

// const UserBooks2=books.filter((item)=>{
     
//     if(item.publish>1985 && item.genre=="History"){
//         return item;
//     }
// })

// console.log(UserBooks2);

//===================================================================================================

// *******************Maps**********************

//==============================================================================

// const myNumbers=[1,2,3,4,5,6,7,8,9,10]

// it also use callback function  and also return value but foreach dont
// const newn=myNumbers.map((num)=>num+10)

// console.log(newn);

//==========chaining===============
//map return value every value but unlike map filter return value that satisfy that consdition
// const newNums=myNumbers.map((num)=> num*10).map((num)=> num +2).filter((num)=>{
//     if (num<50){
//         return num;
//     }
// })

// // second num get the value from first chain an work on that value

// console.log(newNums)


//*******************REDUCE*************//

//const myNumbers=[1,2,3,4,5,6,7,8,9,10]

// let startvalue=0

// const myTotal= myNumbers.reduce((acc,currval)=>{
//     console.log(`acc valu: ${acc} and curr val: ${currval}`)
//     return acc+currval
// },startvalue)//acc first time take  a string value and after that not use staring value  staring value in important to give accumulator 

// const mytt=myNumbers.reduce((acc,val)=> acc+val ,0)
// console.log(mytt)


const shoppinCart=[
    {
        item:"js course",
        price:2999,
    },
    {
        item:"cpp course",
        price:1999,
    },
    {
        item:"python course",
        price:4999,
    },
    {
        item:"DataScience course",
        price:12999,
    },
    
]
//const totalval=shoppingCart.reduce((acc,item)=>acc+item.price,0)
const totalval=shoppinCart.reduce((acc,item)=>{
    return acc+item.price
},0)
console.log(totalval)