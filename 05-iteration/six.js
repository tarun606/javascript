// const coding  = ["js", "ruby", "java", "python", "cpp"];
// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item
// })
// console.log(values);
/*+++++++++++++++++++++or++++++++++++++++++++*/
// const myNums = [1,2,3,4,5,6,7,8,9,10];
// const newNums = myNums.filter((item)=>item>4)
// console.log(newNums);
/*+++++++++++++++++++++or++++++++++++++++++++*/
 const myNums = [1,2,3,4,5,6,7,8,9,10];
// const newNums = myNums.filter((item)=>{
//     return item>4 ;
// })
// console.log(newNums);
/*+++++++++++++++++++++or++++++++++++++++++++*///
// const newNums = [];
// myNums.forEach((num) =>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);
/*+++++++++++++++++++++or++++++++++++++++++++*/
const books = [
    {title:'Book one', genre: "Fiction", publish: 1981},
    {title:'Book two', genre: "Non - Fiction", publish: 1992},
    {title:'Book three', genre: "History", publish: 1999},
    {title:'Book four', genre: "Non - Fiction", publish: 1989},
    {title:'Book five', genre: "science", publish: 2009},
    {title:'Book six', genre: "Fiction", publish: 1987},
    {title:'Book seven', genre: "History", publish: 1986},
    {title:'Book eight', genre: "science", publish: 2011},
    {title:'Book nine', genre: "Non - Fiction", publish: 1981}
]
let userbooks = books.filter((item)=>{return item.genre==="History"});
userbooks = books.filter((item)=>{return item.publish>=2000});
userbooks = books.filter((item)=>{return item.publish>=1995 && item.genre==="History"});
console.log(userbooks);