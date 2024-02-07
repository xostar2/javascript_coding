const Course={
    courseName:"js in hindi",
    price:"999",
    courseInstructor:"hitesh",
}

//Course.courseInstructor  here is different syntex of doing it

const{courseInstructor:instructor/*changing the name of that key of and object */ }=Course

console.log(instructor)

//destructuring in react 

const navBar=({campany}) => {

}
navBar(campany="hitesh")

//destructure of array also

//Api concept basice
//json formated data

// {
//     "name":"raj",
//     "coursename":"js in hindi",
//     "price":"free",
// }

//array formated API data

// {
//     {},  
//     {},
//     {},
// }
































































