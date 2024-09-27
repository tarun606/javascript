// console.log("T");
// console.log("a");
// console.log("r");
// console.log("u");
// console.log("n");

// function SayMyName(){
//     console.log("T");
//     console.log("a");
//     console.log("r");
//     console.log("u");
//     console.log("n");
// }
// SayMyName();


/*                              1type                               */
// function ADD(n1,n2){
//     let n3 = n1+n2;
//     return n3;    
// }
/*                              2type                               */
// function AddTwoNumbers(n1,n2){
//     // let n3= n1+n2;
//     return n1+n2;
// }
// let sum = AddTwoNumbers(3,4);
// console.log("The result of addition is: "+ sum);

/*                              1type                               */
// function UserLogin(username){
//     console.log(`${username} Just Logged in`);
// }
// UserLogin("Tarun");
/*                              2type                               */
// function UserLogin(username){
//     if(username===undefined){
//         console.log("Please Enter a username");
//         return;
//     }
//     return `${username} Just Logged in`
// }
// console.log(UserLogin());
/*                              2type same but another Operation                               */
// function UserLogin(username = "sam"){
//     if(!username){
//         console.log("Please Enter a username");
//         return;
//     }
//     return `${username} Just Logged in`
// }
// console.log(UserLogin("Tarun"));



/*                              Function with objects                               */




// function CalculateCartPrice(n1){
//     return n1;
// }
// console.log(CalculateCartPrice(200));
/*                              What if value is given more than the declared varialbe                                */
// function CalculateCartPrice(val1,val2,...n1){       // '... is a rest operator similar as spread operator'
//     return n1;
// }
// console.log(CalculateCartPrice(200,300,400,500,600,700,800));



//function with object
// const user = {
//     username: "Tarun",
//     price:999
// }
// function HandleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
// }
// HandleObject(user);


/*                              Function with array                             */
// const arr = [100,200,300,400];
// function ReturnSecondArray(getarray){
//     return getarray[1];
// }
// console.log(ReturnSecondArray([100,200,300,400]));
