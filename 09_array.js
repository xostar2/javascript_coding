// //array==========

// const myArr= [0,1,2,3,4,5]
// const myHeroes=["shaktiman","k=nagga"]

// const myArr2=new Array(2,3,4,68)

// //console.log(myArr[0])

//  //push
// //  myArr2.push(7);
// //  console.log(myArr2);
// //  myArr2.pop();
// //  console.log(myArr2)
// //  // unshift=add something to start and shift other value
// //  myArr.unshift(8);
// //  console.log(myArr)
// //  myArr.shift();
// //  console.log(myArr)
// // sometrue and false

// //  console.log(myArr.includes(6))

// //  console.log(myArr.indexOf(7))

// // const newArr=myArr.join();
// // console.log(myArr);
// // console.log(typeof newArr)

// //slice and splice=====================================


// console.log("A",myArr)

// const myNewArray=myArr.slice(1,3);
// //it does not manupulate original array
// console.log("B",myNewArray);

// const myn2=myArr.splice(1,3);
// //it manupulate original array
// console.log(myn2);



// const marvel_heros=["thor","IronMan","spiderman"]

// const dc_heros=["superman","batman","flash"]


// //marvel_heros.push(dc_heros);
// console.log(marvel_heros)//push array in array

// console.log(marvel_heros[2])

// const All_heros=marvel_heros.concat(dc_heros)
// console.log(All_heros)

// ///easy spread operater to all two array

// const all_new_heros=[...marvel_heros,...dc_heros]
// console.log(all_new_heros)

// const cartoon=[1,2,3,4,[4,5,6],7,[6,7,[4,5]]]

// const real_another_array=cartoon.flat(Infinity)

// console.log(real_another_array)



//web sceapping time

// console.log(Array.isArray("hitesh"));
// console.log(Array.from("rajkishan"))//convert to arrray from string

// console.log(Array.from({name:"hitesh"}))//intersting case fro  interview




let score1=100
let score2=1200
let score3=234

console.log(Array.of(score1,score2,score3))
