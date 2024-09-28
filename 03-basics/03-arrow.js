// const user = {
//     name: "Tarun",
//     price: 999,
//     WelcomeMessage: function(){
//         console.log(`${this.name}, Welcome to the Website`);//'this keyword is used to represent the current context
//         console.log(this);
//     }
// }
// user.WelcomeMessage();
// // IF we change the context
// user.name= "sam";
// user.WelcomeMessage();
// console.log(this);


/*++++++++++++++++++++++++++++++++++Arrow Function+++++++++++++++++++++++++++++++++++++++++++++*/
// function chai(){
//     let username = "Tarun";
//      console.log(`${this.username}`);//Fucntion me nhi hota object me hi hota hai aur string interpolation bhi bolte hai
//      console.log(this);
// }
// chai();

//arrow function
// const arrow = () =>{
    
// }
// xample of arrow function
// const addTwo = (num1,num2) =>{
//     return num1 + num2;
// }
// console.log(addTwo(3,4));
//xample of arrow function with Implicit return
// const addTwo = (num1,num2) => num1 + num2;
// console.log(addTwo(3,4));
//                              or
//xample of arrow function with Implicit return
// const addTwo = (num1,num2) => (num1 + num2);
// console.log(addTwo(3,4));

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Note: If we write in implicit return form then we do not have to write return statement, but if 
we write curly bracket then we have to write return statement.                         */


/*+++++++++++++++++++++++++++Immediately Invoked Function Expression(IIFE)+++++++++++++++++++++*/
(function chai(name){//named iife
    console.log(`DB connected ${name}`)
})("Tarun");
//+++++++++++++++++++++++++++++++++++++or+++++++++++++++++++++++++++++++++++++++++
((name)=>{//UnNamed IIFE or Simple IIFE
    console.log(`DB Connected Two ${name}`);
})("Tarun");