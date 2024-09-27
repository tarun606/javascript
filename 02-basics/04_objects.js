// const tinder = new Object(
//     name =  "Tarun"
// )
// console.log(tinder)

// const tinderuser = {}
// tinderuser.id = "abc";
// tinderuser.name = "sam";
// tinderuser.isLoggedin = false;
// console.log(tinderuser);

// const regularuser = {
//     email:"tarunkumary.1128@gmail.com",
//     fullname:{
//         username:{
//             firstname:"Tarun",
//             lastname:"kumar"
//         }
//     }
// }
// console.log(regularuser.fullname?.username.firstname);

// const obj1 = {1:"a", 2:"b"}
// const obj2 = {3:"c", 4:"d"}
// const obj3 = {5:"e", 6:"f"}
// //const obj4 = {obj1,obj2}
// //const obj4 = Object.assign({},obj1,obj2,obj3);
// const obj4 = {...obj1,...obj2,...obj3};
// console.log(obj4);

/*                                      Array Objects that come from database                                   */

// const arrobj = [
//     {
//         name:"Tarun",
//         email:"abc"
//     },
//     {
//         name:"Akshay",
//         email:"abc"
//     },
//     {
//         name:"Bindal",
//         email:"abc"
//     }
// ]
// /*                                      to access array object                                   */
// console.log(arrobj);

/*                                      to acces keys and values from object separately           */

// const tinder = {
//     name:"tarun",
//     email:"abc",
//     face:10,
//     job:"dev",
//     des:false
// }
// console.log (Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder));
// console.log (typeof(tinder));
// console.log(tinder.hasOwnProperty("des"));



const course = {
    courseName: "javascript",
    price:999,
    courseInstructor:"Hitesh"
}
// console.log(course.courseInstructor);
//              or
// const{courseInstructor} = course;
// console.log(courseInstructor);
//              or
const{courseInstructor:instructor} = course;
console.log(instructor);
