const coding  = ["js", "ruby", "java", "python", "cpp"];
// coding.forEach(function(val){
//     console.log(val);
// })
/*+++++++++++++++++++++++++++++++++++++using arrow function for each+++++++++++++++++++++++++++++++++*/
// coding.forEach((item)=>{
//     console.log(item);
// })
//+++++++++++++++++another++++++++++++++
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);
//+++++++++++++++++another+++++++++++++++
// coding.forEach((item,index, arr)=>{
//     console.log(item,index, arr);
// })
/*++++++++++++++++++++++++++++++++++array object+++++++++++++++++++++++++++++++*/
const myCoding = [
    {
        languageName : "Javascript",
        languageFileName : "Js"
    },
    {
        languageName : "Java",
        languageFileName : "Java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    }
    
]
myCoding.forEach((item) => {
    console.log(item.languageName);
}) 