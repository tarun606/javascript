//global scopes
// let a = 10;
// const b = 20;
// var c = 30;
// console.log(a);
// console.log(b);
// console.log(c);

//Block Scopes
// let a = 200;
// let b = 300;
// if(true){
//     let a = 10;
//     const b = 20;
//     var c = 30;
// }
// console.log(a);
// console.log(b);
// console.log(c);


/*                              Nested Function                             */
// function one(){
//     const username = "hitesh";
//     function two (){
//         const website = "youtube";
//         console.log(username);
//     }
//     // console.log(website);//Will throw an error
//     two();
// }
// one();


/*                              Nested if                             */
// if(true){
//     const username = "Tarun";
//     if(username==="Tarun"){
//         const website = "youtube";
//         console.log(username+website);
//     }
//     //console.log(website); Will throw error
// }
// // console.log(username);Will throw error


/*++++++++++++++++++++++++++++++++Intresting++++++++++++++++++++++++++++++++++++++*/
// console.log(addOne(5));
// function addOne(num){
//     return num+1;
// }
// // console.log(addTwo(5)); will throw an error because of hoisting and initialization
// const addTwo = function(num){
//     return num + 2;
// }
