//truthy and falsy values
/*Falsy Values
=>False
=>0
=>-0
=>bigInt 0
=>null
=>undefined
=>Nan
=>""
*/
/*Truthy values
=>"0"
=>'false'
=>" "
=>[]
=>{}
=>function(){}
*/
const userEmail = []
// if(userEmail){
//     console.log("Inside");
// }
// else{
//     console.log("Not Inside");
// }
//++++++++++++++++++++++++or+++++++++++++++++
// if(userEmail.length === 0){
//     console.log("Inside");
// }
// else{
//     console.log("Not Inside");
// }
//+++++++++++++++++++++++if object is empty+++++++++++++++
const obj = {};
if(Object.keys(obj).length===0){
    console.log("Object is empty");
}
else{
    console.log("Object is not Empty");
}
