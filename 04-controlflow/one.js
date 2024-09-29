// Control Flow
// ==,<=,>=,<,>,!=,===
/*++++++++++++++++++++++++++++++++++only if++++++++++++++++++++++++++++++++++++*/
// if(2=="2"){
//     console.log("Executed");
// }
/*++++++++++++++++++++++++++++++++++if else++++++++++++++++++++++++++++++++++++*/
// let temp = 41
// if(temp<=50){
//     console.log("temp less than 50");
// }
// else{
//     console.log("temp greater than 50");
// }
// console.log("Executed");
/*++++++++++++++++++++++++++++++++++scope problem++++++++++++++++++++++++++++++++++++*/
// const score = 200;
// if(score = 200){
//     let power = "fly";
//     console.log(`user power ${power}`);
// }
// console.log(`user power ${power}`);//this statement will throw an error because of scope
/*++++++++++++++++++++++++++++++++++ShortHand Notation++++++++++++++++++++++++++++++++++++*/
// const balance = 1000;
// if(balance > 500)console.log("balance greater than 500");//Implicit Scope
/*++++++++++++++++++++++++++++++++++Nested Scope++++++++++++++++++++++++++++++++++++*/
// const balance = 740;
// if(balance < 500){
//     console.log("Less than 500");
// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else if(balance < 900){
//     console.log("balance less than 900");
// }
// else{
//     console.log("above 900");
// }
/*++++++++++++++++++++++++++++++++++&&operator++++++++++++++++++++++++++++++++++++*/
// let UserLoggedIn = true;
// let DebitCard = true;
// if(UserLoggedIn && DebitCard){
//     console.log("Allowed to buy Course");
// }
/*++++++++++++++++++++++++++++++++++||operator++++++++++++++++++++++++++++++++++++*/
// let LoggedinFromGoogle = true;
// let LoggedinFromEmail = false;
// if(LoggedinFromGoogle||LoggedinFromEmail){
//     console.log("Login Validated");
// }
/*++++++++++++++++++++++++++++++++++Nullish coalescing operator++++++++++++++++++++++++++++++++++++*/
// let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 10;
// val1 = null ?? 10 ?? 20;
// console.log(val1)
/*++++++++++++++++++++++++++++++++++Terniary operator++++++++++++++++++++++++++++++++++++*/
//condition? true:false
const price = 20;
price<=40?console.log("Less than 40"):console.log("above 40");