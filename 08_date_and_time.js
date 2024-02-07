//important Date and Time

let myDate=new Date();

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toDateString());

console.log(typeof myDate)

let myCreatedDate=new Date(2023,0,23);
console.log(myCreatedDate.toDateString())


let myFormat=new Date("2023-01-20")

console.log(myFormat.toDateString())

//timestamp in date

let myTimeStamp=Date.now();

console.log(myTimeStamp)
console.log(myFormat.getTime())

console.log(Math.floor(Date.now()/1000));

let newDate= new Date();

console.log(newDate.getDate())

//important method

newDate.toLocaleString('default',{
    weekday:"long",
})